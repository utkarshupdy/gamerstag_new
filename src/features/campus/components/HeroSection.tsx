import { MdLiveTv } from "react-icons/md";
import { Button } from "@/components/ui/button";
import HeroSlider from "@/features/campus/components/HeroSlider";
import Counter from "@/components/ui/counter";

export default function HeroSection() {
  return (
    <>
      <div className="mx-auto mb-10 mt-36 flex w-[1280px] items-center justify-between gap-10">
        <div className="w-[80%] space-y-10">
          <h3 className="flex items-center gap-4 text-3xl font-semibold uppercase text-white">
            Our Mint is Live <MdLiveTv className="text-5xl" />
          </h3>
          <h1 className="text-6xl font-bold uppercase text-white">
            Bored Ape NFT Collection
          </h1>
          <p className="text-lg font-bold text-white">
            8,888 Unique Undercover Creatures, Starting Minting The 12th of
            February 2022
          </p>

          <div className="flex gap-4">
            <Button
              variant="outline"
              className="w-full border-2 border-red-500 bg-transparent py-6 uppercase text-red-500 transition-colors duration-500 hover:bg-red-500 hover:text-white"
            >
              Mint Now
            </Button>
            <Button
              variant="outline"
              className="w-full bg-black py-6 uppercase text-white transition-colors duration-500 hover:bg-white hover:text-black"
            >
              Whiltelist Now
            </Button>
          </div>
        </div>

        <HeroSlider />
      </div>

      {/* some data */}

      <div className="mx-auto mb-10 flex w-[1280px] justify-between gap-2">
        <div className="space-y-2 rounded-md bg-neutral-900 px-16 py-6 text-center">
          <span className="text-5xl font-bold text-blue-500">
            <Counter target={8888} />
          </span>
          <p className="text-xl font-bold uppercase text-white">Total items</p>
        </div>

        <div className="space-y-2 rounded-md bg-neutral-900 px-16 py-6 text-center">
          <span className="text-5xl font-bold text-blue-500">
            <Counter target={1460} />
          </span>
          <p className="text-xl font-bold uppercase text-white">Total Owners</p>
        </div>

        <div className="space-y-2 rounded-md bg-neutral-900 px-16 py-6 text-center">
          <span className="text-5xl font-bold text-blue-500">
            <Counter target={0.84} />
          </span>
          <p className="text-xl font-bold uppercase text-white">
            floor price [Eth]
          </p>
        </div>

        <div className="space-y-2 rounded-md bg-neutral-900 px-16 py-6 text-center">
          <span className="flex items-center justify-center text-5xl font-bold text-blue-500">
            <Counter target={13} />k
          </span>
          <p className="text-xl font-bold uppercase text-white">
            Volume Traded [Eth]
          </p>
        </div>
      </div>
    </>
  );
}
