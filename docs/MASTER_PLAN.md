# MASTER_PROJECT_PLAN — Joven Cristiano

**Proyecto:** Joven Cristiano  
**Tipo:** Web SEO + biblioteca de recursos + productos digitales + futura plataforma premium  
**Stack inicial:** Astro + TypeScript + Markdown/MDX + CSS + GitHub Pages  
**Objetivo empresarial:** convertir la web en un activo digital monetizable, no en un simple blog.

---

## 1. VISIÓN

Joven Cristiano debe ser una **biblioteca digital de recursos cristianos para jóvenes**, especialmente útil para líderes juveniles, iglesias, maestros y padres de adolescentes.

La promesa central:

> **Encuentra ideas, dinámicas, juegos, temas y recursos cristianos listos para utilizar con jóvenes.**

La web debe resolver necesidades concretas:

- qué dinámica hacer en una reunión;
- qué juego bíblico utilizar;
- cómo preparar una reunión juvenil;
- qué tema enseñar;
- qué actividad realizar sobre identidad, propósito, emociones o fe;
- qué preguntas usar con un grupo;
- qué recursos puede descargar un líder.

No debe convertirse en un blog genérico de frases cristianas.

---

# 2. OBJETIVO DE NEGOCIO

El proyecto forma parte de una estrategia de múltiples activos digitales orientada a la meta de **100 millones de pesos colombianos**.

La web debe construir varias fuentes de ingresos:

1. publicidad;
2. productos digitales;
3. afiliados, cuando sean pertinentes;
4. productos premium;
5. futura membresía/biblioteca;
6. futuras herramientas interactivas.

El recorrido empresarial será:

```text
CONTENIDO GRATUITO
        ↓
TRÁFICO SEO
        ↓
CONFIANZA
        ↓
CAPTACIÓN DE AUDIENCIA
        ↓
RECURSO GRATUITO
        ↓
PRODUCTO DIGITAL
        ↓
CATÁLOGO DE PRODUCTOS
        ↓
MEMBRESÍA / PLATAFORMA
```

No depender exclusivamente de publicidad.

---

# 3. PÚBLICO

## Primario: líderes juveniles

Necesitan dinámicas, juegos, actividades, estudios, reuniones y material listo para usar.

## Secundario: jóvenes cristianos

Temas:

- propósito;
- identidad;
- fe;
- emociones;
- relaciones;
- decisiones;
- Biblia;
- vida cristiana.

## Otros

- padres de adolescentes;
- maestros;
- pastores;
- iglesias;
- coordinadores juveniles.

La arquitectura debe mantener estos públicos organizados.

---

# 4. POSICIONAMIENTO

## NO somos

- un blog de frases;
- una colección de artículos genéricos;
- una web de contenido automático;
- un sitio que copia otras páginas.

## SÍ somos

Una plataforma donde alguien pueda entrar y pensar:

> **“Aquí encuentro algo que puedo utilizar hoy.”**

La utilidad práctica debe ser el principal diferencial.

---

# 5. PILARES DE CONTENIDO

## A. Dinámicas para jóvenes cristianos

Cada recurso debe incluir:

- nombre;
- objetivo;
- edad;
- participantes;
- duración;
- materiales;
- preparación;
- instrucciones;
- variantes;
- reflexión;
- enseñanza bíblica;
- consejos para el líder.

## B. Juegos bíblicos

Tipos:

- preguntas;
- competencias;
- equipos;
- memoria;
- versículos;
- rompehielos;
- juegos sin materiales;
- juegos para reuniones;
- juegos al aire libre.

Cada recurso debe indicar reglas y reflexión bíblica.

## C. Actividades

Contenido más estructurado:

- identidad;
- propósito;
- liderazgo;
- emociones;
- relaciones;
- fe;
- retiros;
- campamentos;
- evangelismo.

## D. Temas para jóvenes

Plantilla:

```text
Título
Objetivo
Texto bíblico
Idea principal
Introducción
Desarrollo
Preguntas
Actividad
Aplicación
Conclusión
Oración
Recursos relacionados
```

## E. Reflexiones

Deben aportar contexto y aplicación, no solamente “versículo + reflexión genérica”.

## F. Recursos para líderes

Temas:

- reuniones juveniles;
- planificación;
- retiros;
- campamentos;
- discipulado;
- liderazgo;
- integración;
- evangelismo.

Este cluster debe tener conexión directa con productos premium.

## G. Padres y adolescentes

Temas:

- comunicación;
- límites;
- confianza;
- identidad;
- redes sociales;
- emociones;
- fe;
- adolescencia.

## H. Preguntas y respuestas

Biblioteca de:

- preguntas bíblicas;
- preguntas fáciles/intermedias/difíciles;
- preguntas para conversación;
- preguntas para reflexión;
- preguntas para grupos.

