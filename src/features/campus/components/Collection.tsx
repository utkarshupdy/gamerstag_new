"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { InfiniteMovingCards } from "@/components/ui/inifinite-moving-cards";

import { motion } from "framer-motion";
import testimonials from "../data/testimonials.json";

export default function Collection() {
  return (
    <div className="mx-auto my-36 w-[1280px]">
      <div className="flex">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ amount: 1, once: true, margin: "0px 0px -5% 0px" }}
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
          className="w-[120%] space-y-2"
        >
          <span className="font-bold uppercase text-blue-500">Collection</span>
          <h1 className="text-5xl font-bold uppercase text-white">
            Bored apes NFT items
          </h1>
          <p className="text-white text-opacity-85">
            8888 Unique Undercover Creatues Start Minting
          </p>
        </motion.div>

        <div className="dark:bg-grid-white/[0.05] relative flex flex-col items-center justify-center overflow-hidden rounded-md bg-black antialiased">
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="dark:bg-grid-white/[0.05] relative flex flex-col items-center justify-center overflow-hidden rounded-md bg-black antialiased">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <motion.div
          initial={{ x: 100, scale: 0.5, opacity: 0 }}
          whileInView={{ x: 0, scale: 1, opacity: 1 }}
          viewport={{ amount: 1, once: true, margin: "0px 0px -5% 0px" }}
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
          className="flex h-40 w-40 items-center justify-center rounded-full bg-slate-900 p-10"
        >
          <Button
            variant="secondary"
            className="relative px-10 py-6 font-bold uppercase"
          >
            View On Here
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
