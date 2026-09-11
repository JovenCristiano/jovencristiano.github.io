# CHANGELOG

Formato: [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/).

## [No publicado]

### Anadido — 2026-09-10 (paginas de categoria con contenido real)

Primeros datos de Search Console tras una semana: 9 impresiones en 3 meses, 0 clics, posicion
media ~35. Las 8 consultas reales son todas de **juegos** o **dinamicas**; ninguna de temas,
actividades, lideres, devocionales ni «joven cristiano».

Medido antes de tocar nada: las paginas de categoria tenian **~30 palabras de prosa real**
(el resto eran menu, titulos de tarjeta y pie). Son las unicas 5 paginas indexadas, asi que
Google estaba juzgando el sitio por lo mas flojo que tiene, mientras los 61 recursos de
800-1 500 palabras seguian sin indexar.

- **`ClusterLayout` acepta ahora un slot `guia` y una prop `faqs`.** El FAQ visible y el JSON-LD
  `FAQPage` salen de la misma fuente para que no puedan desincronizarse. Se anade tambien
  `CollectionPage` en todas las categorias.
- **`/juegos-biblicos/`**: 369 -> 1 510 palabras. Como elegir segun grupo, espacio y tiempo;
  juegos sin materiales; juegos de repaso biblico; cinco errores al dirigir; 5 FAQ.
- **`/dinamicas/`**: 394 -> 1 552 palabras. Los cinco tipos de dinamica (integracion, confianza,
  trabajo en equipo, reflexion, oracion), como dirigirlas y 5 FAQ.
- **35 enlaces contextuales nuevos** hacia las fichas, que ademas ayudan a que se indexen.

**La guia va debajo de la rejilla**, no encima. Quien llega busca el listado; enterrarlo bajo mil
palabras castiga la experiencia. Las 5 categorias sin guia no muestran hueco alguno.

### Anadido — 2026-09-10 (la auditoria cubre las paginas .astro)

`audit:enlaces` recorre ahora `src/pages/**/*.astro` y valida los `href` internos. Con 35 enlaces
nuevos escritos a mano hacia slugs concretos, un error de tecleo no lo habria visto nadie.
Verificado rompiendo un enlace a proposito antes de darlo por bueno.

### Cambiado — 2026-09-08 (refuerzo de «joven cristiano»)

Tercer paso del plan acordado. La keyword está confirmada en 5 000 búsquedas y puja de 21 836, pero
la Home no la usaba en ninguna parte y la página pilar solo recibía enlaces desde el bloque
`related`.

- **H1 de la Home**: «Recursos para el joven cristiano y para quien dirige su grupo». Recoge la
  keyword exacta y, de paso, nombra a los dos públicos que ahora tiene el sitio.
- **Segundo CTA del hero** apunta a la página pilar en vez de duplicar el enlace a juegos.
- **Sección «Qué significa ser un joven cristiano»** en la Home, con enlace contextual a la pilar y
  a devocionales.
- **Dos preguntas nuevas en el FAQ**, que entran también en el JSON-LD `FAQPage`.
- **`SITE.description`** reescrita con la keyword y los devocionales.
- **H2 de respuesta directa** al principio de la página pilar, en la forma exacta de la consulta
  («¿Qué significa ser un joven cristiano?»), pensado para fragmento destacado.
- **5 enlaces contextuales nuevos** hacia la pilar desde identidad, amistades, propósito, redes
  sociales y «Sobre nosotros». Hasta ahora **ningún recurso enlazaba a otro desde el cuerpo del
  texto**: todo el enlazado iba por el módulo `related`, que pesa menos y no lleva anchor
  descriptivo.

### Añadido — 2026-09-08 (auditoría de enlaces del cuerpo)

`audit:enlaces` ahora extrae los `[texto](/ruta/)` del cuerpo y comprueba que la URL exista,
reconstruyendo las rutas válidas desde `clusters.ts`. Antes un enlace mal escrito a mano solo se
habría detectado navegando. Verificado rompiendo un enlace a propósito: la auditoría falla y lo
señala.

