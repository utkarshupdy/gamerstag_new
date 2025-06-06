import { Button } from "@/components/ui/button"; // from shadcn
import { FiArrowUpRight } from "react-icons/fi"; // from shadcn

import cards from "../data/works.json";
import WorkCard from "./WorkCard";

export default function SelectedWork() {
  return (
    <>
      <section className="flex w-full justify-center px-4 py-[140px]">
        <div className="w-[1280px]">
          <div className="mb-10 items-center justify-between space-y-5 lg:flex lg:space-y-0">
            <div>
              <span className="uppercase text-red-500">Our Portfolio</span>
              <h1 className="text-3xl uppercase text-white md:text-5xl">
                <span className="font-semibold">Selected</span> Works.
              </h1>
            </div>

            <div className="group flex items-center">
              <Button
                variant="outline"
                className="border-1 rounded-full border border-solid border-white bg-black text-white transition-colors duration-500 hover:bg-white"
              >
                VIEW ALL
              </Button>
              <div className="cursor-pointer rounded-full p-2 transition-colors duration-500 hover:bg-red-500 group-hover:bg-red-500 group-hover:transition-colors group-hover:duration-500">
                <FiArrowUpRight className="text-lg text-white" />
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center lg:mt-0 lg:h-[400vh]">
            {cards.map((card, index) => (
              <WorkCard key={card.id} index={index} {...card} />
            ))}
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center">
        <div className="h-1 flex-grow border-t border-white border-opacity-20"></div>
        <p className="border-1 rounded-full border border-solid border-white border-opacity-20 px-4 py-2 font-normal text-white">
          More than 200+ companiestrusted us worldwide
        </p>
        <div className="h-1 flex-grow border-t border-white border-opacity-20"></div>
      </div>
    </>
  );
}
