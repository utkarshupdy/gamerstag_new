import { InfiniteMovingTexts } from "@/components/ui/infinite-moving-texts";
import { texts1, texts2 } from "../data/marquess.json";

export default function Marquess() {
  return (
    <div className="relative h-[500px] overflow-hidden">
      <div className="absolute left-[-50px] right-[-50px] top-20 z-10 -rotate-6 cursor-pointer bg-neutral-950">
        <InfiniteMovingTexts
          showIcon={true}
          items={texts1}
          direction="left"
          speed="slow"
        />
      </div>
      <div className="absolute left-[-50px] right-[-50px] top-[200px] rotate-2 cursor-pointer overflow-hidden bg-neutral-950">
        <InfiniteMovingTexts
          items={texts2}
          direction="right"
          speed="slow"
          useBorderedText={true}
        />
      </div>
    </div>
  );
}
