import { Button } from "@/components/ui/button"; // from shadcn
import { FiArrowUpRight } from "react-icons/fi"; // from react icons

// getting card from shadcn
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import services from "../data/services.json";

export default function Services() {
  return (
    <>
      <section className="items-center justify-center px-4 pb-[140px] lg:flex">
        <div className="max-w-screen-xl">
          <div className="mb-20 w-full items-end justify-between space-y-5 lg:flex lg:space-y-0">
            <div className="">
              <span className="uppercase text-red-500">Our Specialize</span>
              <h1 className="text-3xl font-thin uppercase text-white md:text-5xl">
                <span className="font-semibold">Featured</span> Services.
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

          <div className="items-center gap-8 lg:flex">
            {services.map(({ description, tags, title }) => (
              <Card key={title} className="bg-neutral-900">
                <CardHeader>
                  <CardTitle className="mt-2 text-xl md:text-2xl">
                    <FiArrowUpRight className="text-7xl" />
                    <p className="my-6">{title}</p>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="space-x-2 text-gray-300">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-gray-600 px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </p>
                  <p>{description}</p>
                </CardContent>
                <CardFooter className="my-4">
                  <div className="cursor-pointer rounded-full bg-black p-4 transition-colors duration-500 hover:bg-red-500">
                    <FiArrowUpRight className="text-2xl" />
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center">
        <div className="w-[1280px]">
          <div className="relative w-full">
            <div className="absolute inset-0">
              <div className="h-0.5 w-full bg-gradient-to-r from-white/0 via-white to-white/0" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
