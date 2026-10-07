# ROADMAP

Orden de ejecución. **No se adelantan checkpoints.** Cada uno tiene un criterio de salida
verificable; si no se cumple, no se pasa al siguiente.

Leyenda: ⬜ pendiente · 🟡 en curso · ✅ hecho

---

## ✅ CHECKPOINT 0 — Fundación

**Objetivo:** proyecto ejecutable y arquitectura aprobada.

- ✅ Documentación base en `docs/`
- ✅ Arquitectura aprobada · cuenta de GitHub confirmada: `JovenCristiano`
- ✅ Repositorio `JovenCristiano/jovencristiano.github.io` + push a `main`
- ✅ Astro 7 + TypeScript strict instalado
- ✅ Content Collections (`dinamicas`, `juegos`) con esquema Zod
- ✅ Sistema visual base (`tokens.css`, `base.css`)
- ✅ `BaseLayout` + componente `SEO`
- ✅ Workflow de deploy a GitHub Pages **ejecutado con éxito**

**Criterio de salida:** ✅ cumplido el 2026-09-03 — https://jovencristiano.github.io en línea.

---

## 🟡 CHECKPOINT 1 — MVP web

- ✅ Home según el orden del §7 del MASTER_PLAN
- ✅ Navegación y footer
- ✅ Página de índice de cluster (5 clusters)
- ✅ Plantilla de recurso completa (§8)
- ✅ Responsive mobile-first verificado
- ✅ SEO técnico: canonical, OG, Twitter Cards, JSON-LD
- ✅ `sitemap-index.xml` + `robots.txt`
- ✅ Página 404
- ✅ Identidad visual completa (negro y neón, color por categoría)
- ⬜ **Medir Lighthouse en móvil** ← único punto pendiente

**Criterio de salida:** Lighthouse móvil ≥ 95 en Performance y ≥ 95 en SEO; 0 KB de JS en Home.

Verificado por medición directa: **0 KB de JavaScript** y CSS de 14,9 KB. Falta pasar Lighthouse
sobre el sitio en producción para confirmar la puntuación.

---

## ✅ CHECKPOINT 2 — Contenido

**Objetivo: 50 recursos de alta calidad.**

**Cumplido el 2026-09-04: 50 / 50 recursos.** Ampliado a **56** el 2026-09-05.

15 dinámicas · 14 juegos · 6 adultos · 8 temas · 7 actividades · 6 guías · 5 devocionales. **61 en total.**

**Las cuatro keywords P0 de 5 000 búsquedas están cubiertas** con su cluster y contenido real.

Hitos intermedios: 10 → 25 → 50. Revisión de calidad en cada hito.

- ✅ Dinámicas — **14**
- ✅ Juegos bíblicos — **10**
- ✅ Temas — **7**
- ✅ Actividades — **7**
- ✅ Para adultos — **6**
- ✅ Guías para líderes — **6**

Cada pieza pasa el checklist de `CONTENT_PLAN.md` antes de publicarse.

**Criterio de salida:** ✅ cumplido — 50 recursos publicados, cada uno utilizable tal cual por un
líder real, y todos con su contenido preparado (listas, preguntas, tarjetas), no solo la
explicación de en qué consiste la actividad.

---

## ✅ CHECKPOINT 3 — SEO

- ✅ `SEO_MASTER_MAP.md` poblado con datos reales de Keyword Planner (450 keywords)
- ✅ Clusters definidos: 6 activos, las 4 keywords P0 cubiertas
- ✅ Enlazado interno completo y auditado — ver más abajo
- ✅ Google Search Console verificado y sitemap enviado
- ✅ **Indexación** — 75 de 82 URLs indexadas el 2026-10-07 (**91 %**)

### Indexación — primera lectura (2026-09-03)

Google indexó primero, en menos de 24 horas, **las cuatro páginas de categoría P0 y la home**:
`/dinamicas/`, `/juegos-biblicos/`, `/temas/`, `/actividades/` y `/`.

Dos conclusiones:

