# ARCHITECTURE

Arquitectura técnica propuesta para CHECKPOINT 0. **Pendiente de aprobación antes de escribir código.**

## 1. Stack

| Capa | Elección | Motivo |
|---|---|---|
| Framework | Astro (última estable) | HTML estático por defecto, cero JS salvo que se pida, ideal para SEO |
| Lenguaje | TypeScript (`strict`) | Frontmatter tipado vía Content Collections; errores en build, no en producción |
| Contenido | Markdown + MDX | MDX solo donde haga falta un componente dentro del artículo |
| Estilos | CSS plano con custom properties | Sin dependencia de build extra, sin clases infinitas, control total del peso |
| Hosting | GitHub Pages (`<usuario>.github.io`) | Gratuito, `base: '/'`, migrable a dominio propio sin cambiar rutas |
| Deploy | GitHub Actions (`withastro/action`) | Build reproducible en cada push a `main` |

**Descartado a propósito:** React/Vue/Svelte (no hay interactividad que lo justifique), Tailwind
(añade toolchain sin necesidad todavía), CMS headless (el contenido lo escribe una sola persona en
Markdown), backend propio (§29).

## 2. Estructura del repositorio

```text
<usuario>.github.io/
├── .github/workflows/deploy.yml
├── src/
│   ├── components/        # Card, Breadcrumb, SEO, RelatedResources, CTA
│   ├── content/           # Content Collections (fuente de verdad del contenido)
│   ├── layouts/           # BaseLayout, ResourceLayout, CategoryLayout
│   ├── pages/             # Rutas; una carpeta por cluster
│   ├── styles/            # tokens.css, base.css
│   └── utils/             # slugs, filtros, agrupaciones
├── public/
│   ├── images/
│   ├── icons/
│   ├── downloads/         # lead magnets y PDFs
│   └── robots.txt
├── docs/
├── astro.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

## 3. Content Collections

Ocho colecciones, definidas en `src/content/config.ts` con esquemas Zod:

`dinamicas`, `juegos`, `actividades`, `temas`, `reflexiones`, `estudios`, `preguntas`, `recursos`.

Regla: **la colección no se crea hasta que exista contenido real para ella.** Arrancamos con
`dinamicas` y `juegos`; el resto se añade cuando haya al menos 5 piezas listas.

El esquema exacto del frontmatter vive en `CONTENT_PLAN.md` (fuente única).

## 4. Rutas

```text
/                          Home (landing + puerta SEO)
/dinamicas/                índice de cluster
/dinamicas/[slug]/         recurso
/juegos-biblicos/          índice de cluster
/juegos-biblicos/[slug]/   recurso
/sobre-nosotros/
/contacto/
/404
```

Rutas generadas con `getStaticPaths()` desde las colecciones. Los clusters restantes del §6 del
MASTER_PLAN se activan según demanda de contenido, no de antemano.

**Regla dura:** una URL publicada no se cambia. Si hay que hacerlo, se documenta y se redirige.

## 5. SEO técnico

- `<SEO>` como componente único: `title`, `description`, `canonical`, Open Graph, Twitter Card.
- `@astrojs/sitemap` para `sitemap-index.xml`.
- `public/robots.txt` apuntando al sitemap.
- Structured data JSON-LD: `Article` en recursos, `FAQPage` donde haya FAQ, `BreadcrumbList` en todas.
- Un solo `<h1>` por página; jerarquía de headings sin saltos.
- Imágenes vía `astro:assets` (`<Image>`), lazy por defecto, `width`/`height` siempre presentes
  para evitar CLS.

## 6. Rendimiento — presupuesto

| Métrica | Objetivo |
|---|---|
| JS enviado al cliente | 0 KB en Home y en páginas de recurso |
| CSS total | < 20 KB |
| Lighthouse Performance (móvil) | ≥ 95 |
| LCP | < 2,0 s en 4G |

Cualquier dependencia que rompa este presupuesto necesita justificación escrita.

## 7. Riesgos identificados

| Riesgo | Impacto | Mitigación |
|---|---|---|
| Nicho SEO muy competido (contenido cristiano genérico) | Alto — sin tráfico no hay negocio | Atacar long tail de **líderes** (filtros por edad/duración/materiales), no frases devocionales |
| Escalar contenido con IA y caer en contenido superficial | Alto — penalización y pérdida de confianza | Regla §12: 50 recursos útiles > 500 genéricos. Checklist de calidad obligatorio |
| Cambio de dominio a futuro | Medio — riesgo de romper enlaces | `base: '/'` desde el día uno; todas las URLs internas relativas a la raíz |
| Frontmatter que crece sin control | Medio — refactors caros | Esquema Zod cerrado; campo nuevo requiere justificación |
| Construir buscador/filtros demasiado pronto | Medio — tiempo desviado del contenido | No antes de ~50 recursos (§16) |
| GitHub Pages sin control de servidor | Bajo | Sin redirecciones 301 nativas; por eso no se cambian URLs |

## 8. Próximos pasos tras aprobar

1. `npm create astro@latest` con TypeScript strict, sin plantilla.
2. `astro.config.mjs` con `site`, `base: '/'` y sitemap.
3. `src/content/config.ts` con las dos primeras colecciones.
4. `tokens.css` + `base.css` según `DESIGN_SYSTEM.md`.
5. `BaseLayout` + componente `SEO`.
6. Home, índice de cluster y página de recurso.
7. 2–3 recursos de muestra reales (no lorem ipsum).
8. Workflow de deploy + primer despliegue.
9. `git init` y commit inicial.
