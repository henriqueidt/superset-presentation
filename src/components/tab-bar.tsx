"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { topics } from "@/content/topics";

export function TabBar() {
  const segment = useSelectedLayoutSegment();

  return (
    <nav aria-label="Topics" className="-mx-1 flex flex-1 gap-1 overflow-x-auto">
      {topics.map((topic) => {
        const active = topic.slug === segment;
        return (
          <Link
            key={topic.slug}
            href={`/${topic.slug}`}
            aria-current={active ? "page" : undefined}
            className={`whitespace-nowrap rounded-md px-3 py-1.5 text-sm transition-colors ${
              active
                ? "bg-surface text-foreground shadow-sm ring-1 ring-border"
                : "text-muted hover:text-foreground"
            }`}
          >
            {topic.title}
          </Link>
        );
      })}
    </nav>
  );
}
