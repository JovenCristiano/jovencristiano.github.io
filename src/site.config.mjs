/**
 * Configuración de sitio en un único lugar.
 *
 * Dominio propio desde el 02/10/2026. Se sirve desde GitHub Pages (repositorio
 * `JovenCristiano.github.io`), que redirige con 301 desde `jovencristiano.github.io`.
 *
 * NO renombrar ni borrar ese repositorio: ese 301 es lo que conserva las páginas ya
 * indexadas y los enlaces externos que apuntan a la dirección antigua.
 */
export const SITE = {
  url: 'https://jovencristiano.org',
  name: 'Joven Cristiano',
  title: 'Joven Cristiano — Recursos cristianos para jóvenes y líderes',
  description:
    'Recursos para el joven cristiano y para quien dirige su grupo: dinámicas, juegos bíblicos, actividades, temas y devocionales listos para usar. Gratis y sin registro.',
  locale: 'es',
  ogImage: '/images/og-default.png',
  /**
   * Token de verificación de Google Search Console (método «Etiqueta HTML»).
   *
   * OJO: el método de registro TXT en DNS **no sirve** aquí. Requiere controlar el DNS de
   * `github.io`, que pertenece a GitHub. En Search Console hay que crear la propiedad como
   * «Prefijo de la URL» y copiar aquí el token de la opción «Etiqueta HTML».
   *
   * Cadena vacía = no se imprime ninguna etiqueta.
   */
  googleSiteVerification: 'jWxoHw50nGbBUBoC-LXITfbioE9pHFsx4nM3IjUBH0I',
};

/** Navegación principal. Un cluster solo entra aquí cuando tiene contenido publicado. */
export const NAV = [
  { href: '/dinamicas/', label: 'Dinámicas' },
  { href: '/juegos-biblicos/', label: 'Juegos bíblicos' },
  { href: '/actividades/', label: 'Actividades' },
  { href: '/recursos-para-lideres/', label: 'Para líderes' },
  { href: '/temas/', label: 'Temas' },
  { href: '/devocionales/', label: 'Devocionales' },
  { href: '/articulos/', label: 'Artículos' },
  { href: '/dinamicas-para-adultos/', label: 'Para adultos' },
  { href: '/sobre-nosotros/', label: 'Sobre nosotros' },
];
