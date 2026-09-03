import { Bullet, Bullets, Callout } from "@/components/slide";

export default function Problem() {
  return (
    <div className="flex flex-col gap-10">
      <Callout>
        Coding agents got good. The thing around them didn&apos;t.
      </Callout>

      <Bullets>
        <Bullet>Two agents, one working tree — they collide</Bullet>
        <Bullet>Reviewing means stashing and switching branches</Bullet>
        <Bullet>No shared view of what finished or stalled</Bullet>
      </Bullets>
    </div>
  );
}
