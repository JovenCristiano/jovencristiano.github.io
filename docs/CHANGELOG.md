# CHANGELOG

Formato: [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/).

## [No publicado]

### Añadido — 2026-09-03

- **Primer despliegue en producción:** https://jovencristiano.github.io
- Repositorio remoto `JovenCristiano/jovencristiano.github.io`, GitHub Pages con Source
  «GitHub Actions».

- `docs/KEYWORD_RESEARCH.md`: procedimiento de investigación con Keyword Planner y Search Console,
  lista semilla de ~55 keywords por cluster y criterios de priorización.
- `SEO_MASTER_MAP.md`: columna `volumen` añadida; `enlaces internos` retirada (se gestiona en cada
  pieza, no en la tabla).

### Corregido — 2026-09-03

- El workflow fallaba: `withastro/action@v3` arrancaba con Node 20 y Astro 7 exige >= 22.12.
  Sustituido por pasos explícitos (`setup-node@v5` con Node 24 → `npm ci` → `npm run build` →
  `upload-pages-artifact`). Así el error señala siempre la línea exacta.

**CHECKPOINT 0 cerrado.**

### Añadido — 2026-09-02 (implementación CHECKPOINT 0)

- Proyecto Astro 7 con TypeScript `strict`, `@astrojs/sitemap` y `@astrojs/mdx`.
- `src/site.config.mjs`: configuración de sitio y navegación en un único lugar.
  `SITE.url` = `https://jovencristiano.github.io` (cuenta de GitHub `JovenCristiano`, confirmada).
- `src/content.config.ts`: colecciones `dinamicas` y `juegos` con el esquema Zod cerrado de
  `CONTENT_PLAN.md` (Content Layer API con `glob` loader).
- Sistema visual: `src/styles/tokens.css` y `base.css` según `DESIGN_SYSTEM.md`.
- Componentes: `SEO`, `Nav`, `Footer`, `Breadcrumb`, `ResourceCard`, `ResourceMeta`,
  `RelatedResources`, `CTA`. Menú y FAQ con `<details>` nativo, sin JavaScript.
- Layouts: `BaseLayout`, `ClusterLayout`, `ResourceLayout`.
- Páginas: Home (§7), índices de cluster, ficha de recurso, `sobre-nosotros`, `contacto`, `404`,
  `robots.txt` generado en build.
- JSON-LD: `WebSite` y `FAQPage` en Home, `Article` en recursos, `BreadcrumbList` en todas.
- Tres recursos reales de muestra: nudo humano, silla de la verdad y carrera de versículos.
- Workflow `.github/workflows/deploy.yml` para GitHub Pages.
- Repositorio git inicializado.

### Verificado

- `npm run build`: 9 páginas, sin errores.
- **0 KB de JavaScript** en Home y en fichas de recurso.
- CSS total ≈ 8 KB (presupuesto: < 20 KB).
- `canonical`, Open Graph, Twitter Cards y `sitemap-index.xml` correctos.

### Decisiones

- `trailingSlash: 'always'` para que las URLs canónicas coincidan exactamente con las servidas por
  GitHub Pages y no se dupliquen en el índice.
- Los borradores (`draft: true`) se ven en desarrollo pero no se compilan en producción.
- Los `related` se resuelven contra la colección: un slug inexistente no genera enlace roto.

### Añadido — 2026-09-02 (documentación base)

- Documentación base del proyecto en `docs/`:
  - `PROJECT_CONTEXT.md` — recuperación de contexto entre sesiones/agentes
  - `MASTER_PLAN.md` — plan maestro (copia canónica dentro del repo)
  - `ARCHITECTURE.md` — arquitectura técnica propuesta, riesgos y próximos pasos
  - `ROADMAP.md` — checkpoints con criterios de salida verificables
  - `CONTENT_PLAN.md` — modelo de contenido, frontmatter y checklist de calidad
  - `SEO_MASTER_MAP.md` — estructura del mapa de keywords (sin datos todavía)
  - `MONETIZATION_PLAN.md` — escalera de productos y secuencia de validación
  - `DESIGN_SYSTEM.md` — tokens, tipografía, componentes y accesibilidad

### Decisiones

- Hosting en GitHub Pages sobre repo raíz `<usuario>.github.io`, con `base: '/'`, para poder
  migrar a dominio propio sin romper rutas internas.
- Stack sin framework UI ni Tailwind: Astro + TypeScript + CSS con custom properties.
- Las Content Collections se activan por demanda de contenido, no de antemano.

### Pendiente de decisión

- Correo de contacto del proyecto.
- Herramienta de analítica y de email marketing.
- Plataforma de venta del primer producto digital.
