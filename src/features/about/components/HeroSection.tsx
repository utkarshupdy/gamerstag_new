import { Button } from "@/components/ui/button"; // from shadcn

// react icons
import { HiArrowDown } from "react-icons/hi2";
import { MdWavingHand } from "react-icons/md";

import { InfiniteMovingTexts } from "@/components/ui/infinite-moving-texts";
import texts from "../data/texts.json";

export default function HeroSection() {
  return (
    <>
      <div className="relative h-auto pb-[60px] pt-[200px]">
        <div className="flex">
          <div
            className="absolute left-[-30vw] top-[-30vw] z-10 h-[80vw] w-[80vw] rounded-full opacity-70"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255, 0, 0, 1) 0%, rgba(255, 0, 0, 0) 70%)",
            }}
          />

          <div
            className="absolute right-0 top-0 z-0 h-full w-[90%] object-cover sm:w-[45%]"
            style={{
              backgroundImage:
                "url('/home-personal-assets/images/profilePic.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              scale: "none",
            }}
          />

          <div className="relative z-20 w-[70%] space-y-6 pl-4 text-white xl:pl-36">
            <span className="flex items-center gap-2 text-xl font-semibold">
              <MdWavingHand className="scale-x-[-1] transform text-3xl text-orange-300" />
              Hello! there
            </span>
            <h1 className="text-4xl font-semibold md:text-5xl lg:text-7xl">
              I&apos;m Oliver <span className="text-orange-600">Jackson</span>
            </h1>
            <h3 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
              I am a product designer
            </h3>
            <p className="py-4 text-white text-opacity-75 lg:text-lg">
              From the inception of a project to its completion, we employ a
              comprehensive and holistic approach.
            </p>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                className="rounded-full bg-transparent px-8 py-6 text-xl"
              >
                Contact Me
              </Button>
              <HiArrowDown className="text-5xl font-thin text-gray-400" />
            </div>
          </div>
        </div>

        <div className="relative z-10 mr-20 mt-28 hidden items-center justify-end gap-10 text-lg text-white lg:flex">
          <div className="space-y-1">
            <h3 className="text-base font-semibold">EMAIL:</h3>
            <p className="text-base">GamersTag: joshua@gamerstag.in</p>
          </div>

          <div className="border-1 h-8 w-0 border border-white"></div>

          <div className="space-y-1">
            <h3 className="text-base font-semibold">PHONE:</h3>
            <p className="text-base">+919999999999</p>
          </div>

          <div className="h-8 border border-b-2 border-white"></div>

          <div className="space-y-1">
            <h3 className="text-base font-semibold">ADDRESS:</h3>
            <p className="text-base">2829 Kochi, Kerala</p>
          </div>
        </div>
      </div>

      <div className="cursor-pointer bg-neutral-800">
        <InfiniteMovingTexts
          showIcon={true}
          items={texts}
          direction="left"
          speed="slow"
        />
      </div>
    </>
  );
}