Este contenido debe preparar el terreno para una futura plataforma bíblica interactiva.

---

# 6. ARQUITECTURA INICIAL

Propuesta:

```text
/
├── /dinamicas/
├── /actividades/
├── /juegos-biblicos/
├── /temas/
├── /reflexiones/
├── /estudios-biblicos/
├── /preguntas-biblicas/
├── /recursos-para-lideres/
├── /padres-y-adolescentes/
├── /recursos/
├── /productos/
├── /sobre-nosotros/
├── /contacto/
└── /buscar/
```

No crear todas las categorías hasta que exista contenido suficiente.

---

# 7. HOME

La Home debe ser simultáneamente landing page y puerta de entrada SEO.

Orden recomendado:

1. Hero.
2. CTA principal: **Explorar recursos**.
3. CTA secundario: **Ver dinámicas**.
4. Buscador.
5. Categorías.
6. Recursos populares.
7. Recursos destacados.
8. Recurso gratuito / lead magnet.
9. Productos.
10. FAQ.
11. Footer.

Hero conceptual:

> **Recursos cristianos para transformar tus reuniones con jóvenes**

Subtítulo:

> Dinámicas, juegos bíblicos, actividades, temas y recursos prácticos para líderes, iglesias y jóvenes cristianos.

---

# 8. PLANTILLA DE ARTÍCULO

Cada página debe responder la intención de búsqueda rápidamente.

Estructura:

```text
Breadcrumb
H1
Introducción breve
Respuesta/resumen
Información práctica
Desarrollo
Ejemplos
Aplicación
Reflexión
FAQ
Recursos relacionados
CTA
```

Cada artículo debe tener un siguiente paso.

---

# 9. SEO

## SEO técnico

Astro debe generar/configurar:

- HTML estático;
- title dinámico;
- meta description;
- canonical;
- sitemap;
- robots.txt;
- Open Graph;
- Twitter Cards;
- headings correctos;
- URLs limpias;
- imágenes optimizadas;
- structured data cuando sea apropiado.

## SEO de contenido

No crear artículos solamente porque exista una keyword.

Construir clusters.

Ejemplo:

```text
DINÁMICAS PARA JÓVENES CRISTIANOS
│
├── integración
├── rompehielo
├── bíblicas
├── identidad
├── propósito
├── fe
├── grupos grandes
└── sin materiales
```

---

# 10. SEO MASTER MAP

Crear:

`docs/SEO_MASTER_MAP.md`

Campos mínimos:

```text
keyword
intención
cluster
URL objetivo
prioridad
dificultad
oportunidad
estado
enlaces internos
producto asociado
```

Antes de producir contenido masivo:

1. investigar keywords;
2. identificar intención;
3. agrupar;
4. analizar competencia;
5. detectar preguntas;
6. encontrar oportunidades;
7. priorizar.

---

# 11. CONTENT ENGINE

Usar Astro Content Collections o la arquitectura equivalente recomendada por la versión actual de Astro.

Estructura conceptual:

```text
src/content/
├── dinamicas/
├── juegos/
├── actividades/
├── temas/
├── reflexiones/
├── estudios/
├── preguntas/
└── recursos/
```

Frontmatter recomendado:

```yaml
title:
slug:
description:
category:
tags:
audience:
age_range:
duration:
participants:
difficulty:
featured:
publishedAt:
updatedAt:
related:
product:
```

No agregar campos innecesarios.

---

# 12. CALIDAD

Regla:

> **50 recursos realmente útiles valen más que 500 artículos genéricos.**

Cada recurso debe ser utilizable por una persona real.

Antes de publicar:

- revisar ortografía;
- comprobar instrucciones;
- evitar repetición;
- evitar relleno;
- revisar enlaces;
- revisar coherencia bíblica;
- aportar valor práctico.

La IA puede ayudar con investigación y borradores, pero no debe utilizarse para llenar el sitio con contenido superficial.

---

# 13. ENLAZADO INTERNO

El enlazado interno es obligatorio.

Cada artículo debe enlazar, cuando corresponda, hacia:

- categoría;
- 3–6 recursos relacionados;
- contenidos más profundos;
- recurso gratuito;
- producto.

Ejemplo:

```text
Dinámica
   ↓
Tema relacionado
   ↓
Reflexión
   ↓
Guía
   ↓
Producto
```

La web debe funcionar como una red temática.

---

# 14. DISEÑO

El diseño debe transmitir:

- juventud;
- confianza;
- espiritualidad;
- modernidad;
- energía;
- claridad.

Evitar apariencia de iglesia tradicional, exceso de dorado o diseño infantil.

Utilizar:

- tarjetas;
- espacios amplios;
- tipografía muy legible;
- iconografía consistente;
- imágenes atractivas;
- CTA claros.

