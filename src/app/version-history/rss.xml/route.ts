import versionHistory from "@/content/version-history.json";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function GET() {
  const items = versionHistory.releases
    .map((release) => {
      const description = [
        release.summary,
        "",
        ...release.notes.map((note) => `- ${note}`),
      ].join("\n");

      return `
        <item>
          <title>${escapeXml(`${release.code}: ${release.title}`)}</title>
          <link>${escapeXml(versionHistory.repoUrl)}</link>
          <guid isPermaLink="false">${escapeXml(`agentbnb-${release.code}`)}</guid>
          <pubDate>${new Date(release.date).toUTCString()}</pubDate>
          <description>${escapeXml(description)}</description>
        </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <channel>
        <title>AgentBNB Version History</title>
        <link>https://agent-bnb.com/version-history</link>
        <description>Release notes for AgentBNB, an open-source AI hospitality operations stack.</description>
        <language>en-us</language>
        <lastBuildDate>${new Date(versionHistory.releases[0].date).toUTCString()}</lastBuildDate>
        ${items}
      </channel>
    </rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
