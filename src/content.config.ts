import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Esquema cerrado del frontmatter (fuente única: docs/CONTENT_PLAN.md).
 * Añadir un campo exige justificación escrita en docs/CHANGELOG.md.
 *
 * El slug NO va en el frontmatter: lo deriva Astro del nombre del archivo.
 * Renombrar un archivo publicado = URL rota.
 */
const resourceSchema = z.object({
  title: z.string().max(60),
  description: z.string().min(120).max(158),
  category: z.string(),
  tags: z.array(z.string()).min(3).max(6),
  audience: z.enum(['lideres', 'jovenes', 'padres', 'maestros']),
  age_range: z.string(),
  duration: z.string(),
  participants: z.string(),
  difficulty: z.enum(['facil', 'media', 'alta']),
  materials: z.array(z.string()),
  featured: z.boolean().default(false),
  publishedAt: z.date(),
  updatedAt: z.date().optional(),
  related: z.array(z.string()).max(6).default([]),
  product: z.string().optional(),
  draft: z.boolean().default(false),
});

const pattern = '**/*.{md,mdx}';

// Solo se activan las colecciones con contenido real (§3 ARCHITECTURE).
const dinamicas = defineCollection({
  loader: glob({ pattern, base: './src/content/dinamicas' }),
  schema: resourceSchema,
});

const juegos = defineCollection({
  loader: glob({ pattern, base: './src/content/juegos' }),
  schema: resourceSchema,
});

export const collections = { dinamicas, juegos };
