"use client";
import { motion } from "framer-motion";
import { FaRegSquareFull, FaSquareFull } from "react-icons/fa6";

export default function GalleryHeroSection() {
  return (
    <div className="space-y-2 py-40">
      <div className="flex justify-center text-white">
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", damping: 20 }}
          className="text-center text-4xl uppercase md:text-7xl"
        >
          <span className="font-semibold">Our</span> Gallery
        </motion.h1>
      </div>
      <div className="mb-4 flex items-center justify-center">
        <div className="flex items-center gap-1 text-white text-opacity-50 sm:gap-2">
          <FaRegSquareFull className="text-xs-sm sm:text-xs" />
          <FaSquareFull className="text-xs-sm sm:text-xs" />
          <hr className="w-6 border border-solid border-white border-opacity-50 sm:w-10" />
        </div>
        <span className="mx-2 text-sm font-semibold uppercase text-white text-opacity-50 md:text-lg">
          Famous on Internet
        </span>
        <div className="flex items-center gap-1 text-white text-opacity-50 sm:gap-2">
          <hr className="w-6 border border-solid border-white border-opacity-50 sm:w-10" />
          <FaRegSquareFull className="text-xs-sm sm:text-xs" />
          <FaSquareFull className="text-xs-sm sm:text-xs" />
        </div>
      </div>
    </div>
  );
}