### Añadido — 2026-09-06 (cluster de devocionales)

Cubre el hueco detectado en la segunda extracción de keywords: «devocionales cristianos para
jóvenes», 500 búsquedas y puja de 11 265, sin nada en el sitio.

- **Cluster `/devocionales/`** en amarillo neón `#FFD84D`.
- **5 devocionales** (total: 61). Formato distinto al resto: se leen a solas, no se dirigen. Texto,
  idea, reflexión, algo concreto para hoy y oración, en unos cinco minutos:
  - Cuando no sientes nada al orar
  - El día que todo sale mal
  - Cuando te comparas y sales perdiendo
  - Lo que haces cuando nadie te ve
  - Cuando Dios parece llegar tarde

**Reutiliza `guiaSchema`.** Un devocional no tiene participantes, materiales ni dificultad, igual
que una guía para líderes. La tarjeta muestra solo la duración.

**Criterio de contenido.** Estos textos son la primera pieza del sitio dirigida al joven y no al
líder (`audience: 'jovenes'`). Se han escrito evitando las dos trampas del género: prometer que la
fe resuelve los problemas y convertir la lectura en culpa. «Cuando Dios parece llegar tarde» dice
explícitamente que no todas las historias acaban como la de Lázaro.

### Añadido — 2026-09-06 (material imprimible)

Responde a la carencia detectada en §1.7 del mapa SEO: el competidor que ocupa el puesto 4 ofrece
PDF imprimible por juego y nosotros no.

- `src/styles/print.css`: cualquier ficha se imprime como material de reunión. Negro sobre blanco,
  sin cabecera ni pie ni CTA, sin saltos de página a mitad de una idea, cabeceras de tabla repetidas
  en cada hoja y la URL de origen al final.
- **Tarjetas recortables:** las tablas envueltas en `.recortable` —las 30 del tabú y las 40 del
  bingo— se imprimen como rejilla de tarjetas con línea de corte.
- Botón «Imprimir o guardar en PDF» en todas las fichas.

**Decisión técnica.** No se generan archivos PDF en el despliegue: exigiría un navegador headless en
CI, cientos de megas por compilación y un punto de fallo más. Se usa el diálogo del navegador, que
ofrece «Guardar como PDF» en todos los sistemas.

**Excepción al presupuesto de JavaScript.** El botón usa `onclick="window.print()"`, unos 30 bytes
en línea; no existe equivalente en HTML. `find dist -name "*.js"` sigue devolviendo **cero
archivos**. Justificación en §6 de `ARCHITECTURE.md`.

### Registrado — 2026-09-06

- Segunda extracción de Keyword Planner (403 keywords) archivada en
  `docs/data/keyword-planner-2026-09-06.csv`.
- **«joven cristiano» confirmada: 5 000 búsquedas y puja de hasta 21 836.** La primera lista semilla
  no la incluía; el mapa SEO ya estaba cubriéndola con una página pilar.
- **Análisis de competencia:** `elc.github.io` ocupa el puesto 4 para «juegos bíblicos para jóvenes
  cristianos». Descarta que GitHub Pages sea un obstáculo, y muestra que su ventaja no es el texto
  —tiene menos que nosotros— sino **el PDF imprimible por juego** y ocho años de antigüedad.
- Huecos nuevos sin cubrir: devocionales para jóvenes (500 · puja 11 265) y «jóvenes con Cristo».

### Añadido — 2026-09-05

**6 recursos nuevos** (total: 56). Cinco parten de mecánicas de juego que circulan por el nicho
—vídeos de YouTube y material de grupos juveniles—; están reescritos desde cero con la estructura
del sitio, y aportan lo que esas versiones no traen: listas completas, variantes, reflexión, base
bíblica y normas de seguridad.

- Folio rotatorio — con 20 categorías listas
- Ordena los libros de la Biblia — con los 66 en su orden y agrupados por bloques
- Alfabeto cristiano — con soluciones de la A a la Z
- El globo flotante — mantener el foco pese a las distracciones
- La bomba de preguntas — 25 preguntas rápidas **y normas de seguridad**
- Qué significa ser un joven cristiano — página pilar de la keyword de marca

