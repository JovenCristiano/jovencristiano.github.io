# SEO_MASTER_MAP

Mapa maestro de keywords. **Datos reales de Google Keyword Planner (2026-09-02).**

Procedimiento y lista semilla: **[KEYWORD_RESEARCH.md](KEYWORD_RESEARCH.md)**.

---

## 0. Calidad del dato

- **Fuente:** Keyword Planner, 450 keywords, media mensual del periodo ago-2025 → jul-2026.
- **Precisión limitada:** la cuenta devuelve volúmenes agrupados en tres cubos — **5 000**, **500**
  y **50**. No son cifras exactas, son órdenes de magnitud. Sirven para priorizar, no para
  presumir de números.
- **La columna «Competencia» es de anuncios de pago, no de SEO.** Sale «Bajo» en 393 de 450
  keywords, así que no discrimina nada: **no se usa para decidir**. La dificultad real se estima
  mirando a mano la primera página de Google.

---

## 1. Hallazgos

### 1.1 Los pilares del nicho (cubo de 5 000)

Solo trece keywords alcanzan el cubo alto, y describen exactamente el negocio:

| keyword | público |
|---|---|
| dinámicas para jóvenes cristianos | jóvenes |
| actividades para jóvenes cristianos | jóvenes |
| juegos para jóvenes cristianos | jóvenes |
| enseñanza para jóvenes cristianos | jóvenes |
| dinámicas cristianas para adultos con reflexión | **adultos** |
| dinámicas cristianas para adultos divertidas | **adultos** |
| dinámicas divertidas para adultos cristianos | **adultos** |
| dinámicas cristianas cortas divertidas | **adultos** |
| juegos cristianos para adultos | **adultos** |
| dinámicas de integración para adultos | **adultos** |

### 1.2 El público adulto pesa tanto como el juvenil

| Segmento | Keywords | Volumen agregado |
|---|---|---|
| «…para jóvenes» | 266 | 47 250 |
| **«…para adultos»** | **75** | **47 850** |
| «…para adolescentes» | 29 | 5 950 |

Con **una cuarta parte de las keywords, «adultos» genera más volumen que «jóvenes»**. Son grupos
pequeños, células y reuniones de adultos de la misma iglesia, y buscan el mismo material.

**Decisión tomada** (2026-09-03): se abre como cluster secundario. Ver sección 4.

### 1.3 El modificador que manda es «divertidas»

| Modificador | Keywords | Volumen |
|---|---|---|
| divertidas | 23 | 23 150 |
| integración | 59 | 12 400 |
| enseñanza | 15 | 7 500 |
| bíblicas | 54 | 7 600 |
| reflexión | 19 | 6 300 |
| cortas | 4 | 5 150 |
| adventistas / sociedad de jóvenes | 26 | 3 550 |
| pdf | 6 | 1 200 |

Quien busca no pide «material de calidad»: pide que **sea divertido, corto y con reflexión**. Los
títulos y los `title` deben recoger ese lenguaje, no el nuestro.

### 1.4 Hipótesis del plan que los datos **desmienten**

| Hipótesis previa | Dato real | Consecuencia |
|---|---|---|
| «sin materiales» es una keyword clave | 3 keywords, **150** de volumen | Sigue siendo un buen filtro de usabilidad, pero **no es un objetivo SEO**. No se le dedica página propia |
| Retiros y campamentos como cluster | 1 keyword, **50** | Se pospone. No justifica un cluster todavía |
| Preguntas bíblicas como cluster P2 | 5 keywords, **700** | Se mantiene, pero por detrás de lo demás |
| Rompehielos como cluster | 2 keywords, **550** | Va como sección dentro de juegos, no como cluster |

### 1.5 Nicho desatendido: mundo adventista

26 keywords («sociedad de jóvenes», «dinámicas para jóvenes adventistas», «ejercicios bíblicos para
sociedad de jóvenes»), unas 3 550 búsquedas. Vocabulario propio, competencia escasa y una
comunidad muy activa. Coste de entrada bajo: es el mismo contenido con el lenguaje correcto.

### 1.6 El lead magnet está validado

