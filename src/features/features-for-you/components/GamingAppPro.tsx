import Button from "@/components/buttons/Button";
import React from "react";
import HeroSlider from "./HeroSlider";

export default function GamingAppFeatures() {
  return (
    <section className="bg-black px-6 py-12 text-white">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-3xl font-bold">
          Hello User? Don't play games every day?
        </h1>
        <p className="mt-2 text-gray-400">We got you something special !!</p>
      </div>

      {/* Content Section */}
      <div className="mt-10 flex flex-col items-center justify-around lg:flex-row lg:items-start">
        {/* Image Slider */}
        <div className="">
          <HeroSlider />
        </div>
        {/* Features List */}
        <div className="relative mt-8 w-full lg:ml-12 lg:mt-0 lg:w-1/2">
          <div className="flex gap-2">
            <div className="mt-1 h-6 w-2 bg-gradient-to-tr from-main via-red-700 to-red-600"></div>
            <h2 className="mb-4 text-xl font-bold">All in one gaming app</h2>
          </div>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-2.5 top-0 h-full w-0.5 bg-red-500"></div>
            <ul className="relative z-10 space-y-4">
              {[
                "Snap News & Updates on tech and others",
                "Job & Internships Opportunities",
                "Spot-on Offers & Deals",
                "Post Jobs & Attain Perfect Candidates",
              ].map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-4 text-red-400"
                >
                  {/* Tick Icon */}
                  <div className="flex h-4 w-4 items-center justify-center bg-neutral-600 p-3 font-extralight text-red-900">
                    ✔
                  </div>
                  {/* Feature Text */}
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-x- mt-10 flex justify-center">
            <Button color={"main"} text={"Main Features"} />
            <Button color={"white"} text={"Download App"} />
          </div>
        </div>
      </div>

      {/* Buttons */}
    </section>
  );
}
