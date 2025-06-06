"use client";

import { EmblaOptionsType } from "embla-carousel";
import React, { useState } from "react";

import Masonry from "react-masonry-css";
import GalleryCarousel from "./GalleryCarousel/GalleryCarousel";

import { BsArrowUpRight, BsArrowsFullscreen } from "react-icons/bs";
import { RiCloseLargeLine } from "react-icons/ri";
import { GalleryProps } from "../Gallery.types";
import Image from "next/image";

export default function ExploreGallery({ gallery }: GalleryProps) {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);

  const OPTIONS: EmblaOptionsType = { loop: true, duration: 30 };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  const handleFullscreenClick = () => {
    setIsCarouselOpen(true);
  };

  const handleCloseCarousel = () => {
    setIsCarouselOpen(false);
  };

  return (
    <div className="mx-auto w-[85%]">
      <div className="container mt-16">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-full gap-8"
          columnClassName="masonry-column"
        >
          {gallery.map((img, index) =>
            img.images.map((image) => (
              <div
                key={index}
                className="border-1 group relative mb-8 overflow-hidden border border-solid border-white border-opacity-50"
              >
                <div
                  key={index}
                  className="shadow-lg transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:blur-sm"
                >
                  <Image
                    src={image.imageUrl}
                    width={500}
                    height={500}
                    alt={`gallery-image-${index}`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 grid scale-0 place-items-center text-white opacity-0 transition-opacity duration-300 group-hover:scale-100 group-hover:opacity-100">
                  <div className="border-1 flex space-x-4 space-y-10 border border-solid border-white/50 bg-black/50 p-5 text-2xl">
                    <BsArrowsFullscreen
                      className="cursor-pointer hover:text-main"
                      onClick={handleFullscreenClick}
                    />
                    <a
                      href={image.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer hover:text-main"
                    >
                      <BsArrowUpRight className="cursor-pointer hover:text-main" />
                    </a>
                  </div>
                </div>
              </div>
            )),
          )}
        </Masonry>
      </div>

      {isCarouselOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <RiCloseLargeLine
            className="absolute right-10 top-5 cursor-pointer text-3xl text-white"
            onClick={handleCloseCarousel}
          />
          <GalleryCarousel slides={SLIDES} options={OPTIONS} />
        </div>
      )}
    </div>
  );
}
