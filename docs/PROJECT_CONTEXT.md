# PROJECT_CONTEXT

> Documento de recuperación de contexto. Si cambias de conversación, de agente o de máquina,
> **lee este archivo primero**. Debe ser suficiente para retomar el proyecto sin historial previo.

## 1. Qué es esto

**Joven Cristiano** es una biblioteca digital de recursos cristianos para jóvenes, dirigida
principalmente a **líderes juveniles**. No es un blog. La promesa es:

> Encuentra ideas, dinámicas, juegos, temas y recursos cristianos listos para utilizar con jóvenes.

Se construye como activo SEO monetizable, con capacidad de evolucionar hacia productos digitales,
biblioteca premium y plataforma interactiva.

## 2. Estado actual

| Elemento | Estado |
|---|---|
| Repositorio git | `JovenCristiano/jovencristiano.github.io`, rama `main` |
| Astro | 7.x instalado, `npm run build` correcto |
| Documentación | Completa para CHECKPOINT 0 |
| Contenido | 3 recursos de muestra (2 dinámicas, 1 juego) |
| Sitio en producción | ✅ https://jovencristiano.github.io |

Checkpoint actual: **CHECKPOINT 1 — MVP web**. El CHECKPOINT 0 se cerró el 2026-09-03 con el
primer despliegue correcto.

El despliegue es automático: todo push a `main` publica el sitio en 2–3 minutos.

### Cómo arrancar

```bash
npm install
npm run dev     # http://localhost:4321
npm run build   # genera dist/
```

### Dónde está cada cosa

| Necesitas... | Archivo |
|---|---|
| Cambiar el dominio o la navegación | `src/site.config.mjs` |
| Cambiar el frontmatter permitido | `src/content.config.ts` (+ justificar en CHANGELOG) |
| Añadir un recurso | `src/content/dinamicas/` o `src/content/juegos/` |
| Cambiar colores, tipografía o espacios | `src/styles/tokens.css` |
| Añadir un cluster nuevo | `src/utils/clusters.ts` + colección + páginas |

## 3. Decisiones ya tomadas

- **Stack:** Astro + TypeScript + Markdown/MDX + CSS plano (sin framework UI, sin Tailwind por ahora).
- **Hosting:** GitHub Pages en repo raíz `<usuario>.github.io`, por tanto `base: '/'`.
  Esto permite migrar a dominio propio más adelante **sin romper ninguna ruta interna**.
- **Sin backend, sin login, sin pagos propios** en esta fase (§29 del MASTER_PLAN).
- **Contenido antes que funcionalidad.** El buscador y los filtros no se construyen hasta que el
  volumen de contenido los justifique.

## 4. Decisiones pendientes (bloquean trabajo)

1. Nombre de marca definitivo y logotipo.
2. Correo de contacto del proyecto (la página `/contacto/` lo declara pendiente).
3. Herramienta de analítica (§23) y de email marketing (Etapa 2 de monetización).
4. Plataforma de venta del primer producto digital (Etapa 3).

**Resuelto:** cuenta de GitHub → `JovenCristiano`; `SITE.url` = `https://jovencristiano.github.io`.

## 5. Documentos del proyecto

| Archivo | Contenido |
|---|---|
| `MASTER_PLAN.md` | Plan maestro completo: visión, negocio, público, pilares, checkpoints |
| `ROADMAP.md` | Orden de ejecución y criterios de salida por checkpoint |
| `CONTENT_PLAN.md` | Modelo de contenido, frontmatter, plantillas, control de calidad |
| `SEO_MASTER_MAP.md` | Mapa de keywords, clusters, URLs y estado |
| `MONETIZATION_PLAN.md` | Escalera de productos y secuencia de validación |
| `DESIGN_SYSTEM.md` | Tokens visuales, tipografía, componentes |
| `ARCHITECTURE.md` | Arquitectura técnica propuesta, decisiones y riesgos |
| `CHANGELOG.md` | Historial de cambios relevantes |

## 6. Reglas para el agente (resumen operativo)

Antes de modificar: inspeccionar → leer docs → entender arquitectura → proponer plan → ejecutar →
probar → revisar → documentar → commit.

**Prohibido sin autorización explícita:** borrar contenido, cambiar URLs publicadas, instalar
paquetes innecesarios, generar contenido masivo sin estrategia, tomar decisiones empresariales.

**Regla de oro:** toda funcionalidad debe responder sí a al menos una pregunta — ¿ayuda a conseguir
tráfico, retener usuarios, convertir usuarios o aumentar el valor del producto? Si no, no es prioridad.

## 7. Cómo retomar el trabajo

1. Lee este archivo y `ROADMAP.md`.
2. Comprueba en qué checkpoint estamos (sección 2 de este documento; mantenla actualizada).
3. Ejecuta únicamente la siguiente fase pendiente. No adelantes checkpoints.
4. Al terminar, actualiza la sección 2, el `ROADMAP.md` y el `CHANGELOG.md`.