**Seguridad en «La bomba de preguntas».** Inflar un globo hasta que explota junto a la cara de un
adolescente no es inofensivo: la ficha exige inflador manual, inflado en el centro del círculo,
participación voluntaria, aviso por alergia al látex y consideración con quien tenga sensibilidad
al ruido. Incluye además una variante sin globo, con cronómetro, para grupos sensibles.

### Cambiado — 2026-09-04 (neutralidad doctrinal)

Decisión editorial: **el contenido no toma partido en asuntos que dividen a las iglesias.** El
público es transversal —evangélicos, católicos, adventistas y otros— y una sola frase de una
tradición concreta hace que las demás descarten el recurso entero. Regla completa en §5 bis de
`CONTENT_PLAN.md`.

Ocho correcciones sobre el contenido ya publicado:

| Dónde | Antes | Ahora |
|---|---|---|
| Escape room | «aquí se usa Reina-Valera» | «la versión que use habitualmente tu iglesia»; se aclara que las respuestas son cifras que no cambian de traducción |
| Preguntas difíciles · ciencia | Afirmaba que Génesis responde al «quién», no al «cómo» | Presenta las dos lecturas y remite a la iglesia local |
| Preguntas difíciles · suicidio | «La salvación no depende de un último acto» | No se improvisa doctrina: se remite al responsable y se prioriza a quien escribió la pregunta |
| Preguntas difíciles · orientación | «responde con respeto» | Se remite a lo que enseñe cada iglesia, con dos condiciones innegociables: no humillar y no debatir en público |
| El naufragio | «Un sacerdote de 60 años» | «Un responsable de una iglesia, de 60 años» |
| Tabú · bautismo | Palabra prohibida «sumergir» | «ceremonia» — no presupone la forma del bautismo |
| Tabú · diezmo | Tarjeta «Diezmo» | Sustituida por «Esperanza» |
| Retiro | Horario de viernes a domingo sin más | Nota para desplazar el esquema si el día de culto es el sábado |

### Añadido — 2026-09-04

- `scripts/auditar-doctrina.mjs` + `npm run audit:doctrina`. Señala términos que exigen revisión
  manual; no decide por su cuenta, porque muchas apariciones son legítimas.

  **Nota:** la primera versión del script daba 50 falsos positivos porque el patrón `NVI` coincidía
  dentro de «coNVIerte» e «iNVIta». Corregido con límites de palabra.

### Registrado — 2026-09-04

**Primera indexación confirmada.** Google indexó 5 páginas el 2026-09-03, menos de 24 horas después
del despliegue: las cuatro categorías P0 (`/dinamicas/`, `/juegos-biblicos/`, `/temas/`,
`/actividades/`) y la home.

Queda descartado como problema el aviso «No se ha podido obtener» de la pantalla de Sitemaps: el
rastreo funciona igualmente porque `robots.txt` declara el sitemap.

### Añadido — 2026-09-04 (CHECKPOINT 3: enlazado interno)

- `scripts/auditar-enlaces.mjs` + `npm run audit:enlaces`. Comprueba lo que el compilador no ve:
  rango de 3-6 enlaces salientes por pieza, destinos inexistentes, páginas huérfanas y páginas con
  un solo enlace entrante. Devuelve código de error, así que sirve en CI.

### Corregido — 2026-09-04

La primera auditoría encontró **una página huérfana** (teléfono descompuesto bíblico, sin ningún
enlace entrante) y **ocho con un solo enlace entrante**. Una página a la que casi nadie enlaza se
rastrea menos y posiciona peor, y el problema no lo detecta ni `astro check` ni el navegador.

Añadidos 16 enlaces entrantes dirigidos. Estado tras la corrección: 177 enlaces internos, media de
3,5 por pieza, **0 huérfanas, 0 débiles, 0 rotos**.

### Añadido — 2026-09-04

