import { SwapRow } from "@/components/slide";

export default function TheShift() {
  return (
    <ul className="flex flex-col">
      <SwapRow before="One agent at a time" after="Many, in parallel" />
      <SwapRow before="Stash, switch, review" after="Open the workspace" />
      <SwapRow before="Stops at the code" after="Opens the browser" />
      <SwapRow before="Tabs and terminals" after="One place to look" />
    </ul>
  );
}
