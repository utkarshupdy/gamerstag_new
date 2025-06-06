"use client";

import Image from "next/image";
import { motion } from "framer-motion"; // from framer motion
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";

type WorkCardProps = {
  id: number;
  tags: string[];
  title: string;
  description: string;
  color: string;
  image: string;
  index: number;
};

export default function WorkCard({
  description,
  id,
  image,
  tags,
  title,
  index,
}: WorkCardProps) {
  return (
    <motion.div
      initial={{ scale: 0.8 }}
      whileInView={{ scale: 1 }}
      exit={{ scale: 0.8 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      viewport={{ amount: 0.9 }}
      key={id}
      className={`cardContainer sticky top-0 flex h-screen items-center justify-center z-[${
        index
      }] w-full`}
    >
      <motion.div
        className={`card border-1 relative w-full rounded-xl border border-solid border-white border-opacity-10 bg-neutral-900 p-6 shadow-lg`}
      >
        <div className="body gap-6 lg:flex">
          <div className="description flex flex-col justify-between py-4 pl-8">
            <div className="space-y-6">
              <p className="space-x-2 text-sm font-medium text-white">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="border-1 rounded-full border border-white border-opacity-20 px-3 py-1 uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </p>
              <h2 className="text-2xl font-semibold text-white md:text-3xl lg:text-4xl">
                {title}
              </h2>
            </div>
            <div className="space-y-4">
              <p className="leading-relaxed text-white lg:text-lg">
                {description}
              </p>
              <Link
                href={"/"}
                className="border-1 inline-block border-b border-red-500"
              >
                <span className="flex cursor-pointer gap-2 text-sm uppercase text-red-500">
                  View Details
                  <FiArrowUpRight className="text-xl text-red-500" />
                </span>
              </Link>
            </div>
          </div>
          <div className="imageContainer relative overflow-hidden rounded-xl lg:mt-10 lg:h-full lg:w-3/5">
            <div className="inner h-full w-full">
              <Image
                src={image}
                alt={title}
                height={400}
                width={400}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
