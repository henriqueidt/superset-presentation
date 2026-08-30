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
    slug: "intro",
    title: "Intro",
    summary: "What superset.sh is and the problem it solves.",
  },
  {
    slug: "workspaces",
    title: "Workspaces",
    summary: "Isolated git worktrees that boot ready to code.",
  },
  {
    slug: "agents",
    title: "Agents",
    summary: "Running coding agents in a workspace.",
  },
  {
    slug: "orchestration",
    title: "Orchestration",
    summary: "Fanning work out across parallel agents.",
  },
  {
    slug: "automations",
    title: "Automations",
    summary: "Recurring agents on a schedule.",
  },
  {
    slug: "integrations",
    title: "Integrations",
    summary: "Browser, desktop, MCP and the CLI.",
  },
  {
    slug: "code-review",
    title: "Code & PRs",
    summary: "Reviewing agent work in the editor and shipping pull requests.",
  },
  {
    slug: "wrap-up",
    title: "Wrap-up",
    summary: "Takeaways and where to go next.",
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
