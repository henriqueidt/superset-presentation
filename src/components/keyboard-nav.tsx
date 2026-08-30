"use client";

import { useRouter, useSelectedLayoutSegment } from "next/navigation";
import { useEffect } from "react";
import { getNeighbours } from "@/content/topics";

/** Left/right arrow keys move between topics, like a slide deck. */
export function KeyboardNav() {
  const router = useRouter();
  const segment = useSelectedLayoutSegment();

  useEffect(() => {
    if (!segment) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.metaKey || event.ctrlKey || event.altKey) return;

      const target = event.target as HTMLElement | null;
      if (target?.closest("input, textarea, select, [contenteditable]")) return;

      const { previous, next } = getNeighbours(segment as string);
      if (event.key === "ArrowRight" && next) router.push(`/${next.slug}`);
      if (event.key === "ArrowLeft" && previous) router.push(`/${previous.slug}`);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [router, segment]);

  return null;
}
