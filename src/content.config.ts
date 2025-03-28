// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// Define a `loader` and `schema` for each collection
const filmo = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/projects/FilmoProjector" }),
    schema: z.object({
      title: z.string(),
      project: z.string(),
      section: z.string(),
      sectionid: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      tags: z.array(z.string()),
      draft: z.boolean().optional()
    })
});

const severancecomputer = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/projects/SeveranceComputer" }),
    schema: z.object({
      title: z.string(),
      project: z.string(),
      section: z.string(),
      sectionid: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      tags: z.array(z.string()),
      draft: z.boolean().optional()
    })
});

// Export a single `collections` object to register your collection(s)
export const collections = { filmo, severancecomputer };