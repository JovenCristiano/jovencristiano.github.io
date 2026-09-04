/**
 * Auditoría del enlazado interno (§13 del MASTER_PLAN, CHECKPOINT 3).
 *
 * Comprueba cuatro cosas que el compilador no puede detectar:
 *   1. que cada pieza tenga entre 3 y 6 enlaces salientes,
 *   2. que ningún `related` apunte a un recurso inexistente,
 *   3. que no haya páginas huérfanas (sin enlaces entrantes),
 *   4. que ninguna quede con un solo enlace entrante.
 *
 * Uso:  npm run audit:enlaces
 * Sale con código 1 si algo falla, para poder usarlo en CI.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const RAIZ = 'src/content';
const MIN_SALIENTES = 3;
const MAX_SALIENTES = 6;
const MIN_ENTRANTES = 2;

const piezas = new Map(); // slug -> { cluster, related }

for (const cluster of readdirSync(RAIZ)) {
  const dir = join(RAIZ, cluster);
  if (!statSync(dir).isDirectory()) continue;
  for (const archivo of readdirSync(dir).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))) {
    const slug = archivo.replace(/\.mdx?$/, '');
    const texto = readFileSync(join(dir, archivo), 'utf8');
    const linea = texto.match(/^related: \[(.*)\]$/m);
    const related = linea ? [...linea[1].matchAll(/'([^']+)'/g)].map((m) => m[1]) : [];
    piezas.set(slug, { cluster, related });
  }
}

const entrantes = new Map([...piezas.keys()].map((s) => [s, 0]));
const rotos = [];
for (const [slug, { related }] of piezas) {
  for (const destino of related) {
    if (!piezas.has(destino)) rotos.push(`${slug} -> ${destino}`);
    else entrantes.set(destino, entrantes.get(destino) + 1);
  }
}

const fueraDeRango = [...piezas].filter(
  ([, p]) => p.related.length < MIN_SALIENTES || p.related.length > MAX_SALIENTES,
);
const huerfanas = [...entrantes].filter(([, n]) => n === 0);
const debiles = [...entrantes].filter(([, n]) => n > 0 && n < MIN_ENTRANTES);

const total = [...piezas.values()].reduce((n, p) => n + p.related.length, 0);
const cruces = [...piezas].reduce(
  (n, [, p]) =>
    n + p.related.filter((d) => piezas.get(d) && piezas.get(d).cluster !== p.cluster).length,
  0,
);

console.log(`\nRecursos: ${piezas.size}`);
console.log(`Enlaces internos: ${total} (media ${(total / piezas.size).toFixed(1)} por pieza)`);
console.log(`Cruzan de cluster: ${cruces} (${Math.round((100 * cruces) / total)} %)\n`);

let fallos = 0;
const informar = (titulo, lista, formato) => {
  if (lista.length === 0) {
    console.log(`OK  ${titulo}`);
    return;
  }
  fallos += lista.length;
  console.log(`FALLO  ${titulo} (${lista.length})`);
  for (const item of lista) console.log(`       ${formato(item)}`);
};

informar('enlaces rotos', rotos, (x) => x);
informar(
  `piezas con menos de ${MIN_SALIENTES} o más de ${MAX_SALIENTES} enlaces salientes`,
  fueraDeRango,
  ([slug, p]) => `${slug} (${p.related.length})`,
);
informar('páginas huérfanas', huerfanas, ([slug]) => slug);
informar(
  `páginas con menos de ${MIN_ENTRANTES} enlaces entrantes`,
  debiles,
  ([slug, n]) => `${slug} (${n})`,
);

console.log(fallos === 0 ? '\nEnlazado interno correcto.\n' : `\n${fallos} problemas.\n`);
process.exit(fallos === 0 ? 0 : 1);
