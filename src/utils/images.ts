import type { ImageMetadata } from 'astro';
import dinamicas from '../assets/cat-dinamicas.jpg';
import juegos from '../assets/cat-juegos.jpg';
import adultos from '../assets/cat-adultos.jpg';
import temas from '../assets/cat-temas.jpg';
import actividades from '../assets/cat-actividades.jpg';
import lideres from '../assets/cat-lideres.jpg';
import devocionales from '../assets/cat-devocionales.jpg';
import articulos from '../assets/cat-articulos.jpg';
import type { ClusterId } from './clusters.ts';

/** Imagen de cabecera de cada cluster. Import estático: lo exige `astro:assets`. */
export const CLUSTER_IMAGE: Record<ClusterId, ImageMetadata> = {
  dinamicas,
  juegos,
  adultos,
  temas,
  actividades,
  lideres,
  devocionales,
};

/**
 * Los artículos no son un cluster —no aparecen en CLUSTERS ni en los listados de categoría—
 * pero sí tienen tarjeta en la Home, así que su imagen va aparte del mapa por cluster.
 */
export const ARTICULOS_IMAGE: ImageMetadata = articulos;
export const ARTICULOS_ALT =
  'Mano escribiendo en un cuaderno junto a un libro abierto y subrayado';

/** Texto alternativo descriptivo, no decorativo (§5 DESIGN_SYSTEM). */
export const CLUSTER_ALT: Record<ClusterId, string> = {
  dinamicas: 'Manos de un grupo de jóvenes unidas en el centro de un círculo',
  juegos: 'Grupo de jóvenes riendo sentados en un muro al aire libre',
  adultos: 'Grupo de adultos abrazados mirando el atardecer desde una colina',
  temas: 'Dos manos que se acercan hasta casi rozarse entre columnas de hormigón',
  actividades: 'Grupo de jóvenes riendo juntos alrededor de una mesa en una biblioteca',
  lideres: 'Persona escribiendo en un cuaderno mientras planifica sobre una mesa',
  devocionales: 'Manos sosteniendo una Biblia abierta durante la lectura',
};
