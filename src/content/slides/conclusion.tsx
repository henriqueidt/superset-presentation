import { Bullet, Bullets } from "@/components/slide";

export default function Conclusion() {
  return (
    <div className="flex flex-col gap-10">
      <Bullets>
        <Bullet>Great tool for parallel work</Bullet>
        <Bullet>Good for working with multiple models</Bullet>
        <Bullet>Great for quick visibility into agents&apos; work</Bullet>
        <Bullet>Lots of bugs</Bullet>
        <Bullet>
          <a
            href="https://github.com/superset-sh/superset/pulls?q=is%3Apr+is%3Aclosed"
            target="_blank"
            rel="noreferrer"
            className="text-accent underline underline-offset-4"
          >
            Sloppy AI code
          </a>
        </Bullet>
      </Bullets>

      <p className="font-mono text-lg text-muted">superset.sh</p>
    </div>
  );
}
