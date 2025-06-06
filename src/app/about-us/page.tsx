"use client";
import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import Button from "@/components/buttons/Button";
import Image from "next/image";
import cards from "@/features/about/data/works.json";

export default function AboutUsNews() {
  return (
    <>
      <div className="mx-auto w-[85%] pb-80">
        <div className="flex justify-center py-64 text-white">
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 20 }}
            className="text-center text-4xl font-semibold uppercase md:text-7xl"
          >
            About Us News
          </motion.h1>
        </div>

        <div className="mx-auto mb-20 items-center justify-between space-y-5 lg:flex lg:space-y-0">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", damping: 20 }}
          >
            <span className="text-lg uppercase text-red-500">Our Team</span>
            <h1 className="text-3xl font-semibold uppercase text-white md:text-5xl">
              Meet Our <span className="font-thin">Legends.</span>
            </h1>
          </motion.div>

          <motion.div
            className="flex items-center"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", damping: 20 }}
          >
            <Button color={"main"} text={"Join To Us"} />

            <div className={`ml-2 cursor-pointer p-2`}>
              <FiArrowUpRight className="text-lg text-white" />
            </div>
          </motion.div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center lg:mt-0 lg:h-[400vh]">
          {cards.map((card, index) => (
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              viewport={{ amount: 0.9 }}
              key={card.id}
              className={`cardContainer sticky top-0 flex h-screen items-center justify-center z-[${
                cards.length - index
              }] w-full`}
            >
              <motion.div
                className={`card border-1 relative w-full border border-solid border-white border-opacity-10 bg-neutral-900 p-6 shadow-lg`}
              >
                <div className="body gap-6 lg:flex">
                  <div className="description flex flex-col justify-between py-4 pl-8">
                    <div className="space-y-6">
                      <p className="space-x-2 text-sm font-medium text-white">
                        {card.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="border-1 border border-white border-opacity-20 px-3 py-1 uppercase"
                          >
                            {tag}
                          </span>
                        ))}
                      </p>
                      <h2 className="text-2xl font-semibold text-white md:text-3xl lg:text-4xl">
                        {card.title}
                      </h2>
                    </div>
                    <div className="space-y-4">
                      <p className="leading-relaxed text-white lg:text-lg">
                        {card.description}
                      </p>
                      <Link
                        href={""}
                        className="border-1 inline-block border-b border-red-500"
                      >
                        <span className="flex cursor-pointer gap-2 text-sm uppercase text-red-500">
                          View Details
                          <FiArrowUpRight className="text-xl text-red-500" />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="imageContainer relative overflow-hidden lg:mt-10 lg:h-full lg:w-3/5">
                    <div className="inner h-full w-full">
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={400}
                        height={400}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
