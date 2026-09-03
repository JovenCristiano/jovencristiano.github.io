import { getCollection, type CollectionEntry } from 'astro:content';

export type ClusterId = 'dinamicas' | 'juegos';

interface Cluster {
  id: ClusterId;
  /** Ruta pública del cluster. Una URL publicada no se cambia (§4 ARCHITECTURE). */
  base: string;
  label: string;
  title: string;
  description: string;
  intro: string;
}

export const CLUSTERS: Record<ClusterId, Cluster> = {
  dinamicas: {
    id: 'dinamicas',
    base: '/dinamicas/',
    label: 'Dinámicas',
    title: 'Dinámicas para jóvenes cristianos',
    description:
      'Dinámicas para jóvenes cristianos listas para usar: objetivo, materiales, instrucciones paso a paso y reflexión bíblica para tu próxima reunión juvenil.',
    intro:
      'Cada dinámica incluye edad recomendada, número de participantes, duración, materiales e instrucciones paso a paso, con su reflexión bíblica.',
  },
  juegos: {
    id: 'juegos',
    base: '/juegos-biblicos/',
    label: 'Juegos bíblicos',
    title: 'Juegos bíblicos para jóvenes',
    description:
      'Juegos bíblicos para jóvenes con reglas claras y reflexión: rompehielos, competencias por equipos, preguntas y memoria de versículos para grupos juveniles.',
    intro:
      'Juegos con reglas claras, variantes y una reflexión bíblica que cierra la actividad. Filtrables por edad, duración y materiales.',
  },
};

/** Los borradores nunca se compilan en producción. */
export async function getPublished<T extends ClusterId>(id: T): Promise<CollectionEntry<T>[]> {
  const entries = await getCollection(id, ({ data }) => import.meta.env.DEV || !data.draft);
  return entries.sort(
    (a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf(),
  ) as CollectionEntry<T>[];
}

export function urlFor(id: ClusterId, slug: string): string {
  return `${CLUSTERS[id].base}${slug}/`;
}

/** Resuelve los slugs de `related` a enlaces reales dentro del mismo cluster. */
export function resolveRelated<T extends ClusterId>(
  id: T,
  slugs: string[],
  all: CollectionEntry<T>[],
): { href: string; title: string }[] {
  return slugs
    .map((slug) => all.find((entry) => entry.id === slug))
    .filter((entry): entry is CollectionEntry<T> => Boolean(entry))
    .map((entry) => ({ href: urlFor(id, entry.id), title: entry.data.title }));
}
