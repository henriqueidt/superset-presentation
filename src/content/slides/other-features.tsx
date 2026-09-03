import { Bullet, Bullets } from "@/components/slide";

/** Short label + one line. Everything here is a feature no earlier topic covers. */
function Feature({ name, children }: { name: string; children: string }) {
  return (
    <Bullet>
      <strong className="font-medium">{name}</strong>
      <span className="text-muted"> — {children}</span>
    </Bullet>
  );
}

export default function OtherFeatures() {
  return (
    <Bullets>
      <Feature name="Automations">recurring agents on a schedule</Feature>
      <Feature name="Tasks &amp; standups">
        what ran while you were away, and what needs you
      </Feature>
      <Feature name="MCP servers">plug in tools and data sources</Feature>
      <Feature name="Remote control">check in from your phone</Feature>
      <Feature name="In-app browser">
        test changes without leaving the app
      </Feature>
      <Feature name="CLI">script any of it</Feature>
    </Bullets>
  );
}
