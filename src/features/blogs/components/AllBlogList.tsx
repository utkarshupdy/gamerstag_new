"use client";

import Image from "next/image";

//icons
import { GoDotFill } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa";
import { PiShareNetwork } from "react-icons/pi";

import { motion } from "framer-motion";
import { useState } from "react";
import { PortableText } from "next-sanity";
import { Button } from "@/components/ui/button";
import { AllBlogListProps } from "../Blogs.types";
import Link from "next/link";

export default function AllBlogList({
  posts,
  search,
  category,
}: AllBlogListProps) {
  const [showMorePosts, setShowMorePosts] = useState(posts);
  const [hasMorePosts, setHasMorePosts] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean | null | string>(null);

  const postWithSearch = posts.filter((post) => {
    const lowerSearch = search?.toLowerCase() || "";
    const titleMatch = post.title.toLowerCase().includes(lowerSearch);
    const authorMatch = post.author?.name?.toLowerCase().includes(lowerSearch);
    const categoryMatch = post.categories?.some((category) =>
      category.title.toLowerCase().includes(lowerSearch),
    );
    return titleMatch || authorMatch || categoryMatch;
  });

  const handleShowMoreBlogs = async () => {
    if (!hasMorePosts) return;
    setIsLoading(true);

    try {
      const start = showMorePosts.length;

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/post?category=${category || ""}&search=${search || ""}&start=${start}`,
      );

      if (!response.ok) throw new Error("Failed to fetch more posts");

      const data = await response.json();
      const newPosts = data.posts || [];

      if (newPosts.length === 0) {
        setHasMorePosts(false);
        setIsLoading(false);
      } else {
        setShowMorePosts((prevPosts) => [...prevPosts, ...newPosts]);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching more posts:", error);
    }
  };

  return (
    <section>
      {postWithSearch.length === 0 && (
        <p className="pb-10 text-xl font-medium text-white lg:text-3xl">
          No results found for {search}.
        </p>
      )}
      {showMorePosts.map((post, index) => (
        <div key={index} className="mb-10 space-y-6 bg-neutral-950 p-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            viewport={{ amount: 0.1 }}
          >
            <Image
              src={post.imageUrl}
              alt={post.imageUrl}
              priority
              width={1000}
              height={1000}
              className="w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.9 }}
            className="flex items-center gap-4"
          >
            <p className="text-lg text-white">
              Written by:{" "}
              <span className="text-gray-400">{post.author?.name}</span>
            </p>
            <GoDotFill className="text-xl text-white" />
            <span className="text-gray-400">
              {new Date(post.publishedAt).toDateString()}
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0, x: 100 }}
            viewport={{ amount: 0.9 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <h3 className="text-2xl text-white">{post.title}</h3>
            <div className="line-clamp-3 text-gray-400">
              <PortableText
                value={post.body}
                components={{
                  types: {
                    image: () => null,
                  },
                  marks: {
                    link: ({ children, value }) => (
                      <a
                        href={value.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "blue", textDecoration: "underline" }}
                      >
                        {children}
                      </a>
                    ),
                  },
                  block: {
                    h1: ({ children }) => <h3>{children}</h3>,
                    h2: ({ children }) => <h4>{children}</h4>,
                    h3: ({ children }) => <h5>{children}</h5>,
                    normal: ({ children }) => <p>{children}</p>,
                  },
                }}
              />
            </div>
          </motion.div>

          <Link
            href={"/blog-details/" + post.slug.current}
            className="flex items-center justify-between"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              viewport={{ amount: 0.95 }}
              transition={{ duration: 1 }}
              className={`cursor-pointer bg-white p-3 hover:bg-main ${isLoading === post.slug.current ? "pointer-events-none" : ""}`}
            >
              <FaArrowRight className="text-black" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, scale: 0.8, x: -70 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8, x: -70 }}
              viewport={{ amount: 0.95 }}
              transition={{ duration: 1 }}
              className="border-1 flex cursor-pointer items-center gap-2 border border-solid border-white border-opacity-30 px-6 py-3 text-lg text-white hover:border-main hover:text-main"
            >
              Share <PiShareNetwork className="text-2xl text-main" />
            </motion.p>
          </Link>
        </div>
      ))}
      <div className="flex justify-center pb-10">
        <Button
          disabled={!hasMorePosts}
          onClick={handleShowMoreBlogs}
          variant="destructive"
          className="rounded-none bg-gradient-to-tr from-main via-red-700 to-red-600 px-8 py-6 text-lg uppercase"
        >
          Show More
        </Button>
      </div>
    </section>
  );
}
