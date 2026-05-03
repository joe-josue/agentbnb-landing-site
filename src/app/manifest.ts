import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AgentBNB",
    short_name: "AgentBNB",
    description:
      "AI hospitality operations stack for Airbnb-like properties.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f1e8",
    theme_color: "#596b4d",
    icons: [
      {
        src: "/brand/agentbnb-icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
