/**
 * Auditoría anticanibalización de los artículos.
 *
 * Una keyword, una página. Si dos páginas del sitio persiguen la misma consulta, Google
 * reparte la fuerza entre ellas y normalmente posiciona peor que si hubiera una sola.
 *
 * Comprueba tres cosas:
 *   1. que ningún `keyword` se repita entre artículos,
 *   2. que ningún artículo persiga la keyword que ya defiende un índice de cluster,
 *   3. que cada artículo enlace al menos 3 fichas (su trabajo es repartir, no acumular).
 *
 * Uso:  npm run audit:articulos
 * Sale con código 1 si algo falla, para poder usarlo en CI.
 */
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const DIR = 'src/content/articulos';
const MIN_ENLACES_A_FICHAS = 3;

/** Normaliza para comparar: sin tildes, sin mayúsculas, sin espacios de sobra. */
const norm = (s) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim();

// Keywords que ya defienden los índices de cluster (campo `title` de clusters.ts).
const clustersTs = readFileSync('src/utils/clusters.ts', 'utf8');
const keywordsDeCluster = new Map();
for (const [, base, title] of clustersTs.matchAll(/base: '([^']+)',[^]*?title: '([^']+)'/g)) {
  keywordsDeCluster.set(norm(title), base);
}

const articulos = [];
for (const archivo of readdirSync(DIR).filter((f) => /\.mdx?$/.test(f))) {
  const texto = readFileSync(join(DIR, archivo), 'utf8');
  const keyword = texto.match(/^keyword: '(.+)'$/m)?.[1] ?? '';
  // Enlaces a fichas: rutas con al menos dos segmentos (`/dinamicas/el-nudo-humano/`).
  const enlaces = [...texto.matchAll(/href="(\/[^"]+)"/g)]
    .map((m) => m[1])
    .filter((u) => u.split('/').filter(Boolean).length >= 2);
  articulos.push({ archivo, keyword, fichas: new Set(enlaces).size });
}

const sinKeyword = articulos.filter((a) => !a.keyword);

const vistas = new Map();
const duplicadas = [];
for (const a of articulos) {
  const k = norm(a.keyword);
  if (!k) continue;
  if (vistas.has(k)) duplicadas.push(`«${a.keyword}» en ${a.archivo} y ${vistas.get(k)}`);
  else vistas.set(k, a.archivo);
}

const chocanConCluster = articulos
  .filter((a) => keywordsDeCluster.has(norm(a.keyword)))
  .map((a) => `${a.archivo} persigue «${a.keyword}», que ya defiende ${keywordsDeCluster.get(norm(a.keyword))}`);

const pocoReparto = articulos.filter((a) => a.fichas < MIN_ENLACES_A_FICHAS);

let fallos = 0;
const informar = (titulo, lista, formato = (x) => x) => {
  if (lista.length === 0) {
    console.log(`OK  ${titulo}`);
    return;
  }
  fallos += lista.length;
  console.log(`FALLO  ${titulo} (${lista.length})`);
  for (const item of lista) console.log(`       ${formato(item)}`);
};

console.log(`\nArtículos: ${articulos.length}\n`);

informar('todos declaran keyword', sinKeyword, (a) => a.archivo);
informar('keywords duplicadas entre artículos', duplicadas);
informar('artículos que chocan con un índice de cluster', chocanConCluster);
informar(
  `artículos con menos de ${MIN_ENLACES_A_FICHAS} enlaces a fichas`,
  pocoReparto,
  (a) => `${a.archivo} (${a.fichas})`,
);

console.log(fallos === 0 ? '\nSin canibalización.\n' : `\n${fallos} problemas.\n`);
process.exit(fallos === 0 ? 0 : 1);
