// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const projectsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      strapline: z.string(),
      description: z.string(),
      summary: z.string(),
      tags: z.array(z.string()),
     /* thumbnail: image().refine((img) => img.width >= 300, {
        message: "Cover image must be at least 500 pixels wide!",
      }),
      banner: image().refine((img) => img.width >= 1024, {
        message: "Banner must be at least 1024px wide"
      }),*/
      order: z.number(),
      featured: z.boolean(),
      private: z.boolean(),
    }),
});

const articleCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      summary: z.string(),
      keywords: z.array(z.string()),
      /*banner: image().refine((img) => img.width >= 1024, {
        message: "Banner must be at least 1024px wide"
      }),*/
      bannerShow: z.boolean(),
      publishDate: z.date(),
      featured: z.boolean(),
    }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  projects: projectsCollection,
  articles: articleCollection
};
