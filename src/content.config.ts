import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { parse } from 'yaml';

// Blog posts: one Markdown file per post in src/content/writing/.
const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    category: z.enum(['ai-safety', 'personal']),
    draft: z.boolean().default(false),
  }),
});

// YouTube videos shown on the Climbing and Life pages. Astro sorts entries by
// id, so record each video's position in the file to keep the listed order.
const videos = defineCollection({
  loader: file('src/data/videos.yaml', {
    parser: (text) => (parse(text) as Record<string, unknown>[]).map((v, i) => ({ ...v, order: i })),
  }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    page: z.enum(['climbing', 'life']),
    section: z.string().optional(),
    list: z.string().optional(),
  }),
});

// Alt text, captions and credits for images in src/assets/photos/.
const photos = defineCollection({
  loader: file('src/data/photos.yaml'),
  schema: z.object({
    alt: z.string(),
    caption: z.string().default('TBD'),
    credit: z.string().optional(),
  }),
});

export const collections = { writing, videos, photos };
