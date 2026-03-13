import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const matematica = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/matematica' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).optional(),
  }),
});

const computacao = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/computacao' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  matematica,
  computacao,
};