# DESIGN_SYSTEM

## 1. Intención

Transmitir **juventud, confianza, espiritualidad, modernidad, energía y claridad**.

Evitar: estética de iglesia tradicional, exceso de dorado, aire infantil, plantilla de blog
genérica.

**Identidad:** negro con neón. El logo es una figura en salto (Phosphor Icons, MIT) en verde neón
sobre negro.

**Mobile-first, sin excepciones.** El líder juvenil consulta el sitio desde el móvil, muchas veces
minutos antes de la reunión.

## 2. Tokens

Definidos en `src/styles/tokens.css` como custom properties. Ningún valor de color, espacio o
tamaño se escribe suelto en un componente.

### Color — tema oscuro

El sitio es **oscuro por defecto**. El verde neón es el color de marca y de acción; cada categoría
tiene el suyo, lo que permite orientarse sin leer.

```css
--color-brand:     #3DFFA2;  /* verde neón — logo, botones, enlaces, foco */
--color-dinamicas: #A855F7;  /* morado */
--color-juegos:    #E93BD3;  /* fucsia */
--color-adultos:   #FF4D9D;  /* rosa */
--color-temas:     #7B61FF;  /* violeta eléctrico */

--color-bg:          #0A0A0F;  /* fondo general */
--color-surface:     #15151F;  /* tarjetas */
--color-surface-alt: #101018;  /* secciones alternas */
--color-border:      #26263A;

--color-ink:       #FFFFFF;
--color-ink-soft:  #A0A0BC;   /* 7,8:1 sobre el fondo */
--color-ink-faint: #8A8AA3;
--color-on-brand:  #0A0A0F;   /* texto sobre verde: SIEMPRE negro */
```

**Regla del verde:** es de la marca y de las acciones. Nunca identifica una categoría, o dejaría de
señalar nada.

**Color de categoría.** Cada cluster declara su color en `src/utils/clusters.ts` y lo inyecta como
`--color-cat`. Los componentes lo consumen; no conocen la categoría concreta.

**Texto en color de categoría.** Nunca el color puro: el morado sobre negro se queda en 4,17:1 y AA
exige 4,5. Se usa `color-mix(in srgb, var(--color-cat) 72%, #fff)` **en el propio componente**, no
como token en `:root` — allí se resolvería contra el valor de la raíz y no heredaría el del cluster.

### Tipografía

```css
--font-display: 'Montserrat', system-ui, sans-serif;  /* titulares, botones, rótulos */
--font-sans:    'Figtree',    system-ui, sans-serif;  /* texto de lectura */
```

Elegidas a partir de lo que usan de verdad las webs líderes del nicho: **ministrytoyouth.com**
(Montserrat + Figtree), elevationchurch.org (DM Sans) y catholic-link.com (Open Sans). Montserrat
es además el equivalente libre de Proxima Nova, la de Hillsong y Life.Church. Se sirve como fuente local o `font-display: swap`; nunca bloquea el render.

| Rol | Tamaño móvil | Tamaño desktop | Peso |
|---|---|---|---|
| H1 | 1.875rem | 2.5rem | 700 |
| H2 | 1.5rem | 1.875rem | 700 |
| H3 | 1.25rem | 1.5rem | 600 |
| Cuerpo | 1.0625rem | 1.125rem | 400 |
| Auxiliar | 0.875rem | 0.875rem | 400 |

Interlineado del cuerpo: 1.7. Ancho máximo de lectura: 68 caracteres.

### Espacio

Escala de 4 px: `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96`.
Expuesta como `--space-1` … `--space-9`. No se usan valores fuera de la escala.

### Radios y sombras

```css
--radius-sm: 6px;  --radius-md: 12px;  --radius-lg: 20px;
--shadow-card:  0 1px 3px rgb(15 23 42 / .08);
--shadow-hover: 0 8px 24px rgb(15 23 42 / .12);
```

Sombras suaves. Sin bordes duros ni degradados llamativos.

### Superficies de apoyo

```css
--color-brand-soft:  #EFF6FF;  /* fondo suave de marca: fichas, chips, pasos */
--color-accent-soft: #FFFBEB;  /* fondo suave de acento: citas bíblicas */
--color-ink-inverse: #F8FAFC;  /* texto sobre fondo oscuro (pie) */
--color-overlay:     rgb(15 23 42 / .55);
```

## 2 bis. Imágenes

Fotografías de **Unsplash** (licencia libre, uso comercial, sin atribución obligatoria). Viven en
`src/assets/` y se sirven con `<Image>` de `astro:assets`: WebP y variantes responsive automáticas.

- **Nunca** en `public/`: ahí no se optimizan.
- El `alt` describe la escena; solo es `alt=""` cuando la imagen es decorativa (el hero, porque el
  titular ya comunica el mensaje).
- Toda imagen sobre la que haya texto lleva velo (`--color-overlay` o degradado) para garantizar
  contraste AA.
- La imagen del hero es el LCP: `loading="eager"` y `fetchpriority="high"`.

## 3. Componentes base

| Componente | Función |
|---|---|
| `BaseLayout` | Head, nav, footer, skip link |
| `SEO` | title, description, canonical, OG, Twitter, JSON-LD |
| `Nav` | Navegación principal, colapsable en móvil **sin JavaScript** (`<details>`) |
| `Breadcrumb` | Migas + `BreadcrumbList` |
| `ResourceCard` | Tarjeta con título, categoría, edad, duración, materiales |
| `ResourceMeta` | Ficha práctica del recurso |
| `RelatedResources` | Bloque de 3–6 enlaces relacionados |
| `CTA` | Llamada a la acción reutilizable |
| `Hero` | Portada con imagen, velo y doble CTA |
| `CategoryCard` | Tarjeta de cluster con foto y número de recursos |
| `FAQ` | Preguntas plegables (`<details>`) + `FAQPage` |

**Regla:** ningún componente introduce JavaScript de cliente sin justificación escrita. Menú y
acordeones se resuelven con HTML nativo.

**Descartado:** `backdrop-filter`. Es caro en gama baja y rompe la captura de pantalla en algunos
motores. Se sustituye por fondos sólidos.

## 4. Tarjetas de recurso

Muestran siempre, de un vistazo: **categoría · edad · duración · participantes · materiales**.
Esa ficha es el diferencial del sitio frente a un blog; nunca se oculta tras un clic.

## 5. Accesibilidad

- Objetivos táctiles ≥ 44 × 44 px.
- Foco visible en todo elemento interactivo.
- Un solo `<h1>` por página, jerarquía sin saltos.
- `alt` descriptivo en toda imagen de contenido; `alt=""` en las decorativas.
- Respetar `prefers-reduced-motion`.
- Nada se comunica solo con color.

## 6. Modo oscuro

No en el MVP. Los tokens se declaran de forma que añadirlo después sea redefinir variables bajo
`prefers-color-scheme: dark`, sin tocar componentes.
