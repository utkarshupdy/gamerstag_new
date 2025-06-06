"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <>
      <div className="space-y-2 py-40">
        <div className="flex justify-center text-white">
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 20 }}
            className="text-center text-4xl uppercase md:text-7xl"
          >
            <span className="font-semibold">Features For You</span>
          </motion.h1>
        </div>
        <div className="mb-4 flex items-center justify-center">
          <span className="mx-2 text-sm font-semibold uppercase text-white text-opacity-50 md:text-lg">
            we started this adventure to make to dream bigger, with each
            keystroke a step closer to success.
          </span>
        </div>
      </div>
    </>
  );
}
