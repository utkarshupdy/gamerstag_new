"use client";
import Image from "next/image";
import React from "react";

import brand2 from "@/../public/home-personal-assets/images/brands/b8.png";

import { motion } from "framer-motion";

export default function BestPartners() {
  const partners = [
    brand2,
    brand2,
    brand2,
    brand2,
    brand2,
    brand2,
    brand2,
    brand2,
    brand2,
    brand2,
  ];
  return (
    <div className="mx-auto mb-28 w-[1280px]">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ amount: 1, once: true, margin: "0px 0px -10% 0px" }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="space-y-2 text-center"
      >
        <span className="font-bold uppercase text-blue-500">Partners</span>
        <h1 className="text-5xl font-bold uppercase text-white">
          Our Best Partners
        </h1>
      </motion.div>

      <div className="mt-16 grid grid-cols-5">
        {partners.map((partner, index) => (
          <div
            key={index}
            className={`p-12 ${
              index % 2 === 0 ? "bg-neutral-900" : "bg-zinc-800"
            } flex items-center justify-center`}
          >
            <Image src={partner} alt="company" className="z-10" />
          </div>
        ))}
      </div>
    </div>
  );
}
