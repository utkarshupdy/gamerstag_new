"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

// Install the Autoplay module
<Swiper
  modules={[Autoplay]}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  loop={true}
>
  <SwiperSlide>Your Slide Content</SwiperSlide>
</Swiper>;

const Collection: React.FC = () => {
  return (
    <section className="collection py-12">
      <div className="container mx-auto px-4">
        <div className="collection__wrapper">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
            {/* Left Section */}
            <div className="lg:col-span-3">
              <div className="collection__header">
                <div className="collection__header-content text-left">
                  <p className="text-sm text-main">Collection</p>
                  <h2 className="text-3xl font-extrabold text-gray-200">
                    Bored Apes NFT Items
                  </h2>
                  <p className="mt-2 text-sm text-main">
                    8888 Unique Undercover Creatures Start Minting
                  </p>
                </div>
              </div>
            </div>

            {/* Slider 1 */}
            <div className="lg:col-span-9">
              <Swiper
                spaceBetween={20}
                slidesPerView={3}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                className="collection__slider1"
              >
                <SwiperSlide>
                  <div className="collection__item">
                    <div className="collection__item-thumb overflow-hidden shadow-lg">
                      <Image
                        src="/nft-portal-assets/images/collection.png"
                        alt="NFT Image"
                        width={100}
                        height={100}
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="collection__item">
                    <div className="collection__item-thumb overflow-hidden shadow-lg">
                      <Image
                        width={100}
                        height={100}
                        src="/nft-portal-assets/images/collection.png"
                        alt="NFT Image"
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="collection__item">
                    <div className="collection__item-thumb overflow-hidden shadow-lg">
                      <Image
                        width={100}
                        height={100}
                        src="/nft-portal-assets/images/collection.png"
                        alt="NFT Image"
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            {/* Slider 2 */}
            <div className="lg:col-span-9">
              <Swiper
                spaceBetween={20}
                slidesPerView={3}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                className="collection__slider2"
              >
                <SwiperSlide>
                  <div className="collection__item">
                    <div className="collection__item-thumb overflow-hidden shadow-lg">
                      <Image
                        width={100}
                        height={100}
                        src="/nft-portal-assets/images/collection.png"
                        alt="NFT Image"
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="collection__item">
                    <div className="collection__item-thumb overflow-hidden shadow-lg">
                      <Image
                        width={100}
                        height={100}
                        src="/nft-portal-assets/images/collection.png"
                        alt="NFT Image"
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="collection__item">
                    <div className="collection__item-thumb overflow-hidden shadow-lg">
                      <Image
                        width={100}
                        height={100}
                        src="/nft-portal-assets/images/collection.png"
                        alt="NFT Image"
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            {/* Right Section */}
            <div className="lg:col-span-3">
              <div className="collection__btn">
                <a
                  href="#"
                  className="default-btn mt-4 flex items-center justify-center bg-main px-4 py-3 text-white"
                >
                  <span className="flex items-center gap-2">
                    <Image
                      width={100}
                      height={100}
                      src="/nft-portal-assets/images/collection.png"
                      alt="Opensea Icon"
                      className="inline-block"
                    />
                    View On Opensea
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
