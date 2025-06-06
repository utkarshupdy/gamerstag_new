"use client";

import Image from "next/image";
import { useState } from "react"; // useState

import { Carousel, Card } from "@/components/ui/inifinte-moving-testimonial";

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

import data from "../data/testimonials.json";

export default function Testimonials() {
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

  const cards = data.map((card, index) => (
    <Card
      key={card.title}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      card={card as any}
      index={index}
      src={card.src as string}
    />
  ));

  return (
    <>
      <div className="mx-4 flex justify-center py-[140px]">
        <div className="max-w-screen-xl">
          <div className="flex flex-col items-center justify-between space-y-4">
            <span className="text-red-500">Testimonials</span>
            <h1 className="text-3xl font-semibold capitalize text-white lg:text-5xl">
              What they say about us
            </h1>
            <p className="text-center text-white text-opacity-85 lg:w-[50%]">
              Uniquely promote adaptive quality vectors rather than stand-alone
              e-markets. pontificate alternative architectures whereas iterate.
            </p>
          </div>

          <div className="mt-10 items-center justify-between lg:mt-24 lg:flex">
            <div className="">
              <LuQuote className="mb-2 rotate-180 text-5xl text-white text-opacity-50" />
              <h1 className="text-2xl font-semibold text-white">
                Best Template for SAAS Company!
              </h1>
              <span className="mt-2 flex items-center">{generateStars(5)}</span>
              <p className="my-8 text-white text-opacity-70 lg:text-lg">
                Competently repurpose cost-effective strategic theme areas and
                customer-directed meta-services...
              </p>

              <h3 className="font-semibold text-white">Hanry Luice</h3>
              <span className="text-white text-opacity-70">App Developer</span>
            </div>

            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
              <DialogContent>
                <DialogHeader className="">
                  <DialogTitle className="mb-4 text-white">
                    Joe Richard
                  </DialogTitle>
                  <div className="flex w-full items-center justify-center">
                    <video
                      controls
                      src="/home-personal-assets/videos/introduction.mp4" // Provide the video source
                      className="h-auto max-w-full"
                    />
                  </div>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            <motion.div
              whileHover={{ scale: 1.05 }}
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
            <Carousel items={cards} />
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
}
