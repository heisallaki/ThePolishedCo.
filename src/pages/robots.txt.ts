import type { APIRoute } from "astro";
import { withBase } from "../utils/url";

export const GET: APIRoute = ({ site }) => {
  const siteUrl = site ? site.toString() : "/";
  const sitemapPath = withBase("/sitemap-index.xml");
  const sitemapUrl = new URL(sitemapPath, siteUrl).toString();
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};