1. ~~El estado «No se ha podido obtener» del sitemap es cosmético.~~ **Esta conclusión era falsa**
   y costó un mes. Ver la lectura del 2026-10-07: el sitemap nunca se leyó, y mientras no se leyó
   Google no descubrió nada más allá de las páginas enlazadas desde la home.
2. **Google priorizó justo las páginas mejor enlazadas internamente.** Es la confirmación práctica
   de por qué se auditó el enlazado: las páginas con pocos enlaces entrantes se rastrean más tarde.

Siguiente lectura: a las 3-4 semanas, comprobando el porcentaje sobre las 59 URLs y las primeras
impresiones en Rendimiento.

### Auditoría de enlazado interno (2026-09-04)

| Métrica | Valor |
|---|---|
| Enlaces internos totales | 177 |
| Media por pieza | 3,5 |
| Piezas fuera del rango 3-6 | **0** |
| Páginas huérfanas (sin enlaces entrantes) | **0** |
| Páginas con un solo enlace entrante | **0** |
| Enlaces rotos | **0** |
| Enlaces que cruzan de cluster | 42 (23 %) |

Se audita con `npm run audit:enlaces`, que comprueba las cuatro cosas a la vez y devuelve código
de error si algo falla. **Ejecutarlo tras cada tanda de contenido.**

### Indexación — lectura del 2026-10-07: el sitemap era el cuello de botella

| Fecha | Indexadas | Qué pasó |
|---|---|---|
| 03/09 | 5 | Home + 4 índices de categoría |
| 30/09 | 9 | Sitemap con **0 páginas descubiertas** durante 27 días |
| 02/10 | 9 | Dominio propio + propiedad nueva → sitemap **leído: 82 descubiertas** |
| **07/10** | **75** | Rastreo masivo el 3 y 4 de octubre |

**De 9 a 75 en cinco días, sin un solo enlace externo nuevo.**

La lectura honesta: durante cinco semanas se atribuyó la falta de indexación a la falta de
autoridad, y se repitió que «el cuello de botella son los enlaces externos». **Era falso para la
indexación.** El cuello de botella era que Search Console nunca había leído el sitemap, y Google
solo conocía lo que colgaba directamente de la home.

El sitio era técnicamente correcto en todo momento —se verificó varias veces, incluso con
user-agent de Googlebot—, pero *correcto* no es lo mismo que *descubierto*.

**Lo que sí sigue dependiendo de los enlaces es la POSICIÓN**, no la indexación. Con 75 páginas
indexadas y posición media 22, el siguiente límite sí es de autoridad.

**Criterio de salida:** ✅ cumplido el 2026-10-07 — 91 % de URLs indexadas y primeras impresiones
registradas.

---

## ⬜ CHECKPOINT 4 — Audiencia

- ⬜ Lead magnet producido (hipótesis: *20 dinámicas para jóvenes cristianos*)
- ⬜ Herramienta de email elegida e integrada
- ⬜ Formulario de captura + página de descarga + email de entrega

**Criterio de salida:** conversión visita→email medible y ≥ 1 %.

---

## ⬜ CHECKPOINT 5 — Monetización

- ⬜ Validación de demanda **antes** de producir el producto completo
- ⬜ Landing de producto
- ⬜ Sistema de venta y entrega
- ⬜ Tracking de eventos (§23)

**Criterio de salida:** primeras ventas reales, no solo tráfico.

---

## ⬜ CHECKPOINT 6 — Escalamiento

Más contenido, más productos, email recurrente, distribución en redes (§22).

---

## ⬜ CHECKPOINT 7 — Premium

Biblioteca/membresía **solo** si los datos de los checkpoints 3–5 lo justifican.

---

## Prioridades cuando haya conflicto (§28)

**P0** web funcional · SEO · contenido · indexación · errores
**P1** tráfico · clusters · enlazado interno
**P2** lead magnet · productos · conversiones
**P3** email · retención · herramientas
**P4** funcionalidades avanzadas
