"use client";
import React from "react";
import Image from "next/image";
import { fadeIn, planetVariants, staggerContainer } from "../small/utils";
import { TitleText, TypingText } from "../small/TitleText";
import startingFeatures from "@/features/features/data/featureButtom.json";
import StartSteps from "../small/StartSteps";
import { motion } from "framer-motion";

export default function GetStarted() {
  return (
    <section className="paddings relative z-10">
      <motion.div
        variants={staggerContainer(0.25, 0.25)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="innerWidth mx-auto flex flex-col gap-8 lg:flex-row"
      >
        <motion.div
          variants={planetVariants("left")}
          className="flexCenter flex-1"
        >
          <Image
            src="/images/featurespage/get-started.png"
            width={1000}
            height={1000}
            alt="get-started"
            priority={true}
            className="h-[90%] w-[90%] object-contain"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex flex-[0.75] flex-col justify-center"
        >
          <TypingText title="| How Gamerstag Works" />
          <TitleText title={<>How to use this feature?</>} />
          <div className="mt-[31px] grid max-w-[370px] grid-cols-1 gap-[24px] md:grid-cols-2">
            {startingFeatures.map((feature, index) => (
              <StartSteps key={feature} number={index + 1} text={feature} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
