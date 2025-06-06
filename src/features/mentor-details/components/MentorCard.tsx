"use client";
import Image from "next/image";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import { motion } from "framer-motion";
import React from "react";
import { MentorDetailsProps, SocialMediaIcons } from "../MentorDetails.Types";

export default function MentorCard({ mentor }: MentorDetailsProps) {
  const socialIcons: SocialMediaIcons = {
    linkedin: <FaLinkedinIn />,
    github: <FaGithub />,
    twitter: <FaTwitter />,
    facebook: <FaFacebookF />,
    instagram: <FaInstagram />,
  };

  return (
    <div className="border-1 items-center justify-between gap-8 border border-solid border-white border-opacity-35 p-8 lg:flex">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        viewport={{ once: true, amount: 1, margin: "0px 0px -10% 0px" }}
        className="overflow-hidden bg-neutral-800 lg:w-[1200px] xl:w-[85%]"
      >
        <Image
          src={mentor.imageUrl}
          alt="alt"
          width={500}
          height={500}
          priority
          className="z-10 w-full object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        viewport={{ once: true, amount: 1, margin: "0px 0px -10% 0px" }}
        className="mt-4 space-y-4 lg:mt-0 lg:space-y-6"
      >
        <h1 className="text-2xl font-semibold text-white lg:text-3xl xl:text-4xl">
          {mentor.name}
        </h1>
        <h5 className="text-white text-opacity-80">{mentor.role}</h5>
        <p className="text-white text-opacity-80">{mentor.thoughts}</p>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-white border-opacity-35 py-4 text-white text-opacity-80 lg:gap-y-0">
          {mentor.skills.map((skill, index) => (
            <React.Fragment key={index}>
              <p>{skill}</p>
              {mentor.skills.length - 1 !== index && (
                <div className="border-1 h-8 w-0 border border-white/80"></div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="flex gap-4 text-white">
          {mentor.socialMedia.map(({ platform, url }) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer bg-gradient-to-tr from-main via-red-700 to-red-600 p-2 transition-colors duration-500"
            >
              {socialIcons[platform]}
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
