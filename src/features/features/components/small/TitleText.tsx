"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { textContainer, textVariant2 } from "./utils";

type textProps = {
  title: string | ReactNode;
  textStyles?: string;
};

export const TypingText = ({ title, textStyles }: textProps) => (
  <div>
    <motion.p
      variants={textContainer}
      className={`text-[14px] font-normal text-[#fefae0] ${textStyles}`}
    >
      {typeof title === "string" &&
        Array.from(title).map((letter, index) => (
          <motion.span variants={textVariant2} key={index}>
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
    </motion.p>
  </div>
);

export const TitleText = ({ title, textStyles }: textProps) => (
  <div>
    <motion.h2
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      className={`mt-[8px] text-[40px] font-bold text-white md:text-[64px] ${textStyles}`}
    >
      {title}
    </motion.h2>
  </div>
);
