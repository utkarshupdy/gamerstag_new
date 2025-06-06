"use client";

import Image from "next/image";

//importing images
import gamerstagLogo from "@/../public/logo.svg";

//importing icons
import { FaRegCommentDots } from "react-icons/fa";
import { HeaderProps } from "@/features/blog-details/BlogDetails.type";

const Header: React.FC<HeaderProps> = ({ post, category, countComments }) => {
  return (
    <div className="flex w-full py-10">
      <div className="ml-auto mr-auto max-w-[80%] space-y-5 pl-3 pr-3">
        {category.map((categoryName, index) => (
          <span
            key={index}
            className="text-sm font-semibold uppercase text-gray-300"
          >
            {categoryName.title}
            {index !== category.length - 1 && <span className="mx-1">,</span>}
          </span>
        ))}
        <h1 className="text-3xl font-semibold text-white md:text-6xl">
          {post.title}
        </h1>
        <div className="items-center justify-between md:flex">
          <div className="flex items-center gap-10">
            <a
              href={post?.author?.linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex cursor-pointer items-center gap-4"
            >
              <Image
                src={post.author?.authorImage || gamerstagLogo}
                alt="gamerstag Logo"
                width={500}
                height={500}
                className="h-16 w-16 rounded-full"
              />
              <div>
                <p className="text-gray-300">Author</p>
                <span className="font-semibold text-white transition-colors duration-500 group-hover:text-main">
                  {post.author?.name}
                </span>
              </div>
            </a>
            <div>
              <p className="text-gray-300">Published</p>
              <span className="font-semibold text-white">
                {new Date(post.publishedAt).toDateString()}
              </span>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-gray-300">
            <FaRegCommentDots className="text-lg" />
            <span>{String(countComments).padStart(2, "0")} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
