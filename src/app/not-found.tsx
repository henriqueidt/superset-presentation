import Link from "next/link";
import { firstTopic } from "@/content/topics";

export default function NotFound() {
  return (
    <div className="flex flex-col items-start gap-4">
      <h1 className="text-2xl font-semibold tracking-tight">Nothing here</h1>
      <p className="text-muted">That topic is not part of the deck.</p>
      <Link href={`/${firstTopic.slug}`} className="text-accent hover:underline">
        Back to the start
      </Link>
    </div>
  );
}
