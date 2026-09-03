/**
 * Configuración de sitio en un único lugar.
 *
 * PENDIENTE: `url` es un placeholder hasta confirmar el usuario/organización de GitHub
 * (o el dominio propio). Cambiar SOLO aquí; nada más en el código la duplica.
 */
export const SITE = {
  url: 'https://jovencristiano.github.io',
  name: 'Joven Cristiano',
  title: 'Joven Cristiano — Recursos cristianos para jóvenes y líderes',
  description:
    'Dinámicas, juegos bíblicos, actividades y temas cristianos listos para usar con jóvenes. Recursos prácticos para líderes juveniles, iglesias y padres.',
  locale: 'es',
  ogImage: '/images/og-default.png',
};

/** Navegación principal. Un cluster solo entra aquí cuando tiene contenido publicado. */
export const NAV = [
  { href: '/dinamicas/', label: 'Dinámicas' },
  { href: '/juegos-biblicos/', label: 'Juegos bíblicos' },
  { href: '/sobre-nosotros/', label: 'Sobre nosotros' },
];
