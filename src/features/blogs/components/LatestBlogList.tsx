"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// importing from framer motion
import { LatestBlogListProps } from "../Blogs.types";

export default function LatestBlogList({ latestPosts }: LatestBlogListProps) {
  const [isHoverPost, setIsHoverPost] = useState<boolean | number>(false);

  const handleMouseEnter = (index: number) => {
    setIsHoverPost(index);
  };

  const handleMouseLeave = () => {
    setIsHoverPost(false);
  };

  return (
    <div>
      <div className="space-y-6 bg-neutral-950 p-6 pb-14">
        <h1
          className="text-lg font-semibold uppercase text-white"
        >
          Latest Posts
        </h1>
        {latestPosts.map((post, index) => (
          <Link
            href={`/blog-details/${post.slug.current}`}
            key={index}
            className="flex"
          >
            <div
              className="flex cursor-pointer items-center gap-4"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                src={post.imageUrl}
                width={1000}
                height={1000}
                alt="blog image"
                className="h-24 w-24"
              />
              <div className="space-y-4">
                <span className="bg-gray-900 px-3 py-1 text-gray-300">
                  {new Date(post.publishedAt).toDateString()}
                </span>
                <p
                  className={`line-clamp-2 text-lg ${
                    isHoverPost === index
                      ? "text-main transition-colors duration-500"
                      : "text-white transition-colors duration-500"
                  }`}
                >
                  {post.title}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
