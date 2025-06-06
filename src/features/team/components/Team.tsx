"use client";

import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";

import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
} from "react-icons/fa";
import { FaRegSquareFull, FaSquareFull, FaXTwitter } from "react-icons/fa6";
import { MembersProps, SocialMediaIcons } from "../Team.types";
import Link from "next/link";

export default function Team({ members }: MembersProps) {
  const socialIcons: SocialMediaIcons = {
    linkedin: <FaLinkedinIn />,
    github: <FaGithub />,
    twitter: <FaXTwitter />,
    facebook: <FaFacebookF />,
    instagram: <FaInstagram />,
  };

  return (
    <>
      <div className="mx-auto my-10 grid w-[85%] gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {members.map((member, index) => (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover="hover"
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            viewport={{ once: true, amount: 0.5 }}
            key={index}
          >
            <div className="border-1 relative h-[300px] w-full overflow-hidden border border-solid border-white border-opacity-30">
              <div className="absolute left-1/2 top-1/2 h-48 w-full -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-gradient-to-r from-red-500 via-red-500 to-red-500 opacity-60 blur-3xl"></div>

              <motion.div
                variants={{
                  hover: { scale: 1.15 },
                }}
                initial={{ scale: 1 }}
                // whileHover={{ scale: 1.15 }}
                transition={{ ease: "easeInOut" }}
                className="h-full w-full"
              >
                <Image
                  src={member.imageUrl}
                  width={500}
                  height={500}
                  alt="mentor"
                  className="relative h-full w-full object-cover object-top"
                />
              </motion.div>

              <motion.div
                initial={{ y: 100 }}
                variants={{ hover: { y: 0 } }}
                transition={{ ease: "easeInOut", duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between border-y border-solid border-white bg-black bg-opacity-40 px-1 py-2"
              >
                <div className="flex flex-col items-center gap-1 text-white">
                  <FaRegSquareFull className="text-xs-sm md:text-xs" />
                  <FaSquareFull className="text-xs-sm md:text-xs" />
                  <div className="h-6 border-l border-solid border-white md:h-10" />
                </div>
                <div className="flex items-center justify-center gap-2 text-xl">
                  {member.socialMedia.map(({ platform, url }) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-1 cursor-pointer border border-solid border-white border-opacity-30 p-2 text-white transition-colors duration-500 hover:border-main"
                    >
                      {socialIcons[platform]}
                    </a>
                  ))}
                </div>
                <div className="flex flex-col items-center gap-1 text-white">
                  <div className="h-6 border-l border-solid border-white md:h-10" />
                  <FaRegSquareFull className="text-xs-sm md:text-xs" />
                  <FaSquareFull className="text-xs-sm md:text-xs" />
                </div>
              </motion.div>
            </div>

            <div className="border border-t-0 border-solid border-white border-opacity-30 py-6 text-center">
              <Link href={`/team-details/${member.slug.current}`}>
                <h2 className="mb-1 cursor-pointer text-xl font-semibold uppercase text-white transition-colors duration-700 hover:text-main md:text-2xl">
                  {member.name}
                </h2>
              </Link>
              <span className="text-sm font-semibold uppercase text-white text-opacity-70">
                {member.role}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
