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

## 7. Uso de IA

Permitido para investigación, estructura y borradores. **No** para llenar el sitio.
Toda pieza pasa por revisión humana con el checklist anterior antes de publicarse.

## 8. Reutilización (§22)

```text
1 artículo → video → Short/Reel → post → carrusel → email → PDF/producto
```

El contenido se escribe pensando en que va a repartirse en estos formatos.
