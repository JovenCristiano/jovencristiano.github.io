import type { ImageMetadata } from 'astro';
import dinamicas from '../assets/cat-dinamicas.jpg';
import juegos from '../assets/cat-juegos.jpg';
import adultos from '../assets/cat-adultos.jpg';
import type { ClusterId } from './clusters.ts';

/** Imagen de cabecera de cada cluster. Import estático: lo exige `astro:assets`. */
export const CLUSTER_IMAGE: Record<ClusterId, ImageMetadata> = {
  dinamicas,
  juegos,
  adultos,
};

/** Texto alternativo descriptivo, no decorativo (§5 DESIGN_SYSTEM). */
export const CLUSTER_ALT: Record<ClusterId, string> = {
  dinamicas: 'Manos de un grupo de jóvenes unidas en el centro de un círculo',
  juegos: 'Grupo de jóvenes riendo sentados en un muro al aire libre',
  adultos: 'Grupo de adultos abrazados mirando el atardecer desde una colina',
};
