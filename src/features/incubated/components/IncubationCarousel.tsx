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
} from "./IncubationCarouselArrowButtons";
import { useDotButton } from "./IncubationCarouselDotButton";

import "./IncubationCarousel.css";
import { motion } from "framer-motion";
import { FaRegSquareFull, FaSquareFull } from "react-icons/fa6";
import Image from "next/image";

const TWEEN_FACTOR_BASE = 0.84;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

interface Incubations {
  _id: string;
  slug: string;
  title: string;
  imageUrl: string;
  description: string;
  logo: string;
  link: string;
}

type PropType = {
  incubations: Incubations[];
  options?: EmblaOptionsType;
};

export default function IncubationCarousel({ incubations, options }: PropType) {
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
  }, [emblaApi, setTweenFactor, tweenOpacity]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {incubations.map((incubation, index) => (
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
                  src={incubation.imageUrl}
                  priority
                  alt="Your alt text"
                />
              </motion.div>
              {selectedIndex === index && (
                <motion.div
                  initial={{ y: 200 }}
                  animate={{ y: 0 }}
                  transition={{ ease: "easeInOut" }}
                  className="absolute bottom-0 left-0 right-0 z-10"
                >
                  <motion.div
                    whileHover="onHover"
                    className="relative flex cursor-pointer items-center justify-between overflow-hidden border-y border-solid border-white bg-black bg-opacity-90 px-1 py-1"
                  >
                    <motion.div
                      className="absolute inset-0 bg-main"
                      initial={{ scaleY: 0 }}
                      variants={{ onHover: { scaleY: 1 } }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="relative z-10 flex flex-col items-center gap-1 text-white">
                      <FaRegSquareFull style={{ fontSize: 8 }} />
                      <FaSquareFull style={{ fontSize: 8 }} />
                      <div className="h-6 border-l border-solid border-white" />
                    </div>
                    <div className="relative z-10 flex items-center justify-center gap-2">
                      <a
                        key={index}
                        href={incubation.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold uppercase text-white"
                      >
                        View More
                      </a>
                    </div>
                    <div className="relative z-10 flex flex-col items-center gap-1 text-white">
                      <div className="h-6 border-l border-solid border-white" />
                      <FaRegSquareFull style={{ fontSize: 8 }} />
                      <FaSquareFull style={{ fontSize: 8 }} />
                    </div>
                  </motion.div>
                  <div className="space-y-4 bg-black px-5 py-8 opacity-80">
                    <div className="flex justify-center">
                      <h1 className="cursor-pointer text-center text-2xl font-bold uppercase text-white transition-colors duration-500 hover:text-main">
                        {incubation.title}
                      </h1>
                    </div>
                    <div className="flex justify-center">
                      <p className="cursor-grab select-none text-center font-semibold text-white/80">
                        {incubation.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
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
