import type { MetadataRoute } from "next";
import { artworks } from "./data/artworks";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mladenilic.art";
  const staticRoutes = ["", "/works", "/about", "/process", "/private-commissions", "/contact"];
  return [
    ...staticRoutes.map((path) => ({ url: `${base}${path}`, changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.7 })),
    ...artworks.map((artwork) => ({ url: `${base}/works/${artwork.slug}`, changeFrequency: "monthly" as const, priority: 0.8 }))
  ];
}
