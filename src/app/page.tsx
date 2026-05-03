import Image from "next/image";
import {
  ArrowUpRight,
  BookOpenCheck,
  CalendarCheck,
  ChevronRight,
  CircleDollarSign,
  ClipboardCheck,
  Compass,
  GitFork,
  Handshake,
  House,
  Mail,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

const repoUrl = "https://github.com/joe-josue/AgentBNB";
const pricingHarnessUrl = "https://github.com/joe-josue/agentbnb-pricing-harness";
const contactUrl =
  "mailto:mail@joejosue.com?subject=AgentBNB%20implementation%20advisory";

const operatingLoop = [
  {
    step: "01",
    title: "Capture the request",
    body: "Inquiries, dates, headcount, source, guest notes, and pricing context land in one working record.",
    icon: CalendarCheck,
  },
  {
    step: "02",
    title: "Recommend with boundaries",
    body: "The agent checks house rules, availability, property constraints, and fit before recommending a next move.",
    icon: ShieldCheck,
  },
  {
    step: "03",
    title: "Move through approvals",
    body: "Owners keep control over booking decisions, rate changes, exceptions, refunds, and guest commitments.",
    icon: Workflow,
  },
  {
    step: "04",
    title: "Hand off the stay",
    body: "Staff get clear notes they can actually use: arrival context, guest preferences, prep notes, and reminders.",
    icon: ClipboardCheck,
  },
];

const stackRooms = [
  {
    kicker: "Agent",
    title: "A property-aware operator, not a chatbot.",
    body: "Gideon-style workflows for guest communication, recommendation prep, and controlled booking progression.",
    image: "/screenshots/agent-recommendation.jpg",
    icon: Sparkles,
  },
  {
    kicker: "Truth",
    title: "A source of record the agent can inspect.",
    body: "Markdown property facts, limitations, rates, scripts, operating notes, and open questions.",
    image: "/screenshots/agentbnb-system-of-record.png",
    icon: BookOpenCheck,
  },
  {
    kicker: "Site",
    title: "Direct booking plus an owner cockpit.",
    body: "A public property page, inquiry flow, dashboard, Google Sheets records, Resend email, and review loop.",
    image: "/screenshots/white-label-site.jpg",
    icon: House,
  },
  {
    kicker: "Harness",
    title: "Focused lanes for pricing and operations.",
    body: "Market scans and operating recommendations become reviewable work instead of scattered guesses.",
    image: "/screenshots/agentbnb-market-pricing-harness.png",
    icon: CircleDollarSign,
  },
];

const portfolioSignals = [
  "Standardized guest intake across properties",
  "Owner approval rules per property or portfolio",
  "Staff handoff notes that travel cleanly to caretakers",
  "AEO-readable property facts for humans and agents",
  "Pricing and listing parity checks across channels",
  "A direct-booking surface that does not hide the operator",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "AgentBNB",
      url: "https://agent-bnb.com",
      description:
        "AgentBNB presents a white-label AI hospitality operations system for short-stay rental owners and property managers.",
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
        "AgentBNB is a white-label hospitality operations stack for Airbnb-like properties with an AI agent, owner approval loop, direct booking site, property system of record, and staff handoff workflow.",
      license: "https://github.com/joe-josue/AgentBNB/blob/master/LICENSE",
    },
    {
      "@type": "ProfessionalService",
      name: "AgentBNB implementation advisory",
      url: "https://agent-bnb.com",
      email: "mail@joejosue.com",
      areaServed: "Worldwide",
      serviceType:
        "Paid implementation advisory and property fitness checks for AI-assisted hospitality operations systems.",
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
            text: "AgentBNB is a white-label hospitality operations stack for Airbnb-like properties. It combines an AI agent, direct booking site, owner dashboard, property system of record, approval loop, and staff handoff workflow.",
          },
        },
        {
          "@type": "Question",
          name: "Who is AgentBNB for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AgentBNB is for independent short-stay property owners and professional property managers who want a clearer operating system for inquiries, approvals, staff handoffs, pricing context, and guest follow-up.",
          },
        },
        {
          "@type": "Question",
          name: "Is AgentBNB open source?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The implementation starter is open source on GitHub. The public site leads with the operating value first, then points technical visitors to the repo and paid advisory path.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <main className="creative-site">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="site-nav">
        <a className="brand-chip" href="#top" aria-label="AgentBNB home">
          <Image
            src="/brand/agentbnb-icon.png"
            alt=""
            width={44}
            height={44}
            priority
          />
          <span>AgentBNB</span>
        </a>
        <nav aria-label="Primary">
          <a href="#loop">Loop</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#implementation">Build</a>
        </nav>
      </header>

      <section className="hero-stage fullscreen" id="top" aria-labelledby="hero-title">
        <div className="hero-backplate" aria-hidden="true">
          <Image
            src="/screenshots/white-label-site.jpg"
            alt=""
            fill
            sizes="100vw"
            priority
          />
        </div>

        <div className="hero-field">
          <p className="vertical-note">Born from Balay Pansol / designed for repeatable stays</p>
          <div className="hero-copy">
            <p className="eyebrow">AI hospitality operations</p>
            <h1 id="hero-title" aria-label="An operator for every property.">
              <span>An operator</span>
              <span>for every</span>
              <span>property.</span>
            </h1>
            <p className="hero-definition">
              AgentBNB gives short-stay rentals a property-aware operating system
              for inquiries, approvals, staff handoffs, direct booking, pricing
              context, and AI-assisted decisions grounded in your source of truth.
            </p>
            <div className="hero-actions">
              <a className="magnetic-link primary" href="#loop">
                See the operating loop
                <ChevronRight aria-hidden="true" size={18} />
              </a>
              <a className="magnetic-link secondary" href={contactUrl}>
                Ask for a fit check
                <Mail aria-hidden="true" size={18} />
              </a>
            </div>
          </div>

          <div className="hero-collage" aria-label="AgentBNB visual system">
            <figure className="collage-card recommendation">
              <Image
                src="/screenshots/agent-recommendation.jpg"
                alt="AgentBNB recommendation workflow showing owner approval"
                fill
                sizes="(max-width: 760px) 100vw, 52vw"
                priority
              />
              <figcaption>Owner approval, not invisible automation.</figcaption>
            </figure>
            <figure className="collage-card sor">
              <Image
                src="/screenshots/agentbnb-system-of-record.png"
                alt="AgentBNB system of record screenshot"
                fill
                sizes="(max-width: 760px) 72vw, 34vw"
              />
              <figcaption>Property truth the agent can inspect.</figcaption>
            </figure>
            <div className="system-ticket">
              <span>Property OS</span>
              <strong>Single villa to managed portfolio</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="AgentBNB value signals">
        <span>Guest inquiries</span>
        <span>Owner approvals</span>
        <span>Caretaker handoffs</span>
        <span>Pricing context</span>
        <span>Direct booking</span>
        <span>Portfolio memory</span>
      </section>

      <section className="loop-section fullscreen" id="loop" aria-labelledby="loop-title">
        <div className="section-index">01 / Operating loop</div>
        <div className="loop-title">
          <p className="eyebrow">What it actually does</p>
          <h2 id="loop-title">A stay moves through a system, not a thread.</h2>
        </div>
        <div className="loop-cards">
          {operatingLoop.map((item) => {
            const Icon = item.icon;

            return (
              <article className="loop-card" key={item.title}>
                <div>
                  <span>{item.step}</span>
                  <Icon aria-hidden="true" size={20} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            );
          })}
        </div>
        <figure className="loop-image">
          <Image
            src="/screenshots/caretaker-handoff.jpg"
            alt="Caretaker handoff workflow in AgentBNB"
            fill
            sizes="100vw"
          />
          <figcaption>Staff handoff is treated as product surface, not an afterthought.</figcaption>
        </figure>
      </section>

      <section className="portfolio-section" id="portfolio" aria-labelledby="portfolio-title">
        <div className="portfolio-marquee" aria-hidden="true">
          <span>One property</span>
          <span>Many doors</span>
          <span>Same operating truth</span>
        </div>
        <div className="portfolio-layout">
          <div className="portfolio-copy">
            <p className="eyebrow">For serious operators</p>
            <h2 id="portfolio-title">Built for the owner with one house, credible for managers with many.</h2>
            <p>
              A professional property manager does not need another chat window.
              They need repeatable intake, reviewable decisions, property-specific
              rules, staff-ready handoffs, and a way for every listing to speak
              consistently across direct booking, OTA channels, and AI agents.
            </p>
          </div>
          <div className="signal-board">
            {portfolioSignals.map((signal) => (
              <div className="signal-row" key={signal}>
                <Compass aria-hidden="true" size={16} />
                <span>{signal}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rooms-section" aria-labelledby="rooms-title">
        <div className="rooms-heading">
          <p className="eyebrow">The rooms inside the system</p>
          <h2 id="rooms-title">Each layer has a job. Together they make the property legible.</h2>
        </div>
        <div className="rooms-track">
          {stackRooms.map((room) => {
            const Icon = room.icon;

            return (
              <article className="room-card" key={room.title}>
                <div className="room-image">
                  <Image
                    src={room.image}
                    alt={`${room.kicker} layer screenshot`}
                    fill
                    sizes="(max-width: 1180px) 100vw, 25vw"
                  />
                </div>
                <div className="room-copy">
                  <span>{room.kicker}</span>
                  <Icon aria-hidden="true" size={22} />
                  <h3>{room.title}</h3>
                  <p>{room.body}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="implementation-section fullscreen" id="implementation" aria-labelledby="implementation-title">
        <div className="implementation-image" aria-hidden="true">
          <Image
            src="/screenshots/agentbnb-market-pricing-harness.png"
            alt=""
            fill
            sizes="100vw"
          />
        </div>
        <div className="implementation-panel">
          <p className="eyebrow">Open implementation, paid judgment</p>
          <h2 id="implementation-title">
            Once the value clicks, the implementation is open.
          </h2>
          <p>
            The .com explains the operating promise first. The repo is there
            for builders who want to inspect the stack, fork the starter, and
            support the project. For operators who want fit, scoping, or rollout
            judgment, advisory is the paid path.
          </p>
          <div className="implementation-actions">
            <a className="magnetic-link primary" href={repoUrl} target="_blank" rel="noreferrer">
              Fork or star the repo
              <GitFork aria-hidden="true" size={18} />
            </a>
            <a className="magnetic-link secondary" href={contactUrl}>
              Inquire for advisory
              <Handshake aria-hidden="true" size={18} />
            </a>
          </div>
          <a className="quiet-link" href={pricingHarnessUrl} target="_blank" rel="noreferrer">
            View the market pricing harness
            <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        </div>
        <div className="implementation-meta">
          <span>Open-source starter</span>
          <span>Implementation advisory</span>
          <span>Property manager ready</span>
        </div>
      </section>
    </main>
  );
}
