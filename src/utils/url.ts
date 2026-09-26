export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  if (path === "/") {
    return base;
  }
  const normalizedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  return `${normalizedBase}${path}`;
}

export const routes = {
  home: withBase("/"),
  services: withBase("/services"),
  service: (slug: string) => withBase(`/services/${slug}`),
  gallery: withBase("/gallery"),
  reviews: withBase("/reviews"),
  book: withBase("/book"),
  policies: withBase("/policies"),
  contact: withBase("/contact"),
};