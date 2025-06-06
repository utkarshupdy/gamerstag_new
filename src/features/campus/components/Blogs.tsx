"use client";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaRegCalendarAlt, FaRegUser } from "react-icons/fa";
import blog3 from "@/../public/home-personal-assets/images/blog/3.jpg";

import { motion } from "framer-motion";

export default function Blogs() {
  return (
    <div className="mx-auto my-36 w-[1280px]">
      <motion.div
        className="space-y-2 text-center"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ amount: 1, once: true, margin: "0px 0px -10% 0px" }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      >
        <span className="font-bold uppercase text-blue-500">
          Latest Articles
        </span>
        <h1 className="text-5xl font-bold uppercase text-white">
          Our Recent Blog Post
        </h1>
      </motion.div>

      <div className="mt-16 flex-grow-0 flex-nowrap justify-between gap-8 space-y-8 lg:flex lg:space-y-0">
        <BlogCard />
      </div>

      <div className="mt-10 flex justify-center">
        <Button
          variant="outline"
          className="border-2 border-blue-500 bg-transparent px-10 py-6 uppercase text-blue-500 transition-colors duration-500 hover:bg-blue-500 hover:text-white"
        >
          View All Blog Post
        </Button>
      </div>
    </div>
  );
}

function BlogCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ amount: 1, once: true, margin: "0px 0px -10% 0px" }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <Card className="border border-white border-opacity-20">
        <CardHeader>
          <CardTitle>
            <p className="flex space-x-5 font-normal uppercase text-white opacity-70">
              <span className="flex gap-2">
                <FaRegUser className="text-lg" />
                By: Admin
              </span>{" "}
              <span className="flex gap-2">
                <FaRegCalendarAlt className="text-lg" />
                14 Aug 2024
              </span>
            </p>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <Image src={blog3} alt="blog1" className="z-10 h-80 w-full" />
          <p className="mt-5 text-2xl font-semibold">
            Design Inspiration: Where to Find Creative Ideas
          </p>
        </CardContent>
        <CardFooter className="group space-x-4 pt-0">
          <div className="cursor-pointer rounded-full bg-black p-4 transition-colors duration-500 hover:bg-red-500 group-hover:bg-red-500">
            <FiArrowUpRight className="text-2xl" />
          </div>
          <p className="cursor-pointer">Read More</p>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
