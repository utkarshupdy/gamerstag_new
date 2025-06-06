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
import { MemberDetailsProps, SocialMediaIcons } from "../TeamDetails.Types";

export default function MemberCard({ member }: MemberDetailsProps) {
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
        className="overflow-hidden bg-neutral-800 lg:w-[1200px] xl:w-[45%]"
      >
        <Image
          src={member.imageUrl}
          alt="alt"
          width={500}
          height={500}
          priority
          className="z-10 h-full w-full object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        viewport={{ once: true, amount: 1, margin: "0px 0px -10% 0px" }}
        className="mt-4 space-y-4 lg:mt-0 lg:space-y-6"
      >
        <h5 className="w-48 bg-gradient-to-tr from-main via-red-700 to-red-600 text-white text-opacity-80">
          {member.role}
        </h5>
        <h1 className="text-2xl font-semibold text-white lg:text-3xl xl:text-4xl">
          {member.name}
        </h1>
        <h5 className="flex items-center gap-2 text-white text-opacity-80">
          <p className="h-8 w-2 bg-gradient-to-tr from-main via-red-700 to-red-600"></p>
          Headline: {member.headline}
        </h5>
        <h5 className="flex items-center gap-2 text-white text-opacity-80">
          <p className="h-8 w-2 bg-gradient-to-tr from-main via-red-700 to-red-600"></p>
          Education: {member.education}
        </h5>

        <div className="flex flex-wrap items-center gap-x-6 space-y-2 border-y border-white border-opacity-35 py-4 text-white lg:gap-y-0">
          {member.skills.map((skill, index) => (
            <React.Fragment key={index}>
              <p className="bg-gradient-to-tr from-main via-red-700 to-red-600 px-2 py-1">
                {skill}
              </p>
              {member.skills.length - 1 !== index && (
                <div className="border-1 h-8 w-0 border border-white/80"></div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="flex gap-4 text-white">
          {member.socialMedia.map(({ platform, url }) => (
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
