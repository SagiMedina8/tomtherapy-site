import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

// NOTE: @astrojs/sitemap 3.2.1 has a buildDone bug with Astro 4.16
// (reads .reduce on undefined pages). Using a custom sitemap endpoint
// at src/pages/sitemap.xml.ts instead — simpler, one less dependency.
export default defineConfig({
  site: "https://sporttherapy.netlify.app",
  integrations: [
    tailwind({ applyBaseStyles: false }),
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
