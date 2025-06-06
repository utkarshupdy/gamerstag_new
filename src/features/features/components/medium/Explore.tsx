"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import React from "react";
import { staggerContainer } from "../small/utils";
import { TitleText, TypingText } from "../small/TitleText";
import exploreWorlds from "@/features/features/data/explore.json";
import ExploreCard from "../small/ExploreCard";

export default function Explore() {
  const [active, setActive] = useState("world-2");

  return (
    <section className="paddings" id="explore">
      <motion.div
        variants={staggerContainer(0.25, 0.25)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="innerWidth mx-auto flex flex-col"
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText
          title={
            <>
              Choose the world you want <br className="hidden md:block" /> to
              explore
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex min-h-[70wh] flex-col gap-5 lg:flex-row">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.title}
              {...world}
              active={active}
              index={index}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
