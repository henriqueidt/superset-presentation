import { Bullet, Bullets, Callout } from "@/components/slide";

export default function WhatItIs() {
  return (
    <div className="flex flex-col gap-10">
      <Callout>
        A workspace per task, an agent inside it, everything attached.
      </Callout>

      <Bullets>
        <Bullet>Isolated git worktree, own branch</Bullet>
        <Bullet>Boots configured — deps, env, dev server</Bullet>
        <Bullet>Terminal, editor and browser attached</Bullet>
        <Bullet>Many agents at once, on any host</Bullet>
        <Bullet>Runs on a schedule, without you</Bullet>
        <Bullet>Diff review next to the agent that wrote it</Bullet>
      </Bullets>
    </div>
  );
}
