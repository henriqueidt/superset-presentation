import Link from "next/link";
import { notFound } from "next/navigation";
import { getNeighbours, getTopic, getTopicIndex, topics } from "@/content/topics";

export function generateStaticParams() {
  return topics.map((topic) => ({ topic: topic.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[topic]">) {
  const { topic: slug } = await params;
  const topic = getTopic(slug);
  if (!topic) return {};
  return { title: `${topic.title} — superset.sh` };
}

export default async function TopicPage({ params }: PageProps<"/[topic]">) {
  const { topic: slug } = await params;
  const topic = getTopic(slug);
  if (!topic) notFound();

  const { previous, next } = getNeighbours(slug);

  return (
    <article className="flex min-h-full flex-col gap-10">
      <header className="flex flex-col gap-2">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          {String(getTopicIndex(slug) + 1).padStart(2, "0")} / {String(topics.length).padStart(2, "0")}
        </p>
        <h1 className="text-4xl font-semibold tracking-tight">{topic.title}</h1>
        <p className="text-lg text-muted">{topic.summary}</p>
      </header>

      {/* Presentation content for this topic goes here. */}
      <section className="flex flex-1 items-center justify-center rounded-xl border border-dashed border-border p-16 text-sm text-muted">
        Content for “{topic.title}” goes here.
      </section>

      <nav className="flex items-center justify-between border-t border-border pt-6 text-sm">
        {previous ? (
          <Link href={`/${previous.slug}`} className="text-muted hover:text-foreground">
            ← {previous.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/${next.slug}`} className="text-muted hover:text-foreground">
            {next.title} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