- `docs/LINK_BUILDING.md`: estrategia de enlaces externos. Incluye la lista de prácticas que
  provocan penalización de Google y por qué se descartan, los activos enlazables del sitio, seis
  tácticas ordenadas por rentabilidad, tres plantillas de contacto y un plan trimestral con meta
  realista (5-10 enlaces, no cien).

### Añadido — 2026-09-04 (enlaces con poemasbiblicos.github.io)

Cuatro enlaces contextuales hacia el sitio hermano, colocados solo donde un poema aporta algo real
—una lectura de cierre, una lectura previa que da permiso para nombrar lo que duele—, no como
enlaces de relleno:

| Recurso | Destino |
|---|---|
| El mural de oración | poemas de reflexión para jóvenes |
| La caja de las cargas | poemas cristianos de consuelo |
| El ovillo de las cualidades | poemas cristianos de ánimo |
| Identidad: quién dice Dios que eres | poemas cristianos para adolescentes |

**Nota estratégica:** esta dirección de enlace aporta valor al lector, pero **no acelera la
indexación de este sitio**. Lo que la acelera es el enlace inverso, desde poemasbiblicos —que ya
está indexada y se rastrea con frecuencia— hacia aquí. Esa parte se gestiona en el otro
repositorio.

### Añadido — 2026-09-04 (tanda 5: CHECKPOINT 2 cerrado)

**5 recursos** que completan los 50:

- La caída de confianza — con protocolo de seguridad completo
- Las sillas cooperativas — el juego de las sillas sin eliminar a nadie
- Bingo bíblico — 40 casillas con sus pistas
- Las etiquetas (adultos) — prejuicios invisibles en la iglesia
- Mi historia en tres minutos (adultos) — testimonio con estructura y cronómetro

**CHECKPOINT 2 CERRADO: 50 / 50 recursos.**

Reparto final: 14 dinámicas · 10 juegos bíblicos · 7 temas · 7 actividades · 6 para adultos ·
6 guías para líderes. Las cuatro keywords P0 de 5 000 búsquedas mensuales tienen cluster propio y
contenido real, más el cluster secundario de adultos y el de líderes.

**Nota de seguridad:** «La caída de confianza» abre la ficha con el protocolo —nunca desde altura,
mínimo seis receptores, participación voluntaria, diálogo obligatorio antes de cada caída— porque
es una dinámica que habitualmente se hace mal y puede causar lesiones reales.

### Añadido — 2026-09-04 (tanda 4: temas y actividades)

**3 temas y 3 actividades** (total: 45 de 50):

- Amistades y presión de grupo — con el caso de Daniel y tres preguntas de criterio
- Noviazgo cristiano — con caja de preguntas anónimas y señales de relación que hace daño
- Perdonar cuando duele — centrado en qué **no** es perdonar
- La noche de preguntas difíciles — guion para las diez dudas más frecuentes
- Taller: leer la Biblia por tu cuenta — método de tres preguntas y plan de cuatro semanas
- El reto de los 21 días — hábito sostenido con acompañamiento del grupo

**Criterio editorial en los temas delicados.** Tres de estas piezas tocan asuntos donde el
tratamiento habitual en ambientes de iglesia puede hacer daño, y se han escrito en contra de ese
tratamiento:

- **Noviazgo** no promete que la espera garantice un matrimonio feliz —la Biblia no lo promete— e
  incluye una lista de señales de relación abusiva con instrucción de actuar en privado.
- **Perdón** dedica su bloque central a qué *no* es perdonar, y establece que perdonar nunca obliga
  a volver a una situación de peligro.
- **Preguntas difíciles** incluye pautas para la pregunta sobre el suicidio y para la de
  orientación sexual, con el criterio de no humillar a nadie que pueda estar en la sala.

### Añadido — 2026-09-04 (tanda 3: dinámicas)

**6 dinámicas nuevas** (total: 39 de 50). Elegidas por los modificadores que dominan el mapa SEO
—divertidas, integración, cortas, con reflexión—, no por variedad temática:

