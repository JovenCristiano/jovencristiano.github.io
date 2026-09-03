import type { APIRoute } from 'astro';
import { SITE } from '../site.config.mjs';

// Generado en build para que el sitemap apunte siempre al `site` configurado.
export const GET: APIRoute = () =>
  new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', SITE.url).href}\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
