import type { ReactNode } from "react";
import CodeReview from "./code-review";
import Conclusion from "./conclusion";
import OtherFeatures from "./other-features";
import Problem from "./problem";
import TheShift from "./the-shift";
import WhatItIs from "./what-it-is";
import Workspaces from "./workspaces";

/**
 * Content for each topic, keyed by slug. Topics missing from this map fall
 * back to a placeholder on the topic page — add an entry here as you write
 * each one.
 */
const slides: Record<string, ReactNode> = {
  problem: <Problem />,
  "what-it-is": <WhatItIs />,
  "the-shift": <TheShift />,
  workspaces: <Workspaces />,
  "code-review": <CodeReview />,
  "other-features": <OtherFeatures />,
  conclusion: <Conclusion />,
};

export function getSlide(slug: string): ReactNode | undefined {
  return slides[slug];
}