- El naufragio — debate sobre a quién salvar, con 10 personajes
- Los globos con preguntas — 21 preguntas en tres niveles
- Los zapatos del otro — 12 situaciones para defender en primera persona
- Cruzar el río — trabajo en equipo, con la regla de que si uno cae vuelven todos
- El regalo envuelto — apariencias, en 10 minutos
- El ovillo de las cualidades — cierre de curso o retiro

**Advertencias incluidas.** «El naufragio» avisa de adaptar la lista si en el grupo hay alguien con
discapacidad, adicciones en la familia o un familiar en prisión. «Los zapatos del otro» exige
revisar que ninguna situación sea reconocible como la de un joven concreto: la dinámica dejaría de
ser ficción y pasaría a exponer a alguien en público.

### Añadido — 2026-09-04 (tanda 2: cluster de líderes)

- **Cluster `/recursos-para-lideres/`**, que cubre la keyword P0 «cómo preparar una reunión
  juvenil». Con esto no queda ninguna keyword P0 sin atender.
- **6 guías** (total: 33 de 50): preparar una reunión · planificar el año · dirigir un grupo
  pequeño · organizar un retiro · integrar a los nuevos · no quemarte como líder.
- Color de categoría: **naranja neón `#FF8A3D`**.

### Cambiado — 2026-09-04 (esquema de contenido)

**Los campos de ficha práctica pasan a ser opcionales en el cluster de líderes.** Justificación
exigida por el §3 de `CONTENT_PLAN.md`:

Una guía de planificación no tiene edad recomendada, número de participantes, duración ni
materiales. Rellenar esos campos habría metido datos falsos en la ficha práctica, que es
precisamente el elemento diferencial del sitio. Se añade `guiaSchema` —el esquema base con esos
cuatro campos opcionales— y `ResourceMeta` y `ResourceCard` pintan solo lo que existe; si no hay
ningún dato, la ficha no se dibuja.

El resto de colecciones mantiene el esquema cerrado y obligatorio.

**Nota de contenido:** «Organizar un retiro juvenil» incluye el protocolo de seguridad con menores
(autorizaciones, ratio de un adulto por cada seis jóvenes, nunca a solas con un menor) y «Cómo no
quemarte» recomienda ayuda profesional ante señales de desgaste que afecten al sueño o al ánimo.

### Añadido — 2026-09-04 (tanda 1 hacia el CHECKPOINT 2)

**6 juegos bíblicos nuevos** (total: 27 de 50). Todos con su contenido ya preparado, que es lo que
distingue una ficha usable de un artículo que explica en qué consiste un juego:

- Mímica bíblica — **40 escenas** en tres niveles
- Tabú bíblico — **30 tarjetas** con sus palabras prohibidas
- Pictionary bíblico — **45 palabras** en tres niveles
- Verdadero o falso bíblico — **30 afirmaciones con su explicación**, incluidas diez frases que
  todo el mundo cree bíblicas y no lo son
- Búsqueda del tesoro bíblica — **8 pistas encadenadas** con su escondite
- Teléfono descompuesto bíblico — 10 versículos seleccionados por longitud

### Añadido — 2026-09-03 (cluster de Actividades)

- **Cluster `/actividades/`**, que cubre la keyword P0 «actividades para jóvenes cristianos»
  (5 000 búsquedas/mes). **Con esto quedan cubiertas las cuatro keywords P0 del mapa SEO.**
- **4 actividades** (total: 21 recursos), de mayor recorrido que una dinámica —ocupan una reunión
  entera o una tarde—, con preparación, desarrollo por fases y cierre reflexivo:
  - La cápsula del tiempo
  - El mapa de mi vida
  - Escape room bíblico (con los cuatro enigmas resueltos y la combinación comprobada)
  - Tarde de servicio en el barrio
- Color de categoría nuevo: **cian neón `#22D3EE`**. Con esto se agotan los colores de la paleta
  original; un sexto cluster exigiría ampliarla o agrupar categorías.

