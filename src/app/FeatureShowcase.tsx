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
    image: "/screenshots/agent-recommendation.jpg",
    icon: Sparkles,
  },
  {
    id: "sor",
    title: "Property SoR",
    body: "Markdown operating truth for amenities, rules, rates, scripts, limitations, and agent context.",
    image: "/screenshots/agentbnb-system-of-record.png",
    icon: BookOpenCheck,
  },
  {
    id: "site",
    title: "White-label site",
    body: "Direct booking page, owner dashboard, spreadsheet records, Resend email, and guest review loop.",
    image: "/screenshots/white-label-site.jpg",
    icon: ClipboardCheck,
  },
  {
    id: "harnesses",
    title: "Ops harnesses",
    body: "Growing harness tools for the agent to continuously optimize and keep your property competitive.",
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
    <>
      <div
        className="image-study feature-stage"
        key={activeFeature.id}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <Image
          src={activeFeature.image}
          alt={`${activeFeature.title} screenshot from AgentBNB`}
          width={1280}
          height={720}
          priority
        />
        <div className="feature-stage-copy">
          <ActiveIcon aria-hidden="true" size={17} />
          <h2>{activeFeature.title}</h2>
          <p>{activeFeature.body}</p>
        </div>
      </div>
      <div className="feature-grid" aria-label="Select a featured capability">
        {stackFeatures.map((feature, index) => {
          const Icon = feature.icon;
          const isActive = activeIndex === index;

          return (
            <button
              className="feature-tile"
              data-active={isActive}
              key={feature.title}
              type="button"
              onClick={() => {
                setActiveIndex(index);
                setPaused(true);
              }}
            >
              <Image
                src={feature.image}
                alt={`${feature.title} screenshot from AgentBNB`}
                width={320}
                height={180}
              />
              <span className="feature-tile-copy">
                <Icon aria-hidden="true" size={15} />
                <strong data-copy-id={`features.${feature.id}.title`}>
                  {feature.title}
                </strong>
                <span data-copy-id={`features.${feature.id}.body`}>
                  {feature.body}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
}
