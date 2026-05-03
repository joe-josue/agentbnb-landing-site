import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://agent-bnb.com",
      lastModified: new Date("2026-05-04"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
