import type { ImageMetadata } from "astro";

const imageModules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/media/*/images/*.{jpg,jpeg,png,webp,avif,gif}",
  { eager: true }
);

const videoModules = import.meta.glob<{ default: string }>(
  "/src/assets/media/*/videos/*.{mp4,webm}",
  { eager: true }
);

const mediaPathPattern = /\/src\/assets\/media\/([^/]+)\/(?:images|videos)\//;

export interface CollectionMedia {
  images: ImageMetadata[];
  videos: string[];
}

function slugFromPath(path: string): string | null {
  const match = path.match(mediaPathPattern);
  return match ? match[1] : null;
}

export function getCollectionMedia(slug: string): CollectionMedia {
  const images: ImageMetadata[] = [];
  const videos: string[] = [];

  for (const [path, module] of Object.entries(imageModules)) {
    if (slugFromPath(path) === slug) {
      images.push(module.default);
    }
  }

  for (const [path, module] of Object.entries(videoModules)) {
    if (slugFromPath(path) === slug) {
      videos.push(module.default);
    }
  }

  images.sort((a, b) => a.src.localeCompare(b.src));
  videos.sort((a, b) => a.localeCompare(b));

  return { images, videos };
}