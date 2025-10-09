// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Import loaders
import { glob } from 'astro/loaders';
// Define a `type` and `schema` for each collection
const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      strapline: z.string(),
      description: z.string(),
      summary: z.string(),
      tags: z.array(z.string()),
      thumbnail: image().optional(),
      banner: image().optional(),
      order: z.number(),
      featured: z.boolean(),
      private: z.boolean(),
    }),
});

const articleCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/articles" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      summary: z.string(),
      keywords: z.array(z.string()),
      banner: image().optional(),
      bannerShow: z.boolean(),
      publishDate: z.coerce.date(),
      featured: z.boolean(),
    }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  projects: projectsCollection,
  articles: articleCollection
};
