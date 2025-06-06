"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Mentors } from "@/features/mentors/Mentors.types";

export default function OtherMentors() {
  const router = useRouter();
  const [mentors, setMentors] = useState<Mentors[]>([]);

  const handleOpenMentor = (slug: string) => {
    router.push(`/mentor-details/${slug}`);
  };

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/team/mentors`,
        );
        if (!response.ok) {
          throw new Error("Failed to fetch mentors");
        }
        const data = await response.json();
        setMentors(data.teamMentors || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMentors();
  }, []);

  return (
    <div className="mt-16">
      <motion.h1
        initial={{ x: 100, scale: 0 }}
        whileInView={{ x: 0, scale: 1 }}
        viewport={{ amount: 1, once: true, margin: "0px 0px -10% 0px" }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="text-2xl font-bold text-white md:text-3xl lg:text-4xl"
      >
        Other Mentors
      </motion.h1>

      <div className="mx-auto mt-10 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
                        <span className="text-sm text-white">
                          {mentor.role}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
