# CONTENT_PLAN

Fuente única de verdad sobre **cómo se estructura y se controla el contenido**.

## 1. Principio rector

> 50 recursos realmente útiles valen más que 500 artículos genéricos.

Un recurso solo se publica si un líder juvenil puede **usarlo tal cual el domingo siguiente**.

## 2. Colecciones

| Colección | Ruta pública | Cuándo se activa |
|---|---|---|
| `dinamicas` | `/dinamicas/` | Desde el inicio |
| `juegos` | `/juegos-biblicos/` | Desde el inicio |
| `temas` | `/temas/` | **Activa** — cluster P0 «enseñanza para jóvenes cristianos» |
| `actividades` | `/actividades/` | **Activa** — cluster P0 «actividades para jóvenes cristianos» |
| `reflexiones` | `/reflexiones/` | Con 5 piezas listas |
| `estudios` | `/estudios-biblicos/` | Con 5 piezas listas |
| `preguntas` | `/preguntas-biblicas/` | Con 5 piezas listas |
| `lideres` | `/recursos-para-lideres/` | **Activa** — cluster P0 «cómo preparar una reunión juvenil» |
| `devocionales` | `/devocionales/` | **Activa** — hueco detectado el 2026-09-06 (puja 11 265) |
| `adultos` | `/dinamicas-para-adultos/` | **Activa** — cluster secundario (§4 SEO_MASTER_MAP) |

## 3. Frontmatter

Esquema cerrado. **Añadir un campo requiere justificación escrita en el CHANGELOG.**

```yaml
title: string                 # obligatorio, ≤ 60 caracteres para el <title>
description: string           # obligatorio, 120–158 caracteres, es la meta description
category: string              # obligatorio, cluster al que pertenece
tags: string[]                # obligatorio, 3–6
audience: 'lideres' | 'jovenes' | 'padres' | 'maestros'
age_range: string             # p. ej. '12-14', '15-17', '18+'
duration: string              # p. ej. '10-20 min'
participants: string          # p. ej. '10-20'
difficulty: 'facil' | 'media' | 'alta'
materials: string[]           # [] si no requiere nada — es un filtro clave
featured: boolean             # por defecto false
publishedAt: date
updatedAt: date               # opcional
related: string[]             # slugs, 3–6
product: string               # opcional, slug del producto asociado
draft: boolean                # por defecto false; los draft no se compilan en producción
```

El `slug` **no** va en el frontmatter: lo deriva Astro del nombre del archivo. Un archivo renombrado
es una URL rota.

## 4. Plantillas

### Dinámica / juego

```text
Breadcrumb
H1
Introducción breve (2–3 frases)
Ficha práctica (edad · participantes · duración · materiales · dificultad)
Objetivo
Preparación
Instrucciones paso a paso
Variantes
Reflexión
Enseñanza bíblica (texto + aplicación)
Consejos para el líder
FAQ
Recursos relacionados
CTA
```

### Tema

```text
Título · Objetivo · Texto bíblico · Idea principal · Introducción · Desarrollo ·
Preguntas · Actividad · Aplicación · Conclusión · Oración · Recursos relacionados
```

## 5. Enlazado interno (obligatorio)

Cada pieza enlaza a:

- su categoría (breadcrumb),
- 3–6 recursos relacionados,
- al menos un contenido más profundo,
- el recurso gratuito, cuando exista,
- un producto, cuando sea pertinente.

```text
Dinámica → Tema relacionado → Reflexión → Guía → Producto
```

## 5 bis. Neutralidad doctrinal (regla editorial)

**El contenido no toma partido en asuntos que dividen a las iglesias.** El público es
transversal —evangélicos, católicos, adventistas y otros—, y una sola frase de una tradición
concreta hace que las demás descarten el recurso entero.

### Qué SÍ se afirma

- Lo compartido por el conjunto del cristianismo: la persona de Jesús, el valor de la Escritura,
  el amor al prójimo, el perdón, la oración, la dignidad de cada persona.
- Los hechos del texto bíblico: qué dice el pasaje, en qué contexto y a quién.

### Qué NO se afirma

| Asunto | Cómo se trata |
|---|---|
| Forma del bautismo (inmersión, aspersión, edad) | No se menciona el modo |
| Día de culto (domingo o sábado) | Los horarios se dan como ejemplo adaptable |
| Diezmo, dones, lenguas, predestinación | No se entra |
| Creación literal frente a otras lecturas | Se presentan las posturas y se remite a la iglesia local |
| Destino eterno de personas concretas | Nunca. Se remite al responsable de la iglesia |
| Sexualidad y orientación | Se remite a lo que enseñe cada iglesia, con la condición innegociable de no humillar a nadie presente |
| Versión de la Biblia | «La que use habitualmente tu iglesia» |
| Cargos: sacerdote, pastor, anciano | Términos neutros: «responsable», «líder de la iglesia» |

### Cómo se resuelve una duda doctrinal en un recurso

La fórmula es siempre la misma: **describir que hay varias posturas, no ridiculizar ninguna y
remitir al responsable de la iglesia local.** El sitio da herramientas; la doctrina la pone cada
iglesia.

### Comprobación

`npm run audit:doctrina` marca los términos que exigen revisión manual. No decide por ti: señala
dónde mirar.

## 6. Checklist antes de publicar

- [ ] ¿Un líder puede ejecutarlo sin buscar nada más?
- [ ] Instrucciones probadas mentalmente paso a paso, sin huecos
- [ ] Ortografía y gramática revisadas
- [ ] Sin relleno ni repetición
- [ ] Coherencia bíblica: cita verificada y usada en su contexto
- [ ] `description` entre 120 y 158 caracteres
- [ ] 3–6 enlaces internos, todos funcionando
- [ ] `related` cumplimentado
- [ ] Imagen con `alt` descriptivo
- [ ] CTA con un siguiente paso claro
- [ ] **Sin afirmaciones doctrinales de una sola tradición** (§5 bis)

## 7. Uso de IA

Permitido para investigación, estructura y borradores. **No** para llenar el sitio.
Toda pieza pasa por revisión humana con el checklist anterior antes de publicarse.

## 8. Reutilización (§22)

```text
1 artículo → video → Short/Reel → post → carrusel → email → PDF/producto
```

El contenido se escribe pensando en que va a repartirse en estos formatos.
