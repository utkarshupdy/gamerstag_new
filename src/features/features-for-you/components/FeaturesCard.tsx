"use client";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import cards from "../data/featureCards.json";
export default function FeaturesCards() {
  return (
    <>
      <div className="mx-auto w-[85%] pb-80">
        <div className="m-0 flex justify-center py-12 text-white">
          <div className="flex gap-2">
            <div className="mt-1 h-12 w-2 bg-gradient-to-tr from-main via-red-700 to-red-600"></div>
            <h2 className="mb-4 text-3xl font-bold">Features For You</h2>
          </div>
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
                        width={400}
                        height={400}
                        src={card.image}
                        alt={card.title}
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