**Recursos con requisitos de seguridad.** «Tarde de servicio» exige autorización escrita de los
padres, un adulto por cada seis jóvenes, llamada previa al destino y prohibición de fotografiar a
personas vulnerables. «El mapa de mi vida» incluye protocolo ante revelaciones de abuso o
autolesión. Todo recurso futuro que saque a menores del local o toque su historia personal debe
mantener ese nivel de advertencia.

### Añadido — 2026-09-03 (cluster de Temas)

- **Cluster `/temas/`**, que ataca la keyword P0 «enseñanza para jóvenes cristianos» (5 000
  búsquedas/mes), la última de las cuatro grandes que quedaba sin cubrir.
- **4 temas completos** (total: 17 recursos), con la plantilla del §5.D del MASTER_PLAN —objetivo,
  texto bíblico, idea principal, introducción, desarrollo, preguntas, actividad, aplicación,
  conclusión y oración:
  - Identidad: quién dice Dios que eres
  - Propósito: para qué estoy aquí
  - Ansiedad y fe: cuando todo agobia
  - Redes sociales y comparación
- Color de categoría nuevo: **violeta eléctrico `#7B61FF`** para Temas.
- Enlazado cruzado: las dinámicas de confianza, oración y del lazarillo enlazan ahora a los temas
  correspondientes.

**Nota sobre «Ansiedad y fe»:** el recurso incluye avisos explícitos para el líder —no tratar la
ansiedad como falta de fe, y derivar a ayuda profesional ante señales de autolesión o ideas de
suicidio—. Cualquier recurso futuro sobre salud mental debe mantener ese criterio.

### Cambiado — 2026-09-03 (identidad: negro y neón)

Motivo: la identidad azul sobre blanco era indistinguible de cualquier web genérica.

- **Tema oscuro** en todo el sitio. Fondo `#0A0A0F`.
- **Verde neón `#3DFFA2`** como color de marca y de acción.
- **Color por categoría**: morado en Dinámicas, fucsia en Juegos, rosa en Adultos. Cada cluster lo
  declara en `clusters.ts` y los componentes lo consumen vía `--color-cat`: aparece en el filo de
  las tarjetas, las etiquetas, la ficha práctica, las citas y los marcadores de lista.
- **Logo nuevo**: figura en salto de Phosphor Icons (MIT) en verde sobre negro. Sustituye a la cruz
  azul genérica. Mismo icono en `favicon.svg`.
- **Tipografía**: Montserrat en titulares y Figtree en lectura, en lugar de Inter. Elegidas a
  partir de las que usan realmente ministrytoyouth.com, elevationchurch.org y catholic-link.com.
- Fotografías atenuadas (`brightness .7`) para que no compitan con el texto sobre fondo negro.

**Accesibilidad:** el texto en color de categoría usa una mezcla con blanco al 72 %. El morado puro
sobre negro daba 4,17:1 y AA exige 4,5. La mezcla se resuelve en cada componente, no en `:root`,
porque allí no heredaría el color del cluster.

**Presupuesto:** 0 KB de JavaScript · CSS 14,8 KB (límite 20) · `astro check` sin errores.

### Cambiado — 2026-09-03 (rediseño visual)

Motivo: el sitio funcionaba pero tenía acabado de esqueleto — sin imágenes, sin logo, con la
tipografía declarada pero no cargada y sin uso del color de acento.

- **Fotografía**: 4 imágenes de Unsplash en `src/assets/`, servidas con `<Image>` (WebP +
  responsive). Hero de 82 KB.
- **Tipografía**: Inter cargada de verdad, con `preconnect` y `display=swap`.
- **Logo** `public/logo.svg`, en cabecera y pie.
- **Hero** nuevo con imagen, velo de contraste, doble CTA y señales de confianza.
- **Home**: sección «Cómo funciona» en tres pasos, tarjetas de categoría con foto y contador de
  recursos, FAQ rediseñada con cuarta pregunta sobre adultos.
- **Cabecera de cluster** con imagen y número de recursos disponibles.
- **Ficha de recurso**: ficha práctica sobre fondo de marca, citas bíblicas destacadas en ámbar,
  jerarquía de encabezados y listas con marcador de color.
