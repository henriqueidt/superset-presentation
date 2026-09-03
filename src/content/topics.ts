/**
 * The presentation outline. Every topic here becomes a tab and a route
 * at /<slug>. Reorder this array to reorder the deck.
 */
export type Topic = {
  slug: string;
  /** Tab label. Keep it short. */
  title: string;
  /** One line shown under the title on the topic page. */
  summary: string;
};

export const topics: Topic[] = [
  {
    slug: "problem",
    title: "The problem",
    summary: "One repo, one checkout, one agent at a time.",
  },
  {
    slug: "what-it-is",
    title: "What it is",
    summary: "A workbench for coding agents.",
  },
  {
    slug: "the-shift",
    title: "The shift",
    summary: "What changes once every agent has its own workspace.",
  },
  {
    slug: "workspaces",
    title: "Workspaces",
    summary: "Isolated git worktrees that boot ready to code.",
  },
  {
    slug: "code-review",
    title: "Code & PRs",
    summary: "Reviewing agent work in the editor and shipping pull requests.",
  },
  {
    slug: "other-features",
    title: "Other features",
    summary: "The rest of what superset.sh does.",
  },
  {
    slug: "conclusion",
    title: "Conclusion",
    summary: "Where this leaves you.",
  },
];

export const firstTopic = topics[0];

export function getTopic(slug: string): Topic | undefined {
  return topics.find((topic) => topic.slug === slug);
}

export function getTopicIndex(slug: string): number {
  return topics.findIndex((topic) => topic.slug === slug);
}

export function getNeighbours(slug: string) {
  const index = getTopicIndex(slug);
  return {
    previous: index > 0 ? topics[index - 1] : undefined,
    next: index >= 0 && index < topics.length - 1 ? topics[index + 1] : undefined,
  };
}
