import type { ReactNode } from "react";

/**
 * Presentational building blocks shared by every topic's content.
 * These are speaker support, not prose: short lines, large type.
 */

export function Section({
  title,
  kicker,
  children,
}: {
  title: string;
  kicker?: string;
  children: ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        {kicker ? (
          <p className="font-mono text-xs uppercase tracking-widest text-muted">
            {kicker}
          </p>
        ) : null}
        <h2 className="text-2xl font-medium tracking-tight">{title}</h2>
      </div>
      {children}
    </section>
  );
}

export function Bullets({ children }: { children: ReactNode }) {
  return (
    <ul className="flex flex-col gap-3 text-xl leading-snug">{children}</ul>
  );
}

export function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3">
      <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
      <span>{children}</span>
    </li>
  );
}

/** A "before → after" line. Left is today's pain, right is the answer. */
export function SwapRow({
  before,
  after,
}: {
  before: ReactNode;
  after: ReactNode;
}) {
  return (
    <li className="grid items-baseline gap-1 border-b border-border py-3 last:border-b-0 sm:grid-cols-[1fr_auto_1fr] sm:gap-4">
      <span className="text-lg text-muted line-through decoration-border">
        {before}
      </span>
      <span aria-hidden className="hidden font-mono text-sm text-muted sm:block">
        →
      </span>
      <span className="text-lg">{after}</span>
    </li>
  );
}

export function Callout({ children }: { children: ReactNode }) {
  return (
    <p className="border-l-2 border-accent pl-5 text-2xl leading-snug text-balance">
      {children}
    </p>
  );
}

/**
 * A screen recording. Files live in `public/videos` and are referenced by
 * name; `width`/`height` are the source pixel dimensions so the box reserves
 * the right space before the video loads.
 */
export function Video({
  src,
  width,
  height,
  label,
  caption,
}: {
  src: string;
  width: number;
  height: number;
  label: string;
  /** Shown above the video. Use it when a topic plays more than one. */
  caption?: string;
}) {
  return (
    <figure className="flex flex-col gap-3">
      {caption ? (
        <figcaption className="font-mono text-xs uppercase tracking-widest text-muted">
          {caption}
        </figcaption>
      ) : null}
      <video
        controls
        playsInline
        preload="metadata"
        width={width}
        height={height}
        aria-label={label}
        className="w-full rounded-xl border border-border bg-surface"
      >
        <source src={src} type="video/mp4" />
      </video>
    </figure>
  );
}
