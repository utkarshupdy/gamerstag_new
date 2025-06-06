"use client";
/* eslint-disable @next/next/no-img-element */
import { useRef } from "react";
import {
  BackgroundCircles,
  BottomLine,
  Gradient,
} from "../../design/HeroDesign";
import { ScrollParallax } from "react-just-parallax";
import Button from "../small/Button";
import Generating from "../medium/Generating";
import Notification from "../small/Notification";
import heroIcons from "../../data/heroIcons.json";

import Section from "../small/Section";
import Image from "next/image";

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement | null>(null);

  return (
    <Section
      id="hero"
      className="-mt-[5.25rem] pt-[12rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 mx-auto mb-[3.875rem] max-w-[62rem] text-center md:mb-20 lg:mb-[6.25rem]">
          <h1 className="mb-6 text-[2.5rem] font-semibold leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]">
            Explore the Possibilities of&nbsp;AI&nbsp;Chatting with{" "}
            <span className="relative inline-block">
              Gamers<span className="text-main">Tag</span>{" "}
              <img
                src="/home3-assets/images/hero/curve.png"
                className="absolute left-0 top-full w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 mx-auto mb-6 max-w-3xl text-n-2 lg:mb-8">
            Unleash the power of AI within Brainmaster. Upgrade your
            productivity with Brainmaster, the open AI chat app.
          </p>
          <Button
            href="/pricing"
            white
            className={"bg-black text-main"}
            onClick={undefined}
            px={undefined}
          >
            Get Started
          </Button>
        </div>
        <div className="relative mx-auto max-w-[23rem] md:max-w-5xl xl:mb-24">
          <div className="relative z-1 overflow-hidden bg-conic-gradient p-0.5">
            <div className="relative overflow-hidden rounded-[1rem] bg-n-8">
              <div className="h-[1.4rem] overflow-hidden rounded-t-[0.9rem] bg-n-6"></div>
              <div className="aspect-[9/16] overflow-hidden rounded-b-[0.9rem]">
                <img
                  src="/home3-assets/images/hero/robot.jpg"
                  className="w-full translate-y-[8%] scale-[1.4] md:-translate-y-[10%] md:scale-[1] lg:-translate-y-[10%] lg:scale-[1.2]"
                  width={1024}
                  height={490}
                  alt="AI robot image"
                />
                <Generating className="absolute bottom-5 left-4 right-4 md:bottom-8 md:left-1/2 md:right-auto md:w-[31rem] md:-translate-x-1/2" />
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="absolute -left-[5.5rem] bottom-[7.5rem] hidden overflow-hidden rounded-2xl border border-n-1/10 bg-n-9/40 px-1 py-1 backdrop-blur xl:flex">
                    {heroIcons.heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <Image src={icon} width={100} height={100} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="absolute -right-[5.5rem] bottom-[11rem] hidden w-[18rem] xl:flex"
                    title="Code generation"
                  />
                </ScrollParallax>
              </div>
            </div>
            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 z-[-1] w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src="/home3-assets/images/hero/hero-background.jpg"
              className="w-full"
              width={1440}
              height={1800}
              alt="hero image"
            />
          </div>
          <BackgroundCircles parallaxRef={undefined} />
        </div>
      </div>
      <BottomLine />
    </Section>
  );
}
