"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "./utils";

type ExploreCardProps = {
  title: string;
  id: string;
  imgUrl: string;
  index: number;
  active: string;
  handleClick: any;
};

export default function ExploreCard({
  title,
  id,
  imgUrl,
  index,
  active,
  handleClick,
}: ExploreCardProps) {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active === id ? "flex-[10] lg:flex-[3.5]" : "flex-[2] lg:flex-[0.5]"
      } flexCenter ease-out-flex h-[700px] min-w-[170px] cursor-pointer transition-[flex] duration-700`}
      onClick={() => handleClick(id)}
    >
      <Image
        src={imgUrl}
        fill
        alt={title}
        priority
        unoptimized
        className="absolute h-full w-full rounded-[24px] object-cover"
      />
      {active !== id ? (
        <h3 className="text-18px absolute z-0 font-semibold text-white sm:text-[26px] lg:bottom-20 lg:origin-[0,0] lg:rotate-[-90deg]">
          {title}
        </h3>
      ) : (
        <div className="bottom-0 flex w-full flex-col justify-start rounded-b-[24px] bg-[rgba(0,0,0,0.5)] p-8 sm:absolute">
          <div className="flexCenter glassmorphism mb-[16px] h-[60px] w-[60px] rounded-[24px]">
            <Image
              src="/headset.svg"
              width={1000}
              height={1000}
              alt="headset"
              className="h-1/2 w-1/2 object-contain"
            />
          </div>
          <p className="text-[16px] font-normal uppercase leading-[20px] text-white">
            Enter the Metaverse
          </p>
          <h2 className="mt-[24px] text-[24px] font-semibold text-white sm:text-[32px]">
            {title}
          </h2>
        </div>
      )}
    </motion.div>
  );
}
