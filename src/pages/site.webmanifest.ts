import type { APIRoute } from "astro";
import { withBase } from "../utils/url";

export const GET: APIRoute = () => {
  const manifest = {
    name: "The Polished Co. Ke",
    short_name: "Polished Co.",
    icons: [
      { src: withBase("/android-chrome-192x192.png"), sizes: "192x192", type: "image/png" },
      { src: withBase("/android-chrome-512x512.png"), sizes: "512x512", type: "image/png" },
    ],
    theme_color: "#f6c6db",
    background_color: "#fce7ef",
    display: "standalone",
    start_url: withBase("/"),
  };

  return new Response(JSON.stringify(manifest, null, 2), {
    headers: { "Content-Type": "application/manifest+json" },
  });
};