import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Rss } from "lucide-react";
import versionHistory from "@/content/version-history.json";

export const metadata: Metadata = {
  title: "Version History",
  description:
    "AgentBNB version history, release notes, and shipped updates for the open-source AI hospitality operations stack.",
  alternates: {
    canonical: "/version-history",
  },
};

const latestRelease = versionHistory.releases[0];
const latestLabel =
  latestRelease.status === "shipped" ? "Latest Release" : "Release Candidate";

function releaseUrl() {
  return `${versionHistory.repoUrl}/tree/master`;
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "AgentBNB Version History",
  url: "https://agent-bnb.com/version-history",
  description:
    "Release notes and shipped updates for the AgentBNB open-source hospitality operations stack.",
  isPartOf: {
    "@type": "WebSite",
    name: "AgentBNB",
    url: "https://agent-bnb.com",
  },
  about: {
    "@type": "SoftwareSourceCode",
    name: "AgentBNB",
    codeRepository: versionHistory.repoUrl,
  },
};

export default function VersionHistoryPage() {
  return (
    <main className="release-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="release-shell" aria-labelledby="release-title">
        <header className="release-topline">
          <Link className="release-back" href="/">
            <ArrowLeft aria-hidden="true" size={15} />
            AgentBNB
          </Link>
          <a className="release-rss-link" href="/version-history/rss.xml">
            <Rss aria-hidden="true" size={14} />
            RSS
          </a>
        </header>

        <div className="release-hero">
          <p className="release-eyebrow">Release feed</p>
          <h1 id="release-title">AgentBNB version history</h1>
          <p>
            Versioning starts at{" "}
            <strong>{versionHistory.releases.at(-1)?.code}</strong>, the first
            public announcement release.
          </p>
        </div>

        <section className="latest-release" aria-labelledby="latest-release">
          <div className="release-card latest">
            <div className="release-card-head">
              <span className="release-version">{latestRelease.code}</span>
              <time dateTime={latestRelease.date}>{latestRelease.date}</time>
            </div>
            <p className="release-status">{latestRelease.status}</p>
            <h2 id="latest-release">
              {latestLabel}: {latestRelease.title}
            </h2>
            <p className="release-summary">{latestRelease.summary}</p>
            <ul className="release-notes">
              {latestRelease.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
            <div className="release-actions">
              <a href={releaseUrl()} target="_blank" rel="noreferrer">
                View repo
                <ArrowUpRight aria-hidden="true" size={14} />
              </a>
            </div>
          </div>
        </section>

        <section className="release-feed" aria-label="All AgentBNB releases">
          {versionHistory.releases.map((release) => (
            <article className="release-card" key={release.version}>
              <div className="release-card-head">
                <span className="release-version">{release.code}</span>
                <time dateTime={release.date}>{release.date}</time>
              </div>
              <p className="release-status">{release.status}</p>
              <h2>{release.title}</h2>
              <p className="release-summary">{release.summary}</p>
              <ul className="release-notes">
                {release.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
              <div className="release-actions">
                {release.links.map((link) => (
                  <a href={link.url} key={link.url} target="_blank" rel="noreferrer">
                    {link.label}
                    <ArrowUpRight aria-hidden="true" size={14} />
                  </a>
                ))}
              </div>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}
