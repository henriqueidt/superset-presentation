# superset.sh presentation

A Next.js app that holds the whole presentation. One tab — and one route — per topic.

## Develop

```bash
npm install
npm run dev
```

Then open http://localhost:3000 (it redirects to the first topic).

## Structure

- `src/content/topics.ts` — the outline. Add, remove or reorder entries here and the
  tabs, routes and prev/next navigation follow.
- `src/app/[topic]/page.tsx` — renders a topic. Presentation content goes in the
  placeholder section.
- `src/components/tab-bar.tsx` — the topic tabs.
- `src/components/keyboard-nav.tsx` — left/right arrow keys move between topics.
