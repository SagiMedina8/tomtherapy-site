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

// Site content collection — all page text, as JSON data entries.
// Not consumed via getCollection(); files are imported directly
// (e.g., `import home from "../content/site/home.json"`).
// Registered here so Astro treats it as a data collection, not content.
const site = defineCollection({
  type: "data",
});

export const collections = { articles, site };