Mobile-first.

---

# 15. PERFORMANCE

Prioridad:

- poco JavaScript;
- imágenes optimizadas;
- lazy loading;
- CSS eficiente;
- evitar dependencias innecesarias;
- HTML estático cuando sea posible.

Aprovechar Astro para obtener una web rápida.

---

# 16. BUSCADOR Y FILTROS

Cuando exista suficiente contenido, implementar búsqueda.

Filtros potenciales:

- categoría;
- edad;
- duración;
- participantes;
- dificultad;
- materiales.

Ejemplo:

```text
Quiero una dinámica
Edad: 15–17
Participantes: 10–20
Duración: 10–20 min
Materiales: ninguno
```

Esto puede convertirse en una característica diferencial.

No construir un sistema complejo antes de validar que el contenido justifica su uso.

---

# 17. MONETIZACIÓN

## Etapa 1 — Tráfico

Contenido SEO de calidad.

## Etapa 2 — Captación

Lead magnet.

Ejemplo:

> **20 dinámicas para jóvenes cristianos — descarga gratuita**

Captar email.

## Etapa 3 — Primer producto

Hipótesis inicial:

> **365 Dinámicas para Jóvenes Cristianos**

No producir todo antes de validar demanda.

Primero:

1. muestra;
2. landing;
3. oferta;
4. validación;
5. precio;
6. producción final.

## Otros productos

- 100 Juegos Bíblicos para Jóvenes.
- 52 Reuniones Juveniles Completas.
- Guía para líderes juveniles.
- Kit anual para líderes.
- Guía para padres de adolescentes.

Los productos y precios deben validarse con el mercado.

---

# 18. ESCALERA DE PRODUCTOS

```text
GRATIS
│
├── artículos
├── dinámicas
├── juegos
└── preguntas
      ↓
LEAD MAGNET
      ↓
LOW TICKET
      ↓
PACKS
      ↓
PRODUCTO PREMIUM
      ↓
MEMBRESÍA
```

---

# 19. FUTURA BIBLIOTECA PREMIUM

A largo plazo:

```text
Joven Cristiano
│
├── Gratis
│
└── Premium
    ├── PDFs
    ├── dinámicas
    ├── juegos
    ├── reuniones
    ├── estudios
    └── material imprimible
```

La membresía solamente debe desarrollarse después de validar tráfico, demanda y ventas.

---

# 20. FUTURA PLATAFORMA BÍBLICA INTERACTIVA

Joven Cristiano debe quedar preparado para evolucionar hacia:

- preguntas;
- respuestas;
- juegos;
- concursos;
- quizzes;
- dinámicas;
- herramientas para grupos.

No construir esto en el MVP de la web.

---

# 21. RELACIÓN CON EL FUTURO SAAS

El SaaS de inteligencia de oportunidades será independiente.

Puede utilizarse para investigar:

- keywords;
- nichos;
- tendencias;
- necesidades.

Joven Cristiano puede funcionar como caso real:

```text
SAAS
 ↓
detecta oportunidad
 ↓
JOVEN CRISTIANO
 ↓
crea contenido
 ↓
genera tráfico
 ↓
crea productos
 ↓
obtiene ventas
 ↓
datos reales
 ↓
mejora el SaaS
```

No mezclar los códigos de ambos proyectos.

---

# 22. REDES SOCIALES

Cada recurso debe poder reutilizarse.

```text
1 artículo
 ↓
video
 ↓
Short/Reel
 ↓
post
 ↓
carrusel
 ↓
email
 ↓
PDF/producto
```

La distribución debe multiplicar el trabajo de contenido.

---

# 23. ANALÍTICA

Medir:

- tráfico;
- páginas de entrada;
- búsquedas;
- contenido más visitado;
- conversiones;
- descargas;
- ventas.

Eventos conceptuales:

```text
VIEW_CONTENT
SEARCH
DOWNLOAD_FREE
EMAIL_SIGNUP
VIEW_PRODUCT
CLICK_PRODUCT
PURCHASE
```

Los nombres definitivos dependen de la herramienta elegida.

---

# 24. DOCUMENTACIÓN OBLIGATORIA

Crear y mantener:

```text
docs/
├── PROJECT_CONTEXT.md
├── MASTER_PLAN.md
├── SEO_MASTER_MAP.md
├── CONTENT_PLAN.md
├── MONETIZATION_PLAN.md
├── ROADMAP.md
├── DESIGN_SYSTEM.md
└── CHANGELOG.md
```

`PROJECT_CONTEXT.md` debe explicar cómo recuperar el contexto si se cambia de conversación o de agente.

---

# 25. ESTRUCTURA DEL REPOSITORIO

Propuesta:

