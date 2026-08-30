import { redirect } from "next/navigation";
import { firstTopic } from "@/content/topics";

export default function Home() {
  redirect(`/${firstTopic.slug}`);
}
