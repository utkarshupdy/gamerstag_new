"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import screenshots from "@/features/features/data/screenshots.json";
import Image from "next/image";

export default function Screenshots({ rtl }: { rtl: boolean }) {
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadSwiper(true);
    }, 0);
  }, []);

  return (
    <div className="relative h-[700px] overflow-hidden bg-black pt-24">
      {/* Rounded border on the bottom */}
      <div className="absolute bottom-0 left-0 z-10 h-8 w-full rounded-t-2xl bg-white" />

      {/* Swipable Screenshots */}
      <div className="absolute left-[-60px] top-28 w-[calc(100%+120px)]">
        {loadSwiper && (
          <Swiper
            dir={rtl ? "rtl" : "ltr"}
            className="swiper-container"
            spaceBetween={0}
            slidesPerView={5}
            pagination={false}
            navigation={false}
            mousewheel={false}
            keyboard={true}
            loop={true}
            autoplay={{ delay: 4000 }}
            speed={1000}
            centeredSlides={true}
            breakpoints={{
              0: { slidesPerView: 2 },
              480: { slidesPerView: 2 },
              787: { slidesPerView: 3 },
              991: { slidesPerView: 3 },
              1200: { slidesPerView: 5 },
            }}
          >
            {screenshots.map((screenshot, index) => (
              <SwiperSlide key={index}>
                <div className="mx-auto h-[420px] w-[190px] overflow-hidden rounded-2xl">
                  <Image
                    width={100}
                    height={100}
                    src={screenshot}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      {/* Static Mobile Hand */}
      <Image
        width={100}
        height={100}
        src="/public/features-page-assets/images/rtl-screenshot.png"
        alt=""
        className="pointer-events-none absolute bottom-0 left-1/2 z-10 h-[600px] -translate-x-1/3 transform"
      />
    </div>
  );
}
