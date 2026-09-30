// @ts-check
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import { SITE } from './src/site.config.mjs';

/**
 * `lastmod` por URL, sacado del frontmatter real de cada pieza.
 *
 * Sin esta fecha, el sitemap dice «existen estas 82 URLs» pero no dice cuáles han
 * cambiado, que es justo lo que Google usa para decidir a qué vuelve. Se usa
 * `updatedAt` si existe y `publishedAt` si no.
 *
 * Solo se declara para las fichas y artículos, que son las que tienen fecha de verdad.
 * Inventar un `lastmod` para los índices sería decirle a Google algo que no sabemos.
 */
function lastmodPorUrl() {
  const RAIZ = './src/content';
  const bases = Object.fromEntries(
    [...readFileSync('./src/utils/clusters.ts', 'utf8').matchAll(
      /id: '([^']+)',[^]*?base: '([^']+)'/g,
    )].map((m) => [m[1], m[2]]),
  );
  bases.articulos = '/articulos/';

  const mapa = new Map();
  for (const cluster of readdirSync(RAIZ)) {
    const dir = join(RAIZ, cluster);
    if (!statSync(dir).isDirectory() || !bases[cluster]) continue;
    for (const archivo of readdirSync(dir).filter((f) => /\.mdx?$/.test(f))) {
      const texto = readFileSync(join(dir, archivo), 'utf8');
      const fecha =
        texto.match(/^updatedAt:\s*(\d{4}-\d{2}-\d{2})/m)?.[1] ??
        texto.match(/^publishedAt:\s*(\d{4}-\d{2}-\d{2})/m)?.[1];
      if (!fecha) continue;
      const slug = archivo.replace(/\.mdx?$/, '');
      mapa.set(new URL(`${bases[cluster]}${slug}/`, SITE.url).href, fecha);
    }
  }
  return mapa;
}

const LASTMOD = lastmodPorUrl();

// `base: '/'` desde el día uno: permite migrar a dominio propio sin romper rutas internas.
export default defineConfig({
  site: SITE.url,
  base: '/',
  trailingSlash: 'always',
  integrations: [
    mdx(),
    sitemap({
      serialize(item) {
        const fecha = LASTMOD.get(item.url);
        return fecha ? { ...item, lastmod: fecha } : item;
      },
    }),
  ],
  build: { format: 'directory' },
});
