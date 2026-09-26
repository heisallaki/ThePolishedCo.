import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const site = process.env.SITE_URL || "https://heisallaki.github.io";
const base = process.env.SITE_BASE || "/";

export default defineConfig({
  output: "static",
  site,
  base,
  integrations: [sitemap()],
});