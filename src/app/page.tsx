import Image from "next/image";
import { CopyEditor } from "./CopyEditor";
import { FeatureShowcase } from "./FeatureShowcase";
import {
  GitFork,
  Handshake,
  Layers3,
  Mail,
} from "lucide-react";

const repoUrl = "https://github.com/joe-josue/AgentBNB";
const contactUrl =
  "mailto:mail@joejosue.com?subject=AgentBNB%20implementation%20advisory";

const paths = [
  {
    id: "advisory",
    label: "Implementation",
    title: "Inquire for Assisted Setup & Advisory",
    body: "Accepting white-glove and curated setup for serious operators looking to apply AgentBNB to their properties. Email at mail@joejosue.com",
    href: contactUrl,
    cta: "Custom Implementation",
    icon: Handshake,
  },
  {
    id: "stack-tour",
    label: "Open source",
    title: "Run the Stack, Contribute, Donate.",
    body: "AgentBNB runs an open source component shared from real implementation. Savvy users can run the stack themselves, developers are open to contribute, and donating to allow continuous development goes a long way.",
    href: repoUrl,
    cta: "Open Source",
    icon: GitFork,
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
        "AgentBNB presents a white-label AI hospitality operations stack for short-stay property owners and property managers.",
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
      audience: [
        "Independent short-stay property owners",
        "Vacation rental operators",
        "Property managers with multiple rentals",
      ],
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

      <section className="landing-shell" id="top" aria-labelledby="agentbnb-title">
        <header className="topline">
          <a className="mark" href="#top">
            <Image
              src="/brand/agentbnb-icon.png"
              alt="AgentBNB logo"
              width={42}
              height={42}
              priority
            />
            <span data-copy-id="brand.name">AgentBNB</span>
          </a>
        </header>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow" data-copy-id="hero.eyebrow">
              AI hospitality operations stack
            </p>
            <h1 id="agentbnb-title" data-copy-id="hero.title">
              Operate Airbnb-style properties with an AI-Agent
            </h1>
            <p className="definition" data-copy-id="hero.definition">
              AgentBNB is a white-label hospitality operations stack for running
              Airbnb-like properties with an AI agent.
            </p>
            <p className="origin" data-copy-id="hero.origin">
              Born from Balay Pansol, a real family-run short-stay property, and
              Gideon, the hospitality agent that operate its it digital stack.
            </p>
            <p className="operator-note" data-copy-id="hero.operatorNote">
              SAVE HUNDREDS OF DOLLARS IN OPEX AND TIME. The Base Monthly
              Operating Cost of the running AgentBNB $50USD/MO
            </p>
            <div className="hero-actions" aria-label="AgentBNB actions">
              <a className="button primary" href="#stack">
                <Layers3 aria-hidden="true" size={17} />
                <span data-copy-id="hero.cta.primary">Tour the operating stack</span>
              </a>
              <a className="button secondary" href={contactUrl}>
                <Mail aria-hidden="true" size={17} />
                <span data-copy-id="hero.cta.secondary">Paid implementation check</span>
              </a>
            </div>
          </div>

          <aside className="case-board" id="stack" aria-label="Current AgentBNB stack">
            <div className="board-heading">
              <span data-copy-id="stack.kicker">FEATURED CAPABILITIES</span>
              <span data-copy-id="stack.context">--</span>
            </div>
            <FeatureShowcase />
          </aside>
        </div>

        <div className="path-grid" id="paths" aria-label="Explore AgentBNB">
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
                  <span data-copy-id={`paths.${path.id}.label`}>
                    {path.label}
                  </span>
                  <span className="card-link">
                    <span data-copy-id={`paths.${path.id}.cta`}>
                      {path.cta}
                    </span>
                    <Icon aria-hidden="true" size={15} />
                  </span>
                </div>
                <h2 data-copy-id={`paths.${path.id}.title`}>
                  {path.title}
                </h2>
                <p data-copy-id={`paths.${path.id}.body`}>
                  {path.body}
                </p>
              </a>
            );
          })}
        </div>
      </section>
      {process.env.NODE_ENV === "development" ? <CopyEditor /> : null}
    </main>
  );
}
