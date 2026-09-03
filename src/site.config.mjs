/**
 * Configuración de sitio en un único lugar.
 *
 * `url` corresponde al sitio de usuario de GitHub Pages de la cuenta `JovenCristiano`
 * (repositorio `JovenCristiano.github.io`). Al migrar a dominio propio se cambia SOLO aquí:
 * ningún otro archivo duplica el dominio y `base: '/'` mantiene intactas las rutas internas.
 */
export const SITE = {
  url: 'https://jovencristiano.github.io',
  name: 'Joven Cristiano',
  title: 'Joven Cristiano — Recursos cristianos para jóvenes y líderes',
  description:
    'Dinámicas, juegos bíblicos, actividades y temas cristianos listos para usar con jóvenes. Recursos prácticos para líderes juveniles, iglesias y padres.',
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
  { href: '/temas/', label: 'Temas' },
  { href: '/dinamicas-para-adultos/', label: 'Para adultos' },
  { href: '/sobre-nosotros/', label: 'Sobre nosotros' },
];
