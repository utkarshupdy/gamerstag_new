"use client";

//react icons
import { FiArrowUpRight } from "react-icons/fi";

// importing from framer motion
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className='space-y-8 bg-[url("/blog-list-assets/images/banner.png")] bg-center p-20 lg:p-40'>
      <div className="flex items-center justify-center">
        <motion.h1
          initial={{ x: 100, opacity: 0, scale: 0.5 }}
          animate={{ x: [100, 0], opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-white lg:text-7xl"
        >
          Blogs
        </motion.h1>
      </div>
      <motion.div
        initial={{ x: -100, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex items-center justify-center"
      >
        <p className="border-1 flex cursor-pointer items-center gap-1 rounded-full border border-gray-400 px-4 py-3 text-white hover:text-blue-500">
          HOME <FiArrowUpRight className="text-2xl" />
          <span className="text-blue-500">Blog List</span>
        </p>
      </motion.div>
    </div>
  );
}
