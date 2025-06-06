"use client";
import React, { useCallback, useEffect } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./TestimonialCarouselArrowButtons";

import "./TestimonialCarousel.css";
import Image from "next/image";
import profilePic from "@/../public/home-personal-assets/images/t3.jpg";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaQuoteLeft, FaRegSquareFull, FaSquareFull } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

import img from "@/../public/gt-mentors-assets/images/1.jpg";
import { motion } from "framer-motion";

import { ScrollArea } from "@/components/ui/scroll-area";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
  isAdded?: boolean;
};

const generateStars = (count: number) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars.push(
      <FaStar
        className={`text-lg text-orange-400 hover:cursor-pointer`}
        key={i}
      />,
    );
  }
  return stars;
};

export default function TestimonialCarousel({
  slides,
  isAdded,
  options,
}: PropType) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({
      playOnInit: true,
      speed: 0.5,
      stopOnMouseEnter: true,
      stopOnInteraction: false,
    }),
  ]);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const onButtonAutoplayClick = useCallback(
    (callback: () => void) => {
      const autoScroll = emblaApi?.plugins()?.autoScroll;
      if (!autoScroll) return;

      const resetOrStop =
        autoScroll.options.stopOnInteraction === false
          ? autoScroll.reset
          : autoScroll.stop;

      resetOrStop();
      callback();
      autoScroll.play();
    },
    [emblaApi],
  );

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {isAdded
            ? slides.map((slide, index) => (
                <div className="embla__slide" key={index}>
                  <div className="border-1 flex items-center gap-2 border border-solid border-white/40 bg-neutral-900 px-4 py-4">
                    <Image
                      src={profilePic}
                      alt="testimonial"
                      className="h-14 w-14 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-white">Joe Richard</h3>
                      <p className="text-white/50">Artificial Intelligence</p>
                    </div>
                  </div>
                </div>
              ))
            : slides.map((slide, index) => (
                <motion.div
                  whileHover="hover"
                  className="cursor-grab select-none"
                  key={index}
                >
                  <Card className="mx-4 w-[400px] rounded-none border border-white/30 p-5">
                    <CardHeader>
                      <CardTitle className="flex justify-between">
                        <Image
                          src={img}
                          className="border-1 h-28 w-28 border border-solid border-white/50 object-cover"
                          alt="img"
                        />
                        <motion.div
                          initial={
                            index === 0
                              ? { opacity: 1, y: 0 }
                              : { opacity: 0, y: 50 }
                          }
                          variants={{
                            hover:
                              index === 0
                                ? { opacity: 1, y: 0 }
                                : { opacity: 1, y: 0 },
                          }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                          <FaQuoteLeft className="text-6xl" />
                        </motion.div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <span className="flex">{generateStars(5)}</span>
                      <h1 className="text-2xl font-semibold uppercase lg:text-3xl">
                        Yasuko Yuina
                      </h1>
                      <div className="flex items-center gap-2">
                        <p className="font-medium uppercase text-white/80">
                          Team Leader
                        </p>
                        <div className="flex items-center gap-1 text-white text-opacity-50">
                          <hr className="w-6 border border-solid border-white border-opacity-50 sm:w-10" />
                          <FaRegSquareFull className="text-xs-sm" />
                          <FaSquareFull className="text-xs-sm" />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t border-white/30">
                      <ScrollArea className="h-[100px] w-[350px] lg:h-[200px]">
                        <p className="font-semibold uppercase lg:text-lg">
                          Ornare arcu dui vivamus arcu felis bibendum ut
                          tristique. Tristique senectus et netus et. Odio ut sem
                          nulla pharetra. Pellentesque massa placerat. Lorem
                          ipsum dolor sit amet consectetur adipisicing elit.
                          Officiis, aut vero dignissimos amet voluptatem
                          adipisci optio harum, consequuntur, quisquam molestiae
                          maxime quos cumque quo delectus nostrum veritatis
                          voluptas odit? Ab.s
                        </p>
                      </ScrollArea>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton
            onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={() => onButtonAutoplayClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
          />
        </div>
      </div>
    </div>
  );
}
