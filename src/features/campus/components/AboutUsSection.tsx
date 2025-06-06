"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import legend1 from "@/../public/project-details-assets/images/1.jpg";
import legend2 from "@/../public/project-details-assets/images/2.jpg";
import legend3 from "@/../public/project-details-assets/images/3.jpg";
import legend4 from "@/../public/project-details-assets/images/6.jpg";

import { motion } from "framer-motion";

export default function AboutUsSection() {
  const images = [legend1, legend2, legend3, legend4];
  return (
    <div className="mx-auto my-36 flex w-[1280px] justify-between gap-10">
      <div className="my-auto grid grid-cols-2 gap-4">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ amount: 1, once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <Image
              src={img}
              alt="about"
              className="h-[300px] w-[1200px] object-cover"
            />
          </motion.div>
        ))}
      </div>

      <div className="space-y-10">
        <motion.div
          initial={{ x: 100, scale: 0 }}
          whileInView={{ x: 0, scale: 1 }}
          viewport={{ amount: 1, once: true, margin: "0px 0px -10% 0px" }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="space-y-4"
        >
          <span className="text-lg font-bold uppercase text-blue-500">
            The Story
          </span>
          <h1 className="text-5xl font-bold uppercase text-white">About us</h1>
          <p className="text-white text-opacity-85">
            Contrary to popular belieif Lorem Ipsum is not simply random text It
            has roots in in a piece of classical ratin literature from 45 BCS
            makinig it over 2000 years old Richard McClintock, a lratin
            professor at Hampden-Sydney College in Virginia ain looked up one of
            the more obscure Latin words, consectetur citeis of the word in
            awesome item classical literature.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ amount: 0.5, once: true, margin: "0px 0px -8% 0px" }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="space-y-4"
        >
          <span className="text-lg font-bold uppercase text-red-500">
            Easy Steps
          </span>
          <h2 className="text-4xl font-bold uppercase text-white">
            How to Mint
          </h2>
          <p className="pb-4 text-white text-opacity-85">
            Richard mclintock an Latin professor and hampden-sydney college in
            virginia and looked up one of the more obscure words consectetur
            cites of the word in
          </p>

          <div className="columns-2 gap-4">
            <h5 className="border-t border-solid border-white border-opacity-30 py-4 text-lg font-bold capitalize text-white">
              <span className="text-blue-500">1. </span>connect Your Wallet
            </h5>
            <h5 className="border-t border-solid border-white border-opacity-30 py-4 text-lg font-bold capitalize text-white">
              <span className="text-blue-500">2. </span>Select Your Quantity
            </h5>
            <h5 className="border-t border-solid border-white border-opacity-30 py-4 text-lg font-bold capitalize text-white">
              <span className="text-red-500">3. </span>Confirm the transition
            </h5>
            <h5 className="border-t border-solid border-white border-opacity-30 py-4 text-lg font-bold capitalize text-white">
              <span className="text-red-500">4. </span>Receive Your NFTs
            </h5>
          </div>

          <Button
            variant="outline"
            className="border-2 border-red-500 bg-transparent px-10 py-6 uppercase text-red-500 transition-colors duration-500 hover:bg-red-500 hover:text-white"
          >
            Mint Now
          </Button>
          <Button
            variant="outline"
            className="ml-10 bg-black px-10 py-6 text-white transition-colors duration-500 hover:bg-white hover:text-black"
          >
            Whiltelist Now
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
