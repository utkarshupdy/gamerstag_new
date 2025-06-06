import EmblaCarousel from "@/features/main-feature/components/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

export default function MainFeature() {
  const OPTIONS: EmblaOptionsType = { loop: true, align: "start" };
  const SLIDES = [
    "https://picsum.photos/1600/900?v=1",
    "https://picsum.photos/1600/900?v=2",
    "https://picsum.photos/1600/900?v=3",
    "https://picsum.photos/1600/900?v=4",
    "https://picsum.photos/1600/900?v=5",
  ];

  return <EmblaCarousel slides={SLIDES} options={OPTIONS} />;
}
