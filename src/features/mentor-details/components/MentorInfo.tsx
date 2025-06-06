"use client";
import React from "react";

import { motion } from "framer-motion";
import { MentorDetailsProps } from "../MentorDetails.Types";

export default function MentorInfo({ mentor }: MentorDetailsProps) {
  return (
    <>
      <div className="mt-16 border-b border-white border-opacity-35 pb-12">
        <motion.h1
          initial={{ x: 100, scale: 0 }}
          whileInView={{ x: 0, scale: 1 }}
          viewport={{ amount: 1, once: true, margin: "0px 0px -10% 0px" }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="text-2xl font-bold text-white md:text-3xl lg:text-4xl"
        >
          Bio
        </motion.h1>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          viewport={{ once: true, amount: 1, margin: "0px 0px -10% 0px" }}
        >
          <p className="mt-4 text-white text-opacity-80">{mentor?.bio}</p>
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

        {mentor.comments.map((comment, index) => (
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
    </>
  );
}
