import { Video } from "@/components/slide";

export default function CodeReview() {
  return (
    <div className="flex flex-col gap-12">
      <Video
        src="/videos/pr-code-review.mp4"
        width={3360}
        height={1906}
        caption="Reviewing the diff"
        label="Reviewing an agent's changes in the editor"
      />
      <Video
        src="/videos/continue-pr.mp4"
        width={3360}
        height={1906}
        caption="Picking the work back up"
        label="Continuing work on an existing pull request"
      />
    </div>
  );
}
