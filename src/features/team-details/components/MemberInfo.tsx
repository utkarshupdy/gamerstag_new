"use client";
import React from "react";

import { motion } from "framer-motion";
import { MemberDetailsProps } from "../TeamDetails.Types";
import { InfiniteMovingTexts } from "@/components/ui/infinite-moving-texts";

export default function MemberInfo({ member }: MemberDetailsProps) {
  return (
    <>
      <div className="mt-16 space-y-4 border-b border-white border-opacity-35 pb-12">
        <motion.h1
          initial={{ x: 100, scale: 0 }}
          whileInView={{ x: 0, scale: 1 }}
          viewport={{ amount: 1, once: true, margin: "0px 0px -10% 0px" }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="text-2xl font-bold text-white md:text-3xl lg:text-4xl"
        >
          About Me
        </motion.h1>

        <h3 className="text-xl font-semibold text-white md:text-2xl lg:text-3xl">
          Hello I&apos;m {member.name}
        </h3>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          viewport={{ once: true, amount: 1, margin: "0px 0px -10% 0px" }}
        >
          <p className="text-white text-opacity-80">{member?.bio}</p>
        </motion.div>
      </div>

      <div className="mt-16 space-y-4 border-b border-white border-opacity-35 pb-12">
        <motion.h1
          initial={{ x: 100, scale: 0 }}
          whileInView={{ x: 0, scale: 1 }}
          viewport={{ amount: 1, once: true, margin: "0px 0px -10% 0px" }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="text-2xl font-bold text-white md:text-3xl lg:text-4xl"
        >
          My Journery Gamers Tag
        </motion.h1>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          viewport={{ once: true, amount: 1, margin: "0px 0px -10% 0px" }}
        >
          <p className="text-white text-opacity-80">{member?.quote}</p>
        </motion.div>
      </div>

      <div className="mt-16 border-b border-white border-opacity-35 pb-12">
        <motion.h1
          initial={{ x: 100, scale: 0 }}
          whileInView={{ x: 0, scale: 1 }}
          viewport={{ amount: 1, once: true, margin: "0px 0px -10% 0px" }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="text-2xl font-bold text-white md:text-3xl lg:text-4xl"
        >
          Testimonials
        </motion.h1>

        {member.comments.map((comment, index) => (
          <motion.div
            key={index}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            viewport={{ once: true, amount: 1, margin: "0px 0px -10% 0px" }}
          >
            <p className="mt-4 text-white text-opacity-80">{comment.comment}</p>
          </motion.div>
        ))}
      </div>

      <InfiniteMovingTexts
        className="z-10 cursor-pointer border border-[#3B3D3A]"
        items={[{ title: "GAMERS TAG" }]}
        direction="left"
        speed="slow"
        showIcon
        pauseOnHover
      />

      <div className="mt-16 space-y-4 border-b border-white border-opacity-35 pb-12">
        <motion.h1
          initial={{ x: 100, scale: 0 }}
          whileInView={{ x: 0, scale: 1 }}
          viewport={{ amount: 1, once: true, margin: "0px 0px -10% 0px" }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="text-2xl font-bold text-white md:text-3xl lg:text-4xl"
        >
          What I do
        </motion.h1>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          viewport={{ once: true, amount: 1, margin: "0px 0px -10% 0px" }}
        >
          <p className="text-white text-opacity-80">{member.capabilities}</p>
        </motion.div>
      </div>
    </>
  );
}
