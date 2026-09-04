# Joven Cristiano

Biblioteca digital de recursos cristianos para jóvenes y líderes juveniles: dinámicas, juegos
bíblicos, actividades, temas y material listo para usar.

**Estado:** CHECKPOINT 0 cerrado. **CHECKPOINT 2 cerrado:** 50 recursos publicados.

**En línea:** https://jovencristiano.github.io — cada push a `main` despliega automáticamente.

## Arrancar

```bash
npm install
npm run dev            # http://localhost:4321
npm run build
npm run audit:enlaces  # audita el enlazado interno
```

> El dominio vive en `src/site.config.mjs`. Si algún día hay dominio propio, se cambia ahí y solo ahí.

## Documentación

Empieza por **[docs/PROJECT_CONTEXT.md](docs/PROJECT_CONTEXT.md)**: resume el estado actual, las
decisiones tomadas y las pendientes.

| Documento | Contenido |
|---|---|
| [PROJECT_CONTEXT.md](docs/PROJECT_CONTEXT.md) | Recuperación de contexto — leer primero |
| [MASTER_PLAN.md](docs/MASTER_PLAN.md) | Plan maestro completo |
| [ARCHITECTURE.md](docs/ARCHITECTURE.md) | Arquitectura técnica, decisiones y riesgos |
| [ROADMAP.md](docs/ROADMAP.md) | Checkpoints y criterios de salida |
| [CONTENT_PLAN.md](docs/CONTENT_PLAN.md) | Modelo de contenido y control de calidad |
| [SEO_MASTER_MAP.md](docs/SEO_MASTER_MAP.md) | Mapa de keywords y clusters |
| [KEYWORD_RESEARCH.md](docs/KEYWORD_RESEARCH.md) | Cómo investigar keywords y rellenar el mapa |
| [LINK_BUILDING.md](docs/LINK_BUILDING.md) | Cómo conseguir enlaces externos |
| [MONETIZATION_PLAN.md](docs/MONETIZATION_PLAN.md) | Escalera de productos |
| [DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md) | Tokens y componentes |
| [CHANGELOG.md](docs/CHANGELOG.md) | Historial de cambios |

## Stack previsto

Astro · TypeScript · Markdown/MDX · CSS · GitHub Pages
