import { defineCollection, z } from "astro:content";

const articles = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tag: z.string(),
    readingTime: z.string(),
    excerpt: z.string(),
    publishedAt: z.string(),
  }),
});

export const collections = { articles };
