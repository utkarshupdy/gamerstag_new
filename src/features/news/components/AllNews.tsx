"use client";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { motion } from "framer-motion";
import NewsData from "../data/news.json";

export default function AllNews() {
  return (
    <>
      <div className="mb-20 justify-between gap-8 space-y-8 px-10 lg:grid lg:grid-cols-3 lg:space-y-0">
        {NewsData.map((news, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ amount: 1, once: true, margin: "0px 0px -10% 0px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            key={index}
          >
            <CardContainer key={index} className="inter-var">
              <CardBody className="group/card relative border-black/[0.1] dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
                <CardItem translateZ="100" className="h-full w-full">
                  <Card className="border border-white border-opacity-20">
                    <CardHeader>
                      <CardTitle>
                        <p className="space-x-5 font-normal uppercase text-white opacity-70">
                          <span>By: {news.postBy}</span>{" "}
                          <span>14 Aug 2024</span>
                        </p>
                      </CardTitle>
                      {/* <CardDescription>Card Description</CardDescription> */}
                    </CardHeader>
                    <CardContent>
                      <div className="lg:aspect-[16/9]">
                        <Image
                          src={news.image}
                          alt="blog1"
                          width={400}
                          height={400}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <p className="mt-5 text-2xl font-semibold">
                        {news.description}
                      </p>
                    </CardContent>
                    <CardFooter className="group space-x-4 pt-0">
                      <div className="cursor-pointer rounded-full bg-black p-4 transition-colors duration-500 hover:bg-red-500 group-hover:bg-red-500">
                        <FiArrowUpRight className="text-2xl" />
                      </div>
                      <p className="cursor-pointer">Read More</p>
                    </CardFooter>
                  </Card>
                </CardItem>
              </CardBody>
            </CardContainer>
          </motion.div>
        ))}
      </div>
    </>
  );
}
