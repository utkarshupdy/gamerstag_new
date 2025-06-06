import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import { usePrevNextButtons } from "./GalleryCarouselArrowButtons";

import "./GalleryCarousel.css";

import { ImArrowUpRight, ImArrowUpLeft } from "react-icons/im";
import Image from "next/image";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

export default function GalleryCarousel({ slides, options }: PropType) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade()]);

  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <Image
                width={400}
                height={400}
                className="embla__slide__img"
                src={`https://picsum.photos/600/350?v=${index}`}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <div
            className="border-1 cursor-pointer border border-solid border-white/50 bg-black/50 p-4"
            onClick={onPrevButtonClick}
          >
            <ImArrowUpLeft className="text-4xl text-main" />
          </div>
          <div>
            <div
              className="border-1 cursor-pointer border border-solid border-white/50 bg-black/50 p-4"
              onClick={onNextButtonClick}
            >
              <ImArrowUpRight className="text-4xl text-main" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
