# AgentBNB Landing Site

Public landing page for `Agent-BNB.com`.

This site exists to make AgentBNB discoverable as an AI hospitality operations stack, point operators and developers to the OSS repo, and convert serious property owners into implementation consulting conversations.

## Source Context

- OSS repo: `/Users/joejosue/AhensyaHQ/projects/AgentBNB`
- Reference implementation: `/Users/joejosue/AhensyaHQ/projects/Balay Pansol Site`
- GitHub: `https://github.com/joe-josue/AgentBNB`
- Domain: `https://agent-bnb.com`
- Contact: `mail@joejosue.com`

## Positioning

AgentBNB is a white-label hospitality operations stack for Airbnb-like properties with an AI agent. It is extracted from the real Balay Pansol and Gideon workflow, including a direct booking site, admin dashboard, property system of record, owner approval loop, staff handoff notes, and post-stay follow-up.

This site should avoid speculative SaaS language. The strongest claim is that AgentBNB is a practical replication starter grounded in a working implementation.

The page is intentionally compact: the desktop composition should communicate the core message, current stack, and three paths in one viewport, while mobile can scroll naturally.

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run lint
npm run build
```

## Search/AEO Surfaces

- `src/app/layout.tsx` owns metadata, canonical URL, Open Graph, Twitter card, and icons.
- `src/app/page.tsx` includes the page content, path cards, feature showcase, and JSON-LD.
- `src/app/robots.ts` and `src/app/sitemap.ts` expose crawl instructions.
- Visual proof assets are copied from the OSS repo into `public/screenshots/`.

## Deployment Notes

Deploy as a standalone Next.js app. The intended production hostname is `agent-bnb.com`; configure `Agent-BNB.com` and `www.Agent-BNB.com` at the host/DNS layer.
