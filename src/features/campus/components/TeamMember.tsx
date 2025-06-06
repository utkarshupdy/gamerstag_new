"use client";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import Image from "next/image";

import legend1 from "@/../public/project-details-assets/images/3.jpg";

import { motion } from "framer-motion";

export default function TeamMember() {
  return (
    <div className="mx-auto mb-36 w-[1280px]">
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ amount: 1, once: true, margin: "0px 0px -10% 0px" }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="space-y-2 text-center"
      >
        <span className="font-bold uppercase text-blue-500">Team Member</span>
        <h1 className="text-5xl font-bold uppercase text-white">
          Meet The Crew
        </h1>
      </motion.div>

      <div className="mt-16 grid grid-cols-2 gap-8">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ amount: 1, once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <Card className="flex items-center gap-6 border border-white border-opacity-20 p-4">
            <Image src={legend1} alt="legend" className="z-10 size-56" />
            <div className="">
              <CardTitle>
                <div className="cursor-pointer text-2xl font-bold uppercase transition-colors duration-500 hover:text-blue-500">
                  Harry Abraham
                </div>
                <div className="text-lg">Founder</div>
              </CardTitle>
              <CardContent className="my-4 p-0">
                <p>
                  Contrar info popular belief is not simp has roots info piece
                  arei classica from looked upone info the more obsc latin cites
                  of the word in
                </p>
              </CardContent>
              <CardFooter className="p-0">
                <p className="flex items-center gap-4">
                  <FaTwitter className="cursor-pointer transition-colors duration-500 hover:text-blue-500" />
                  <FaFacebookF className="cursor-pointer transition-colors duration-500 hover:text-blue-500" />
                  <FaLinkedinIn className="cursor-pointer transition-colors duration-500 hover:text-blue-500" />
                  <FaInstagram className="cursor-pointer transition-colors duration-500 hover:text-blue-500" />
                </p>
              </CardFooter>
            </div>
          </Card>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ amount: 1, once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <Card className="flex items-center gap-6 border border-white border-opacity-20 p-4">
            <Image src={legend1} alt="legend" className="z-10 size-56" />
            <div className="">
              <CardTitle>
                <div className="cursor-pointer text-2xl font-bold uppercase transition-colors duration-500 hover:text-blue-500">
                  Harry Abraham
                </div>
                <div className="text-lg">Founder</div>
              </CardTitle>
              <CardContent className="my-4 p-0">
                <p>
                  Contrar info popular belief is not simp has roots info piece
                  arei classica from looked upone info the more obsc latin cites
                  of the word in
                </p>
              </CardContent>
              <CardFooter className="p-0">
                <p className="flex items-center gap-4">
                  <FaTwitter className="cursor-pointer transition-colors duration-500 hover:text-blue-500" />
                  <FaFacebookF className="cursor-pointer transition-colors duration-500 hover:text-blue-500" />
                  <FaLinkedinIn className="cursor-pointer transition-colors duration-500 hover:text-blue-500" />
                  <FaInstagram className="cursor-pointer transition-colors duration-500 hover:text-blue-500" />
                </p>
              </CardFooter>
            </div>
          </Card>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ amount: 1, once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <Card className="flex items-center gap-6 border border-white border-opacity-20 p-4">
            <Image src={legend1} alt="legend" className="z-10 size-56" />
            <div className="">
              <CardTitle>
                <div className="cursor-pointer text-2xl font-bold uppercase transition-colors duration-500 hover:text-blue-500">
                  Harry Abraham
                </div>
                <div className="text-lg">Founder</div>
              </CardTitle>
              <CardContent className="my-4 p-0">
                <p>
                  Contrar info popular belief is not simp has roots info piece
                  arei classica from looked upone info the more obsc latin cites
                  of the word in
                </p>
              </CardContent>
              <CardFooter className="p-0">
                <p className="flex items-center gap-4">
                  <FaTwitter className="cursor-pointer transition-colors duration-500 hover:text-blue-500" />
                  <FaFacebookF className="cursor-pointer transition-colors duration-500 hover:text-blue-500" />
                  <FaLinkedinIn className="cursor-pointer transition-colors duration-500 hover:text-blue-500" />
                  <FaInstagram className="cursor-pointer transition-colors duration-500 hover:text-blue-500" />
                </p>
              </CardFooter>
            </div>
          </Card>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ amount: 1, once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <Card className="flex items-center gap-6 border border-white border-opacity-20 p-4">
            <Image src={legend1} alt="legend" className="z-10 size-56" />
            <div className="">
              <CardTitle>
                <div className="cursor-pointer text-2xl font-bold uppercase transition-colors duration-500 hover:text-blue-500">
                  Harry Abraham
                </div>
                <div className="text-lg">Founder</div>
              </CardTitle>
              <CardContent className="my-4 p-0">
                <p>
                  Contrar info popular belief is not simp has roots info piece
                  arei classica from looked upone info the more obsc latin cites
                  of the word in
                </p>
              </CardContent>
              <CardFooter className="p-0">
                <p className="flex items-center gap-4">
                  <FaTwitter className="cursor-pointer transition-colors duration-500 hover:text-blue-500" />
                  <FaFacebookF className="cursor-pointer transition-colors duration-500 hover:text-blue-500" />
                  <FaLinkedinIn className="cursor-pointer transition-colors duration-500 hover:text-blue-500" />
                  <FaInstagram className="cursor-pointer transition-colors duration-500 hover:text-blue-500" />
                </p>
              </CardFooter>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
