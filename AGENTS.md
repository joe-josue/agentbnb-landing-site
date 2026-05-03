<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AgentBNB Landing Site

Purpose: public landing page for `Agent-BNB.com`, built for SEO/AEO/GEO visibility, GitHub repo discovery, and paid implementation advisory conversion.

Source context:
- OSS repo: `/Users/joejosue/AhensyaHQ/projects/AgentBNB`
- Reference implementation: `/Users/joejosue/AhensyaHQ/projects/Balay Pansol Site`
- Canonical public repo URL: `https://github.com/joe-josue/AgentBNB`
- Contact CTA: `mail@joejosue.com`

Content rules:
- Ground copy in the OSS repo and Balay Pansol/Gideon reference implementation.
- Do not publish private Balay Pansol guest data, staff details, credentials, sheet IDs, or family-specific operations.
- Frame AgentBNB as an OSS extraction and replication starter, not as a fully automated production SaaS.
- Keep the desktop page compact enough to work as a one-screen architecture/design-agency composition; mobile may scroll naturally.
- Maintain the three user paths: implement the OSS stack, inquire for paid advisory, and tour the current stack.
- Keep owner approval, staff handoff, property SoR, Google Sheets, Resend, Next.js, Vercel, and OpenClaw-style agent runtime visible where relevant.
- Preserve the soft support/consulting CTA unless Joe changes it: "Interested building something similar for yourself or business, I do selected 0-1 product and implementation consulting."

Implementation rules:
- Use Next.js App Router.
- Keep this project deployable separately from the OSS repo.
- Maintain search surfaces: metadata, canonical URL, `robots.ts`, `sitemap.ts`, and JSON-LD.
- Prefer source-backed page copy over speculative roadmap claims.
