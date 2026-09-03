# DESIGN_SYSTEM

## 1. Intención

Transmitir **juventud, confianza, espiritualidad, modernidad, energía y claridad**.

Evitar: estética de iglesia tradicional, exceso de dorado, aire infantil, plantilla de blog
genérica.

**Mobile-first, sin excepciones.** El líder juvenil consulta el sitio desde el móvil, muchas veces
minutos antes de la reunión.

## 2. Tokens

Definidos en `src/styles/tokens.css` como custom properties. Ningún valor de color, espacio o
tamaño se escribe suelto en un componente.

### Color

```css
--color-brand:        #2563EB;  /* azul — confianza, energía, no litúrgico */
--color-brand-dark:   #1D4ED8;
--color-accent:       #F59E0B;  /* ámbar — CTA y destacados, uso escaso */
--color-ink:          #0F172A;  /* texto principal */
--color-ink-soft:     #475569;  /* texto secundario */
--color-surface:      #FFFFFF;
--color-surface-alt:  #F8FAFC;  /* fondo de tarjetas y secciones alternas */
--color-border:       #E2E8F0;
```

Contraste mínimo AA (4.5:1) en todo el texto. El ámbar nunca se usa como color de texto sobre
blanco.

### Tipografía

```css
--font-sans: 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif;
```

Una sola familia. Se sirve como fuente local o `font-display: swap`; nunca bloquea el render.

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
| `FAQ` | Preguntas plegables (`<details>`) + `FAQPage` |

**Regla:** ningún componente introduce JavaScript de cliente sin justificación escrita. Menú y
acordeones se resuelven con HTML nativo.

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
