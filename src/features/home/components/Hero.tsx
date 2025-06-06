"use client";
import { BottomLine } from "./HeroDesign";
import Section from "./Section";
import Button from "@/components/PrimaryButton";
import { useRef } from "react";
import curveImage from "@/../public/home3-assets/images/hero/curve.png";
import Image from "next/image";

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement | null>(null);

  return (
    <Section
      id="hero"
      className="-mt-[5.25rem] overflow-hidden pt-[12rem] text-white"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-10 mx-auto mb-[3.875rem] max-w-[62rem] text-center md:mb-20 lg:mb-[6.25rem]">
          <h1 className="mb-6 text-[2.5rem] font-semibold leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]">
            Explore the Possibilities of&nbsp;AI&nbsp;Chatting with{" "}
            <span className="relative inline-block">
              Gamers<span className="text-main">Tag</span>{" "}
              <Image
                src={curveImage}
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
          <Button>Get Started</Button>
        </div>
      </div>
      <BottomLine />
    </Section>
  );
}
