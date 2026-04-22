import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

// sitemap re-enabled in Phase 6 (needs >1 page for plugin to serialize)
const ENABLE_SITEMAP = process.env.ENABLE_SITEMAP !== "false";

export default defineConfig({
  site: "https://sporttherapy.netlify.app",
  integrations: [
    tailwind({ applyBaseStyles: false }),
    ...(ENABLE_SITEMAP ? [sitemap()] : []),
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
