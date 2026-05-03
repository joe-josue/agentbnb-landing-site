import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AgentBNB",
    short_name: "AgentBNB",
    description:
      "Property-aware AI operations for short-stay rentals.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6ead7",
    theme_color: "#41533a",
    icons: [
      {
        src: "/brand/agentbnb-icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
