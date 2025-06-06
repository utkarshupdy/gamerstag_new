"use client";
import React, { useCallback, useEffect, useRef } from "react";
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./MemberCarouselArrowButtons";
import { useDotButton } from "./MemberCarouselDotButton";

import "./MemberCarousel.css";
import { motion } from "framer-motion";
import Image from "next/image";

const TWEEN_FACTOR_BASE = 0.84;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

interface Gallery {
  imageUrl: string;
}

type PropType = {
  gallery: Gallery[];
  options?: EmblaOptionsType;
};

export default function MemberCarousel({ gallery, options }: PropType) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
  const tweenFactor = useRef(0);

  const { selectedIndex } = useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenOpacity = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue =
            1 - Math.abs(diffToTarget * tweenFactor.current) * 0.7;
          const opacity = numberWithinRange(tweenValue, 0, 1).toString();
          emblaApi.slideNodes()[slideIndex].style.opacity = opacity;
        });
      });
    },
    [],
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenFactor(emblaApi);
    tweenOpacity(emblaApi);
    emblaApi
      .on("reInit", setTweenFactor)
      .on("reInit", tweenOpacity)
      .on("scroll", tweenOpacity)
      .on("slideFocus", tweenOpacity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emblaApi, tweenOpacity]);

  return (
    <div className="embla py-10">
      <h1 className="mb-4 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
        Gallery
      </h1>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {gallery.map((img, index) => (
            <motion.div
              whileHover="hover"
              className="embla__slide border-1 overflow-hidden border border-solid border-white border-opacity-30"
              key={index}
            >
              <motion.div
                initial={{ scale: 1 }}
                variants={{
                  hover: { scale: selectedIndex === index ? 1.2 : 1 },
                }}
                transition={{ ease: "easeInOut", duration: 0.4 }}
              >
                <Image
                  className="embla__slide__img"
                  width={1000}
                  height={1000}
                  src={img.imageUrl}
                  priority
                  alt="Your alt text"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  );
}
