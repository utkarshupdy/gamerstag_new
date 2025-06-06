"use client";

import Image from "next/image";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { MentorsProps } from "../Mentors.types";
import { useRouter } from "next/navigation";

export default function Mentors({ mentors }: MentorsProps) {
  const router = useRouter();

  const handleOpenMentor = (slug: string) => {
    router.push(`/mentor-details/${slug}`);
  };

  return (
    <div className="mx-auto mb-20 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {mentors.map((mentor, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          viewport={{ once: true, amount: 0.5 }}
          className="cursor-pointer"
          onClick={() => handleOpenMentor(mentor.slug.current)}
        >
          <CardContainer key={index} className="inter-var">
            <CardBody className="group/card relative border-black/[0.1] dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
              <CardItem translateZ="100" className="h-full w-full">
                <div className="border-1 relative h-[350px] w-full overflow-hidden border border-solid border-white border-opacity-20">
                  <div className="absolute inset-0 bottom-0 z-0 m-auto h-80 w-full translate-y-1/3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-60 blur-2xl"></div>
                  <Image
                    src={mentor.imageUrl}
                    width={500}
                    height={500}
                    priority
                    alt="mentor"
                    className="relative z-10 h-full w-full object-cover object-top"
                  />
                  <div
                    className="bg-gradient-radial absolute bottom-0 left-0 right-0 z-20 m-2 bg-opacity-40 py-4 backdrop-blur-[21px]"
                    style={{
                      background:
                        "radial-gradient(267.9% 200.83% at 47.19% -80%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)",
                      opacity: 0.8,
                    }}
                  >
                    <div className="text-center">
                      <h1 className="text-xl font-medium capitalize text-white">
                        {mentor.name}
                      </h1>
                      <span className="text-sm text-white">{mentor.role}</span>
                    </div>
                  </div>
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>
        </motion.div>
      ))}

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 20 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="border-1 flex h-[350px] w-full items-center justify-center overflow-hidden border border-solid border-white border-opacity-20">
          <div className="px-10">
            <h1 className="text-wrap text-xl font-semibold capitalize text-white md:text-2xl lg:text-3xl">
              Become
              <br /> our member
            </h1>
            <div className="mt-2 flex">
              <span
                className={`cursor-pointer bg-black p-4 transition-colors duration-500 hover:bg-main`}
              >
                <FiArrowUpRight className="text-4xl text-white" />
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
