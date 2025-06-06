"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const LoadingPage: React.FC = () => {
  const [isTextVisible, setIsTextVisible] = useState(true); // State to manage text visibility
  const [isLoading, setIsLoading] = useState(true); // State to manage the entire loading screen

  useEffect(() => {
    // Timer to hide text at 50% of loading duration
    const textTimer = setTimeout(() => {
      setIsTextVisible(false);
    }, 6000); // 50% of 8 seconds = 4 seconds

    // Timer to hide the entire loading screen
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 7000); // Total loading duration = 8 seconds

    return () => {
      clearTimeout(textTimer);
      clearTimeout(loadingTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {/* Entire Loading Component */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }} // Fade out the entire component
          exit={{ opacity: 0 }}
          transition={{
            duration: 2, // Smooth fade-out duration for the entire component
            delay: 6, // Begin fading out the component after 6 seconds
            ease: "easeInOut",
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <div className="text-center">
            {/* Conditional Rendering of Text */}
            {isTextVisible && (
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }} // Fade out text smoothly
                exit={{ opacity: 0 }}
                transition={{
                  duration: 6, // Smooth fade-out for text
                  ease: "easeInOut",
                }}
              >
                {/* Logo */}
                <Image
                  className="mx-auto"
                  src="/logo.svg"
                  alt="logo"
                  height={100}
                  width={100}
                />

                {/* Subheading */}
                <p className="mb-2 text-lg uppercase text-gray-300">
                  A Step Into Future of Gaming
                </p>
                <h2 className="mb-2 text-3xl font-bold text-white">
                  Welcome to Gamers Tag
                </h2>
                <p className="mb-8 text-sm uppercase text-gray-400">
                  The Biggest Gaming Platform in the World
                </p>
              </motion.div>
            )}

            {/* Loading Bar */}
            <div className="w-90 relative h-1 overflow-hidden bg-gray-700">
              <motion.div
                className="absolute left-0 top-0 h-1 bg-red-500"
                initial={{ width: "0%" }}
                animate={{
                  width: "100%",
                  transition: {
                    times: [0, 0.6, 1], // Smooth progression
                    duration: 5, // Match loading bar duration to entire loading
                    ease: "easeInOut",
                  },
                }}
                exit={{ width: "100%" }}
              ></motion.div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Main Content, shown after loading is complete */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          {/* Main page content */}
          <div className="text-center">
            <h2 className="text-4xl text-white">
              Welcome to the Game Platform
            </h2>
            {/* Additional content */}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingPage;
