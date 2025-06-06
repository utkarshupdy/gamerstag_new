"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../small/utils";
import { TitleText, TypingText } from "../small/TitleText";

export default function World() {
  return (
    <section className="paddings relative z-10">
      <motion.div
        variants={staggerContainer(0.25, 0.25)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="innerWidth mx-auto flex flex-col"
      >
        <TypingText title="| People on the World" textStyles="text-center" />
        <TitleText
          title={
            <>
              Track friends around you and invite them to play together in the
              same world
            </>
          }
          textStyles="text-center"
        />
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="relative mt-[68px] flex h-[550px] w-full"
        >
          <Image
            src="/images/featurespage/map.png"
            width={1000}
            height={1000}
            priority={true}
            alt="map"
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-20 right-20 h-[70px] w-[70px] rounded-full bg-[#5D6680] p-[6px]">
            <Image
              src="/images/featurespage/people-01.png"
              width={1000}
              height={1000}
              alt="people"
              className="h-full w-full"
            />
          </div>
          <div className="absolute left-20 top-10 h-[70px] w-[70px] rounded-full bg-[#5D6680] p-[6px]">
            <Image
              src="/images/featurespage/people-02.png"
              width={1000}
              height={1000}
              alt="people"
              className="h-full w-full"
            />
          </div>
          <div className="absolute left-[45%] top-1/2 h-[70px] w-[70px] rounded-full bg-[#5D6680] p-[6px]">
            <Image
              src="/images/featurespage/people-03.png"
              width={1000}
              height={1000}
              alt="people"
              className="h-full w-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
