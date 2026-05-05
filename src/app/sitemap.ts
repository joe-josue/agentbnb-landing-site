import type { MetadataRoute } from "next";
import versionHistory from "@/content/version-history.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const latestReleaseDate = new Date(versionHistory.releases[0].date);

  return [
    {
      url: "https://agent-bnb.com",
      lastModified: new Date("2026-05-04"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://agent-bnb.com/version-history",
      lastModified: latestReleaseDate,
      changeFrequency: "weekly",
      priority: 0.72,
    },
  ];
}
