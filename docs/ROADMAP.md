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

**Cumplido el 2026-09-04: 50 / 50 recursos.**

14 dinámicas · 10 juegos bíblicos · 6 para adultos · 7 temas · 7 actividades · 6 guías para líderes.

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

## 🟡 CHECKPOINT 3 — SEO

- ⬜ `SEO_MASTER_MAP.md` poblado con keywords investigadas
- ⬜ Clusters definidos y enlazado interno completo (3–6 enlaces por pieza)
- ⬜ Google Search Console verificado y sitemap enviado
- ⬜ Primera revisión de indexación

**Criterio de salida:** ≥ 80 % de las URLs indexadas y primeras impresiones en Search Console.

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
