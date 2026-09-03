import { getCollection, type CollectionEntry } from 'astro:content';

export type ClusterId = 'dinamicas' | 'juegos' | 'adultos';

interface Cluster {
  id: ClusterId;
  /** Ruta pública del cluster. Una URL publicada no se cambia (§4 ARCHITECTURE). */
  base: string;
  label: string;
  title: string;
  description: string;
  intro: string;
  /** Secundario: no aparece en las categorías de la Home (§4 SEO_MASTER_MAP). */
  secondary?: boolean;
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
  adultos: {
    id: 'adultos',
    base: '/dinamicas-para-adultos/',
    label: 'Para adultos',
    title: 'Dinámicas cristianas para adultos divertidas y cortas',
    description:
      'Dinámicas cristianas para adultos: divertidas, cortas y con reflexión bíblica. Ideales para células, grupos pequeños y reuniones de adultos en la iglesia.',
    intro:
      'Las mismas fichas prácticas, pensadas para grupos de adultos: células, grupos pequeños y reuniones de iglesia. Cada dinámica indica duración, participantes y materiales.',
    secondary: true,
  },
};

/** Clusters que se muestran en la Home. */
export const PRIMARY_CLUSTERS = Object.values(CLUSTERS).filter((c) => !c.secondary);

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

interface Link { href: string; title: string }

/**
 * Resuelve los slugs de `related` a enlaces reales, buscando en **todos** los clusters.
 * El enlazado interno es obligatorio (§13 del MASTER_PLAN) y no debe quedar encerrado
 * dentro de una sola categoría. Un slug inexistente se descarta: nunca genera enlace roto.
 */
export async function resolveRelated(slugs: string[]): Promise<Link[]> {
  const links: Link[] = [];

  for (const id of Object.keys(CLUSTERS) as ClusterId[]) {
    const entries = await getPublished(id);
    for (const entry of entries) {
      if (slugs.includes(entry.id)) {
        links.push({ href: urlFor(id, entry.id), title: entry.data.title });
      }
    }
  }

  // Respeta el orden declarado en el frontmatter.
  return slugs
    .map((slug) => links.find((l) => l.href.includes(`/${slug}/`)))
    .filter((l): l is Link => Boolean(l));
}
