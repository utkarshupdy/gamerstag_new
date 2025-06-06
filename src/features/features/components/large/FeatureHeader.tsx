"use client";
import Image from "next/image";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";

export default function FeatureHeader() {
  const [isOpen, setOpen] = useState(false);
  const ModalVideoAny = ModalVideo as any;

  const openVideo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <header className="relative mt-12 overflow-hidden bg-black p-20 md:px-0">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
        {/* Text Section */}
        <div className="max-w-lg space-y-4 p-6 text-center md:w-1/2 md:max-w-none md:text-left">
          <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700">
            main feature name
          </span>
          <h2 className="text-3xl">Subfeature anme</h2>
          <h1 className="text-4xl font-bold text-gray-200 md:text-5xl">
            Note <span className="text-gradient">Your Everything</span> In One
            App
          </h1>
          <p className="text-lg text-gray-600">
            No coding required to make customizations. The live customizer has
            everything you need.
          </p>
          <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <button className="flex items-center rounded-full bg-purple-700 px-6 py-3 font-medium text-white">
              <Image
                width={100}
                height={100}
                src="https://www.apple.com/app-store"
                alt="Apple"
                className="mr-2 h-4 w-4"
              />
              Download App
            </button>
            <button
              onClick={openVideo}
              className="flex items-center font-medium text-purple-700"
            >
              <span className="mr-2">▶</span> View Promotion
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative mt-10 flex items-center justify-center md:mt-0 md:w-1/2">
          <Image
            width={100}
            height={100}
            src="/images/featurespage/featureheader/hand.png"
            alt="Notero App"
            className="relative z-10 h-auto w-[400px]"
          />
          <div className="absolute -bottom-8 -left-8 max-w-xs rounded-lg bg-white bg-opacity-10 p-4 shadow-lg">
            <h3 className="font-semibold text-gray-100">
              What Is Soft Colors?
            </h3>
            <p className="text-sm text-gray-400">
              Make simple UI and prototype, don&apos;t forget to add soft color
              for your design.
            </p>
          </div>
        </div>
      </div>

      {/* Optional Video Modal */}
      {/* @ts-ignore */}
      {typeof window !== "undefined" && (
        <ModalVideoAny
          channel="youtube"
          isOpen={isOpen}
          videoId="pGbIOC83-So"
          onClose={() => setOpen(false)}
        />
      )}
    </header>
  );
}