- **Pie de página** oscuro a tres columnas.
- Cabecera fija (`sticky`) al hacer scroll.
- `backdrop-filter` retirado: coste en gama baja y problemas de renderizado.

**Presupuesto verificado tras el rediseño:** 0 KB de JavaScript · CSS 13,4 KB (límite: 20) ·
`astro check` sin errores.

### Añadido — 2026-09-03 (tanda P1 y Search Console)

- **5 recursos nuevos** (total: 13), contra las keywords P1 del mapa SEO:
  - Juegos: preguntas y respuestas bíblicas (30 preguntas en 3 niveles) · el personaje misterioso
  - Dinámicas: el mural de oración · la cadena de nombres
  - Adultos: encuentra a alguien que… (rompehielos)
- `SITE.googleSiteVerification` en `src/site.config.mjs` + etiqueta `<meta>` en `BaseLayout`, para
  verificar la propiedad en Google Search Console.
  **Nota:** el método de registro TXT en DNS no es viable en `github.io` (el DNS es de GitHub); la
  propiedad debe crearse como «Prefijo de la URL» y verificarse por etiqueta HTML.
- `public/google02704c519b649822.html`: archivo de verificación de Search Console (segundo método,
  complementario a la etiqueta `<meta>`). **No borrar:** Google lo revisa periódicamente y su
  desaparición retira la propiedad verificada.
- Enlazado interno revisado: todas las piezas nuevas entran en el `related` de las anteriores.

### Añadido — 2026-09-03 (contenido y cluster de adultos)

- **Decisión de negocio resuelta:** se abre el público adulto como cluster **secundario**
  `/dinamicas-para-adultos/`. No aparece en la Home ni en el hero; la promesa central sigue siendo
  «jóvenes». Criterio de ampliación y de congelación en §4 de `SEO_MASTER_MAP.md`.
- Colección `adultos` y marca `secondary` en los clusters, que los excluye de las categorías de
  portada (`PRIMARY_CLUSTERS`).
- **5 recursos nuevos** (total: 8), escritos contra las keywords P0 del mapa SEO:
  - Adultos: dos verdades y una mentira · la telaraña de la comunidad · la caja de las cargas
  - Jóvenes: el lazarillo · la torre más alta
- Enlazado interno cruzado: `resolveRelated()` ahora busca en **todos** los clusters, no solo en el
  propio. Un slug inexistente se descarta en vez de generar un enlace roto.

### Corregido — 2026-09-03 (contenido)

- Dos descripciones superaban los 158 caracteres de meta description. El esquema Zod las rechazó en
  el build, como estaba previsto.

### Añadido — 2026-09-03

- **Primer despliegue en producción:** https://jovencristiano.github.io
- Repositorio remoto `JovenCristiano/jovencristiano.github.io`, GitHub Pages con Source
  «GitHub Actions».

- `docs/KEYWORD_RESEARCH.md`: procedimiento de investigación con Keyword Planner y Search Console,
  lista semilla de ~55 keywords por cluster y criterios de priorización.
- `SEO_MASTER_MAP.md`: columna `volumen` añadida; `enlaces internos` retirada (se gestiona en cada
  pieza, no en la tabla).

- `SEO_MASTER_MAP.md` **rellenado con datos reales** de Keyword Planner (450 keywords).
  CSV original archivado en `docs/data/keyword-planner-2026-09-02.csv`.

### Hallazgos de la investigación de keywords — 2026-09-03

- El público **adulto** (47 850 de volumen en 75 keywords) pesa tanto como el juvenil (47 250 en
  266). Decisión de negocio abierta en §4 del mapa SEO.
- El modificador dominante es **«divertidas»** (23 150), por delante de «integración» (12 400).
- **«Sin materiales» queda descartado como objetivo SEO** (150 de volumen): sigue siendo filtro de
  usabilidad, no keyword. Retiros y campamentos se posponen (50).
- Lead magnet **validado**: 6 keywords con «pdf» y 1 200 de volumen.
- Sub-nicho adventista desatendido: 26 keywords, 3 550 de volumen.

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
