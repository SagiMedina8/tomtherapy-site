import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://sporttherapy.netlify.app",
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
    mdx(),
  ],
  output: "static",
  image: {
    service: { entrypoint: "astro/assets/services/sharp" },
  },
  build: {
    inlineStylesheets: "auto",
  },
});