```text
jovencristiano.github.io/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   └── utils/
├── public/
│   ├── images/
│   ├── icons/
│   └── downloads/
├── docs/
├── astro.config.*
├── package.json
└── README.md
```

Ajustar a la arquitectura real de Astro.

---

# 26. CHECKPOINTS

## CHECKPOINT 0 — Fundación

Debe existir:

- repositorio;
- Astro;
- documentación;
- estructura;
- sistema visual base.

**Criterio:** proyecto ejecutable y arquitectura aprobada.

## CHECKPOINT 1 — MVP web

Debe existir:

- Home;
- navegación;
- categoría;
- artículo;
- responsive;
- SEO técnico;
- sitemap.

## CHECKPOINT 2 — Contenido

Primer objetivo:

**50 recursos de alta calidad.**

## CHECKPOINT 3 — SEO

- mapa SEO;
- clusters;
- URLs;
- enlazado;
- Search Console.

## CHECKPOINT 4 — Audiencia

- lead magnet;
- captura;
- página de descarga.

## CHECKPOINT 5 — Monetización

- primer producto;
- landing;
- sistema de venta;
- tracking.

## CHECKPOINT 6 — Escalamiento

- más contenido;
- productos;
- email;
- redes;
- distribución.

## CHECKPOINT 7 — Premium

Biblioteca/membresía solamente cuando los datos indiquen que tiene sentido.

---

# 27. MÉTRICAS

## Validación 1

¿La gente encuentra útil el contenido?

## Validación 2

¿La gente regresa?

## Validación 3

¿Deja su correo?

## Validación 4

¿Compra?

## Validación 5

¿Es posible escalar?

No confundir páginas publicadas con éxito empresarial.

---

# 28. PRIORIDADES

Cuando existan demasiadas tareas:

### P0
- web funcional;
- SEO;
- contenido;
- indexación;
- errores.

### P1
- tráfico;
- clusters;
- internal linking.

### P2
- lead magnet;
- productos;
- conversiones.

### P3
- email;
- retención;
- herramientas.

### P4
- funcionalidades avanzadas.

---

# 29. NO CONSTRUIR AL PRINCIPIO

No desarrollar todavía:

- login;
- panel complejo;
- marketplace completo;
- backend propio;
- pagos propios;
- comunidad social;
- IA compleja;
- aplicación móvil.

Primero validar tráfico y monetización.

---

# 30. REGLAS PARA CODEX / CLAUDE

El agente debe actuar como:

- Project Manager;
- Senior Astro Developer;
- Technical SEO Specialist;
- UX/UI Designer;
- Content Architect;
- Growth Strategist.

Antes de modificar:

1. inspeccionar;
2. leer documentación;
3. entender arquitectura;
4. proponer plan;
5. ejecutar;
6. probar;
7. revisar;
8. documentar;
9. hacer commit.

No debe:

- borrar contenido sin autorización;
- cambiar URLs sin analizar impacto SEO;
- instalar paquetes innecesarios;
- generar contenido masivo sin estrategia;
- asumir decisiones empresariales importantes.

---

# 31. REGLA DE ORO

Toda funcionalidad debe responder al menos una pregunta:

> **¿Ayuda a conseguir tráfico, retener usuarios, convertir usuarios o aumentar el valor del producto?**

Si no, no es prioridad.

---

# 32. PRIMERA IMPLEMENTACIÓN

La primera orden al desarrollador debe ser:

> Audita el repositorio y construye únicamente la fundación del proyecto. Configura Astro, estructura técnica, Content Collections, diseño base, SEO técnico y documentación. No generes contenido masivo ni construyas funcionalidades complejas. Antes de avanzar, presenta un informe con arquitectura, decisiones, riesgos y próximos pasos.

Después de aprobar:

> Ejecuta la siguiente fase del MASTER_PLAN según los documentos aprobados.

---

# 33. DEFINICIÓN DE ÉXITO

Joven Cristiano será un activo exitoso cuando:

- tenga tráfico orgánico;
- tenga contenido útil;
- genere audiencia propia;
- capte leads;
- venda productos;
- tenga varias fuentes de monetización;
- pueda escalar contenido;
- pueda evolucionar hacia herramientas y membresía.

No existe un “final” técnico: el proyecto debe convertirse en un sistema de crecimiento continuo.

---

# 34. DEFINICIÓN EJECUTIVA

> **Joven Cristiano es una plataforma de recursos cristianos orientada principalmente a líderes juveniles y jóvenes, construida inicialmente como un activo SEO y de contenido, pero diseñada desde el principio para evolucionar hacia productos digitales, biblioteca premium, herramientas interactivas y una plataforma de membresía.**

La implementación inicial debe ser simple.

La arquitectura y la estrategia empresarial deben permitir crecer mucho más allá del blog.
