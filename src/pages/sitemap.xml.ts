import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { site } from "../data/site";

const STATIC_ROUTES = [
  "/",
  "/about",
  "/services",
  "/process",
  "/testimonials",
  "/articles",
  "/booking",
  "/contact",
];

export const GET: APIRoute = async () => {
  const articles = await getCollection("articles");
  const articleUrls = articles.map((a) => `/articles/${a.slug}`);
  const urls = [...STATIC_ROUTES, ...articleUrls];
  const today = new Date().toISOString().slice(0, 10);

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${site.url}${u}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