Seis keywords con «pdf» («dinámicas para jóvenes cristianos pdf», «enseñanza para jóvenes
cristianos pdf»), 1 200 de volumen. **La gente ya está buscando el PDF que pensábamos regalar.**
Confirma la Etapa 2 del `MONETIZATION_PLAN.md` sin necesidad de más validación.

---

## 2. Tabla maestra — prioridad P0

`volumen`: media mensual (cubos de Planner). `estado`: pendiente · escribiendo · publicado.

| keyword | volumen | cluster | URL objetivo | estado |
|---|---|---|---|---|
| dinámicas para jóvenes cristianos | 5 000 | dinamicas | `/dinamicas/` | pendiente |
| juegos para jóvenes cristianos | 5 000 | juegos | `/juegos-biblicos/` | pendiente |
| actividades para jóvenes cristianos | 5 000 | actividades | `/actividades/` | **publicado** |
| enseñanza para jóvenes cristianos | 5 000 | temas | `/temas/` | **publicado** |
| joven cristiano | **5 000** | temas | `/temas/que-significa-ser-joven-cristiano/` | **publicado** |
| cristianos jóvenes | 5 000 | temas | misma página (gemela de la anterior) | **publicado** |
| dinámicas cristianas para adultos divertidas | 5 000 | adultos | `/dinamicas-para-adultos/` | **publicado** |
| juegos cristianos para adultos | 5 000 | adultos | `/dinamicas-para-adultos/` (sección) | **publicado** |
| dinámicas de integración para adultos | 5 000 | adultos | `/dinamicas-para-adultos/` | **publicado** |
| dinámicas cristianas cortas divertidas | 5 000 | dinamicas | `/dinamicas/cortas/` | **publicado** (la torre más alta, la cadena de nombres) |

## 3. Tabla maestra — prioridad P1

| keyword | volumen | cluster | URL objetivo | estado |
|---|---|---|---|---|
| dinámicas de integración para jóvenes | 500 | dinamicas | `/dinamicas/integracion/` | **publicado** (la cadena de nombres) |
| dinámicas bíblicas para adolescentes | 500 | dinamicas | `/dinamicas/adolescentes/` | pendiente |
| dinámicas para jóvenes cristianos con reflexión | 500 | dinamicas | `/dinamicas/con-reflexion/` | pendiente |
| juegos bíblicos para jóvenes | 500 | juegos | `/juegos-biblicos/` | pendiente |
| juegos bíblicos para adolescentes | 500 | juegos | `/juegos-biblicos/adolescentes/` | **publicado** (el personaje misterioso) |
| juegos bíblicos preguntas y respuestas | 500 | juegos | `/juegos-biblicos/preguntas-respuestas/` | **publicado** |
| dinámica de oración para jóvenes | 500 | dinamicas | `/dinamicas/oracion/` | **publicado** (el mural de oración) |
| dinámicas para células con enseñanza | 500 | dinamicas | `/dinamicas/celulas/` | pendiente |
| juegos para jóvenes adventistas | 500 | adventista | `/juegos-biblicos/sociedad-de-jovenes/` | pendiente |
| dinámicas para jóvenes cristianos pdf | 500 | lead magnet | `/recursos/descarga-dinamicas/` | pendiente |
| actividades cristianas para adolescentes | 500 | actividades | `/actividades/adolescentes/` | pendiente |
| enseñanza dinámica para jóvenes cristianos | 500 | temas | `/temas/dinamicas-con-ensenanza/` | pendiente |

## 1.7 Competencia real: un `github.io` en el puesto 4 (2026-09-06)

`elc.github.io/posts/juegos-biblicos/es/` está **en cuarta posición** para «juegos bíblicos para
jóvenes cristianos». Es un dato que cambia dos supuestos:

1. **GitHub Pages no es un obstáculo para posicionar.** Queda descartado definitivamente.
2. **No gana por volumen de texto.** Su página tiene ~1 730 palabras y 6 juegos; cualquiera de
   nuestras fichas es más extensa y más detallada.

### Qué tiene esa página que nosotros no

