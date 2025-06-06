"use client";

import Image from "next/image";
import React from "react";

//import react icons
import {
  FaRegCopy,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

// importing framer motion
import { PortableText } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import { ReadBlogProps } from "@/features/blog-details/BlogDetails.type";

const ReadBlog: React.FC<ReadBlogProps> = ({ post }) => {
  const encodedTitle = encodeURIComponent(post.title);
  const encodedUrl = encodeURIComponent(post.slug.current);

  const shareLinks = [
    {
      platform: "Twitter",
      icon: <FaTwitter />,
      url: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    },
    {
      platform: "Facebook",
      icon: <FaFacebookF />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      platform: "LinkedIn",
      icon: <FaLinkedinIn />,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      platform: "WhatsApp",
      icon: <FaWhatsapp />,
      url: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
    },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        `${process.env.NEXT_PUBLIC_BASE_URL}/blog-details/${post.slug.current}`,
      );
    } catch (error) {
      console.error("Failed to copy URL:", error);
    }
  };

  return (
    <>
      <div className="space-y-4 bg-neutral-950">
        <Image
          src={post.imageUrl}
          alt={post.imageUrl}
          width={1000}
          height={1000}
          priority
          className="w-full pb-20"
        />

        <div className="text-white">
          <PortableText
            value={post.body}
            components={{
              types: {
                image: ({ value }) => (
                  <div>
                    <Image
                      src={urlFor(value).url()}
                      width={1000}
                      height={1000}
                      alt={value.alt || "Blog image"}
                      style={{
                        maxWidth: "100%",
                        borderRadius: "8px",
                        marginBottom: "20px",
                      }}
                    />
                  </div>
                ),
              },
              marks: {
                strong: ({ children }) => (
                  <strong style={{ fontWeight: "bold" }}>{children}</strong>
                ),
                em: ({ children }) => (
                  <em style={{ fontStyle: "italic" }}>{children}</em>
                ),
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
                h1: ({ children }) => (
                  <h1
                    style={{
                      fontSize: "2rem",
                      fontWeight: "bold",
                      marginBottom: "20px",
                    }}
                  >
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2
                    style={{
                      fontSize: "1.75rem",
                      fontWeight: "bold",
                      marginBottom: "15px",
                    }}
                  >
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      marginBottom: "12px",
                    }}
                  >
                    {children}
                  </h3>
                ),
                h4: ({ children }) => (
                  <h4
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: "bold",
                      marginBottom: "10px",
                    }}
                  >
                    {children}
                  </h4>
                ),
                blockquote: ({ children }) => (
                  <blockquote
                    style={{
                      padding: "10px 20px",
                      borderLeft: "4px solid #ccc",
                      fontStyle: "italic",
                      color: "#555",
                      marginBottom: "20px",
                    }}
                  >
                    {children}
                  </blockquote>
                ),
                normal: ({ children }) => (
                  <p
                    style={{
                      marginBottom: "15px", // Add space between paragraphs
                    }}
                  >
                    {children}
                  </p>
                ),
              },
            }}
          />
        </div>

        <div className="py-10">
          <hr className="border-t border-gray-700" />
        </div>

        <div className="items-center justify-between space-y-6 pb-10 md:flex md:space-y-0">
          <p className="flex items-center gap-4 text-gray-300">
            Category:
            {post.categories?.map((category, index) => (
              <span
                key={index}
                className="cursor-pointer bg-gradient-to-tr from-main via-red-700 to-red-600 px-3 py-1 capitalize text-white transition-colors duration-500 hover:bg-main"
              >
                {category.title}
              </span>
            ))}
          </p>
          <p className="flex items-center gap-4 text-gray-300">
            Share:
            <span
              onClick={() => handleCopy()}
              className="cursor-pointer bg-gradient-to-tr from-main via-red-700 to-red-600 p-2 transition-colors duration-500"
            >
              <FaRegCopy />
            </span>
            {shareLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer bg-gradient-to-tr from-main via-red-700 to-red-600 p-2 transition-colors duration-500 hover:bg-main"
                title={`Share on ${link.platform}`}
              >
                {link.icon}
              </a>
            ))}
          </p>
        </div>
      </div>
    </>
  );
};

export default ReadBlog;
