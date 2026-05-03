import Image from "next/image";
import {
  BookOpenCheck,
  ClipboardCheck,
  GitFork,
  Handshake,
  Layers3,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const repoUrl = "https://github.com/joe-josue/AgentBNB";
const pricingHarnessUrl = "https://github.com/joe-josue/agentbnb-pricing-harness";
const contactUrl =
  "mailto:mail@joejosue.com?subject=AgentBNB%20implementation%20advisory";

const paths = [
  {
    label: "01",
    title: "Implement the OSS stack",
    body: "Fork the starter and adapt the Balay Pansol pattern. Star it if useful; future modules may become paid if demand grows without OSS support.",
    href: repoUrl,
    cta: "Open GitHub",
    icon: GitFork,
  },
  {
    label: "02",
    title: "Paid advisory / fit check",
    body: "A focused review of property fit, stack scope, approvals, staff handoff, data channels, and launch order.",
    href: contactUrl,
    cta: "Email for advisory",
    icon: Handshake,
  },
  {
    label: "03",
    title: "Tour the current stack",
    body: "Scan the agent, system of record, direct booking/admin site, and pricing or operations harnesses.",
    href: "#stack",
    cta: "See stack",
    icon: Layers3,
  },
];

const stackFeatures = [
  {
    title: "AI hospitality agent",
    body: "Inquiry triage, guest messaging, owner recommendations, and controlled booking progression.",
    image: "/screenshots/agent-recommendation.jpg",
    icon: Sparkles,
  },
  {
    title: "Property SoR",
    body: "Markdown operating truth for amenities, rules, rates, scripts, limitations, and agent context.",
    image: "/screenshots/agentbnb-system-of-record.png",
    icon: BookOpenCheck,
  },
  {
    title: "White-label site",
    body: "Direct booking page, owner dashboard, Google Sheets records, Resend email, and review loop.",
    image: "/screenshots/white-label-site.jpg",
    icon: ClipboardCheck,
  },
  {
    title: "Ops harnesses",
    body: "Pricing and operations lanes that help the agent recommend changes without hiding the owner.",
    image: "/screenshots/agentbnb-market-pricing-harness.png",
    icon: ShieldCheck,
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "AgentBNB",
      url: "https://agent-bnb.com",
      description:
        "AgentBNB is an open-source landing and documentation surface for a white-label AI hospitality operations stack.",
      publisher: {
        "@type": "Person",
        name: "Joe Josue",
        email: "mail@joejosue.com",
      },
    },
    {
      "@type": "SoftwareSourceCode",
      name: "AgentBNB",
      codeRepository: repoUrl,
      url: "https://agent-bnb.com",
      programmingLanguage: ["TypeScript", "Markdown"],
      applicationCategory: "Hospitality operations",
      description:
        "AgentBNB is a white-label hospitality operations stack for running Airbnb-like properties with an AI agent, direct booking site, owner dashboard, property system of record, and approval-gated workflows.",
      license: "https://github.com/joe-josue/AgentBNB/blob/master/LICENSE",
    },
    {
      "@type": "ProfessionalService",
      name: "AgentBNB implementation advisory",
      url: "https://agent-bnb.com",
      email: "mail@joejosue.com",
      areaServed: "Worldwide",
      serviceType:
        "Paid implementation advisory and property fitness checks for AI-assisted hospitality operations stacks.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is AgentBNB?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AgentBNB is a white-label hospitality operations stack for running Airbnb-like short-stay properties with an AI agent, owner approval loop, direct booking site, admin dashboard, and property system of record.",
          },
        },
        {
          "@type": "Question",
          name: "Was AgentBNB built from a real property workflow?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. AgentBNB is extracted from the Balay Pansol and Gideon reference workflow, generalized so another operator can study, fork, and adapt the pattern.",
          },
        },
        {
          "@type": "Question",
          name: "Can I get help implementing AgentBNB?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Joe Josue offers paid implementation advisory and fitness checks for property owners and operators evaluating whether AgentBNB fits their property.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <main className="page-frame">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="landing-shell" aria-labelledby="agentbnb-title">
        <header className="topline">
          <a className="mark" href={repoUrl} target="_blank" rel="noreferrer">
            <Image
              src="/brand/agentbnb-icon.png"
              alt="AgentBNB logo"
              width={42}
              height={42}
              priority
            />
            <span>AgentBNB</span>
          </a>
          <nav aria-label="Primary">
            <a href={repoUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={pricingHarnessUrl} target="_blank" rel="noreferrer">
              Harness
            </a>
            <a href={contactUrl}>Advisory</a>
          </nav>
        </header>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">OSS hospitality operations stack</p>
            <h1 id="agentbnb-title">
              AI-assisted ops for Airbnb-style properties.
            </h1>
            <p className="definition">
              AgentBNB is a white-label hospitality operations stack for running
              Airbnb-like properties with an AI agent, direct booking site,
              owner dashboard, and property system of record.
            </p>
            <p className="origin">
              Born from Balay Pansol, a real family-run short-stay property, and
              Gideon, the hospitality agent that helps operate its digital stack.
            </p>
            <div className="hero-actions" aria-label="AgentBNB actions">
              <a className="button primary" href={repoUrl} target="_blank" rel="noreferrer">
                <GitFork aria-hidden="true" size={17} />
                Star / fork on GitHub
              </a>
              <a className="button secondary" href={contactUrl}>
                <Mail aria-hidden="true" size={17} />
                Paid implementation check
              </a>
            </div>
          </div>

          <aside className="case-board" id="stack" aria-label="Current AgentBNB stack">
            <div className="board-heading">
              <span>Current stack</span>
              <span>Balay Pansol pattern</span>
            </div>
            <div className="image-study">
              <Image
                src="/screenshots/agent-recommendation.jpg"
                alt="AgentBNB agent recommendation workflow for owner approval"
                width={1280}
                height={720}
                priority
              />
            </div>
            <div className="feature-grid">
              {stackFeatures.map((feature) => {
                const Icon = feature.icon;

                return (
                  <article className="feature-tile" key={feature.title}>
                    <Image
                      src={feature.image}
                      alt={`${feature.title} screenshot from AgentBNB`}
                      width={320}
                      height={180}
                    />
                    <div>
                      <Icon aria-hidden="true" size={15} />
                      <h2>{feature.title}</h2>
                      <p>{feature.body}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>

        <div className="path-grid" aria-label="Explore AgentBNB">
          {paths.map((path) => {
            const Icon = path.icon;

            return (
              <a
                className="path-card"
                href={path.href}
                key={path.title}
                target={path.href.startsWith("http") ? "_blank" : undefined}
                rel={path.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <div className="path-meta">
                  <span>{path.label}</span>
                  <span className="card-link">
                    {path.cta}
                    <Icon aria-hidden="true" size={15} />
                  </span>
                </div>
                <h2>{path.title}</h2>
                <p>{path.body}</p>
              </a>
            );
          })}
        </div>
      </section>
    </main>
  );
}
