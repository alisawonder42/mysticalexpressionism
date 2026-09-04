import type { MetadataRoute } from "next";
import { artworks } from "./data/artworks";
import { SITE_URL } from "./lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/works`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/contact`, changeFrequency: "monthly", priority: 0.6 },
  ];

  const artworkRoutes: MetadataRoute.Sitemap = artworks.map((artwork) => ({
    url: `${SITE_URL}/works/${artwork.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
    images: artwork.images.slice(0, 1),
  }));

  return [...staticRoutes, ...artworkRoutes];
}