| Elemento | Ellos | Nosotros |
|---|---|---|
| **PDF imprimible por juego** | Sí | **No** |
| Versión editable (Google Docs) | Sí | No |
| Imagen de cómo queda el juego | Sí | No |
| Índice de navegación interno | Sí | No |
| Antigüedad del dominio | Desde 2018 | 2 días |
| `title` optimizado | No — arrastra «Personal Website» | Sí |
| Meta description propia | No — es la genérica del sitio | Sí |
| Ficha práctica (edad, duración, materiales) | No | Sí |

**Conclusión operativa:** su ventaja es la **descarga imprimible** y ocho años de antigüedad. Lo
segundo no se compra; lo primero sí se puede construir, y además coincide con la validación del
lead magnet (§1.6): ya hay 1 200 búsquedas mensuales con el modificador «pdf».

## 3 bis. Pujas de anuncios (2026-09-05)

El CSV incluye las columnas «Top of page bid». Contradicen la idea de que hay que buscar keywords
distintas para monetizar mejor: **las cuatro P0 que ya se atacan son las que más pagan.**

| Keyword | Volumen | Puja máxima |
|---|---|---|
| dinámicas cristianas cortas divertidas | 5 000 | 63 191 |
| actividades para jóvenes cristianos | 5 000 | 19 776 |
| juegos para jóvenes cristianos | 5 000 | 18 315 |
| dinámicas para jóvenes cristianos | 5 000 | 9 708 |
| enseñanza para jóvenes cristianos | 5 000 | 6 319 |

### Segunda extracción (2026-09-06): «joven cristiano» confirmada

La primera lista semilla **no incluía «joven cristiano» a secas**, y por eso no apareció. Corregido
con una segunda extracción de 403 keywords, archivada en `docs/data/keyword-planner-2026-09-06.csv`:

| Keyword | Volumen | Puja máxima |
|---|---|---|
| **joven cristiano** | **5 000** | **21 836** |
| cristianos jóvenes | 5 000 | 21 836 |
| dinámicas cristianas cortas divertidas | 5 000 | 62 533 |
| actividades para jóvenes cristianos | 5 000 | 19 570 |
| juegos para jóvenes cristianos | 5 000 | 18 124 |

Es la tercera puja más alta del conjunto y coincide con el nombre de la marca.

### Huecos nuevos detectados

| Keyword | Volumen | Puja máxima | Estado |
|---|---|---|---|
| devocionales cristianos para jóvenes | 500 | **11 265** | **sin cubrir** — no hay cluster de devocionales |
| jóvenes con Cristo | 500 | 18 515 | sin cubrir |
| temas para hablar con jóvenes cristianos | 50 | **37 703** | parcialmente cubierto por `/temas/` |

«Devocionales» es el hueco más claro: paga bien, tiene volumen y no existe en el sitio.

## 4. Decisión de negocio — RESUELTA (2026-09-03)

**Se abre el público adulto como sección secundaria.**

A favor: duplica el mercado con el mismo contenido, y el volumen ya está demostrado. Muchas
dinámicas juveniles sirven tal cual en un grupo de adultos cambiando la reflexión.

En contra: el `MASTER_PLAN` (§3) posiciona el sitio en «jóvenes»; incluso el nombre lo hace.
Diluir el foco tiene coste de marca.

**Ejecución acordada:**

- Cluster `/dinamicas-para-adultos/`, enlazado desde la navegación y desde las fichas juveniles.
- **No aparece en la Home ni en el hero**: la promesa central sigue siendo «jóvenes». El cluster se
  marca como `secondary` en `src/utils/clusters.ts` y queda excluido de las categorías de portada.
- Se prueba con 3 piezas y se mide en Search Console a los dos meses.
- Criterio de ampliación: si el cluster genera ≥ 15 % de las impresiones del sitio, se amplía a 10
  piezas. Si no llega al 5 %, se congela y no se le dedica más tiempo.

## 5. Método para el resto

Los 363 términos del cubo de 50 son long tail: no se les dedica página propia, se cubren dentro de
las páginas de cluster (variantes en subtítulos y en las fichas de cada recurso).

Nada de esto se da por bueno sin la comprobación manual: antes de escribir un P0, buscarlo en
Google en incógnito y mirar quién ocupa los diez primeros puestos.
