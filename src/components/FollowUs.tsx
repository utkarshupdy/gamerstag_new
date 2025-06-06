"use client";
import { InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube, FaLinkedin } from "react-icons/fa6";
import {
  facebookPage,
  instagramPage,
  linkedinPage,
  twitterPage,
  youtubeChannel,
} from "../data/socialLinks.json";

export default function FollowUs() {
  return (
    <nav className="flex items-center space-x-10">
      <h5 className="text-gray-500">follow us on: </h5>
      <div className="flex items-center space-x-5 *:cursor-pointer *:transition-colors *:duration-300">
        <Link href={facebookPage} target="_blank">
          <FaFacebookSquare className="text-white hover:text-main" />
        </Link>
        <Link href={twitterPage} target="_blank">
          <TwitterLogoIcon className="text-white hover:text-main" />
        </Link>
        <Link href={instagramPage} target="_blank">
          <InstagramLogoIcon className="text-white hover:text-main" />
        </Link>

        <Link href={youtubeChannel} target="_blank">
          <FaYoutube className="text-white hover:text-main" />
        </Link>
        <Link href={linkedinPage} target="_blank">
          <FaLinkedin className="text-white hover:text-main" />
        </Link>
      </div>
    </nav>
  );
}
