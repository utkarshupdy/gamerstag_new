"use client";

import Image from "next/image";
import { useState } from "react"; // useState

// importing images
import profilePic from "@/../public/home-personal-assets/images/t3.jpg";

// from react icons
import { FaStar } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import { LuQuote } from "react-icons/lu";

import { motion } from "framer-motion"; // from framer motion

// getting dialog from shadcn
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { EmblaOptionsType } from "embla-carousel";
import TestimonialCarousel from "./TestimonialCarousel/TestimonialCarousel";

const UserOpinion = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const generateStars = (count: number) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(
        <FaStar
          className={`text-lg text-orange-400 hover:cursor-pointer`}
          key={i}
        />,
      );
    }
    return stars;
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = 8;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <>
      <div className="mx-4 flex justify-center py-20">
        <div className="w-[85%]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ y: [100, 0], opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="flex flex-col items-center justify-between space-y-4"
          >
            <h1 className="text-center text-2xl font-bold uppercase text-main md:text-4xl lg:text-5xl">
              Top Users Testimonials
            </h1>
            <h1 className="pt-10 text-xl font-semibold capitalize text-white md:text-3xl lg:text-4xl">
              What they say about us
            </h1>
            <p className="text-center text-white text-opacity-85 lg:w-[50%]">
              Uniquely promote adaptive quality vectors rather than stand-alone
              e-markets. pontificate alternative architectures whereas iterate.
            </p>
          </motion.div>

          <div className="mt-10 items-center justify-between gap-6 lg:mt-24 lg:flex">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="lg:w-[50%]"
            >
              <LuQuote className="mb-2 rotate-180 text-5xl text-white text-opacity-50" />
              <p className="pb-2 text-lg font-semibold text-white md:text-xl lg:text-2xl">
                Best Template for SAAS Company! Competently repurpose
                cost-effective strategic theme areas and customer-directed
                meta-services...
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="mt-2 flex items-center">
                    {generateStars(5)}
                  </span>
                  <h3 className="font-semibold text-white">Hanry Luice</h3>
                  <span className="text-white text-opacity-70">
                    App Developer
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <div>
                    <span className="cursor-pointer bg-neutral-700 p-2 font-semibold text-white hover:bg-neutral-600">
                      Feature 1
                    </span>
                  </div>
                  <div>
                    <span className="cursor-pointer bg-neutral-700 p-2 font-semibold text-white hover:bg-neutral-600">
                      Feature 2
                    </span>
                  </div>
                  <div>
                    <span className="cursor-pointer bg-neutral-700 p-2 font-semibold text-white hover:bg-neutral-600">
                      Feature 3
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
              {/* <DialogTrigger>Open</DialogTrigger> */}
              <DialogContent>
                <DialogHeader className="">
                  <DialogTitle className="mb-4 text-white">
                    Joe Richard
                  </DialogTitle>
                  <div className="flex w-full items-center justify-center">
                    <video
                      controls
                      src="/home-personal-assets/videos/introduction.mp4"
                      className="h-auto max-w-full" // Ensure responsiveness
                      // style={{ width: "50vw", maxHeight: "100vh", outline: "none"}}
                    />
                  </div>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileHover={{ scale: 1.05 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              onClick={handleOpenDialog}
              className="relative mt-10 cursor-pointer lg:mt-0"
            >
              <Image
                src={profilePic}
                alt="profilePic"
                className="h-80 w-[500px] rounded-xl object-cover"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 flex items-center gap-4 text-white shadow-black">
                <motion.span
                  initial={{ scale: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-full bg-blue-500 p-4"
                >
                  <FaPlay className="text-xl" />
                </motion.span>
                <p className="text-lg font-bold">Watch Video</p>
              </div>
            </motion.div>
          </div>

          <div className="h-full w-full py-10">
            <TestimonialCarousel
              slides={SLIDES}
              options={OPTIONS}
              isAdded={true}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="w-full">
          <div className="relative w-full">
            <div className="absolute inset-0">
              <div className="h-0.5 w-full bg-gradient-to-r from-white/0 via-white to-white/0" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserOpinion;
