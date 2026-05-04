"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  BookOpenCheck,
  ClipboardCheck,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const stackFeatures = [
  {
    id: "agent",
    title: "AI hospitality agent",
    body: "Inquiry triage, guest messaging, owner recommendations, and controlled booking progression.",
    reference: "Reference: agent thread with an owner approval recommendation.",
    image: "/screenshots/agent-recommendation.jpg",
    icon: Sparkles,
  },
  {
    id: "sor",
    title: "Property SoR",
    body: "Markdown operating truth for amenities, rules, rates, scripts, limitations, and agent context.",
    reference: "Reference: human-readable property truth used by the agent.",
    image: "/screenshots/agentbnb-system-of-record.png",
    icon: BookOpenCheck,
  },
  {
    id: "site",
    title: "White-label site",
    body: "Direct booking page, owner dashboard, spreadsheet records, Resend email, and guest review loop.",
    reference: "Reference: direct booking and admin surface from the running stack.",
    image: "/screenshots/white-label-site.jpg",
    icon: ClipboardCheck,
  },
  {
    id: "harnesses",
    title: "Ops harnesses",
    body: "Growing harness tools for the agent to continuously optimize and keep your property competitive.",
    reference: "Reference: pricing and operations harness for competitive tuning.",
    image: "/screenshots/agentbnb-market-pricing-harness.png",
    icon: ShieldCheck,
  },
];

export function FeatureShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const activeFeature = stackFeatures[activeIndex];
  const ActiveIcon = activeFeature.icon;

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % stackFeatures.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, [paused]);

  return (
    <section className="stack-module" id="stack" aria-label="Current AgentBNB stack">
      <div className="stack-module-head">
        <span data-copy-id="stack.kicker">FEATURED CAPABILITIES</span>
        <span data-copy-id="stack.context">--</span>
      </div>

      <div className="stack-flow" aria-label="AgentBNB operating flow">
        <span>Guest</span>
        <span>Agent</span>
        <span>Owner</span>
        <span>Staff</span>
        <span>Records</span>
      </div>

      <div
        className="feature-showcase"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <figure className="reference-plate" key={activeFeature.id}>
          <div className="reference-image">
            <Image
              src={activeFeature.image}
              alt={`${activeFeature.title} screenshot from AgentBNB`}
              width={1280}
              height={720}
              priority
            />
          </div>
          <figcaption>
            <ActiveIcon aria-hidden="true" size={16} />
            <span data-copy-id={`features.${activeFeature.id}.reference`}>
              {activeFeature.reference}
            </span>
          </figcaption>
        </figure>

        <div className="feature-list" aria-label="Select a featured capability">
          {stackFeatures.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = activeIndex === index;

            return (
              <button
                className="feature-row"
                data-active={isActive}
                key={feature.title}
                type="button"
                aria-pressed={isActive}
                onClick={() => {
                  setActiveIndex(index);
                  setPaused(true);
                }}
              >
                <Icon aria-hidden="true" size={15} />
                <span>
                  <strong data-copy-id={`features.${feature.id}.title`}>
                    {feature.title}
                  </strong>
                  <span data-copy-id={`features.${feature.id}.body`}>
                    {feature.body}
                  </span>
                </span>
                <span className="feature-progress" aria-hidden="true" />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
