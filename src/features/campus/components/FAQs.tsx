"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { motion } from "framer-motion";

export default function FAQs() {
  return (
    <div className="mx-auto w-[1280px]">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ amount: 1, once: true, margin: "0px 0px -10% 0px" }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="space-y-2 text-center"
      >
        <span className="font-bold uppercase text-blue-500">
          Questions & Answers
        </span>
        <h1 className="text-5xl font-bold uppercase text-white">
          Frequently Asked Questions
        </h1>
      </motion.div>

      <div className="mt-16 flex justify-between gap-6">
        <div className="w-full space-y-6">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ amount: 1, once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <Accordion
              type="single"
              collapsible
              className="bg-neutral-900 px-4"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-2xl font-bold uppercase text-white">
                  What is NFTPort
                </AccordionTrigger>
                <AccordionContent className="text-lg text-white text-opacity-80">
                  We want provide our community with the best quality art from
                  real artist for afordable price That is why we chose mint
                  price of 0.22 ETH (+ gas fee). If you are planning to hold
                  your Bulls you will bee rewarded with FEE Apes Land
                  approximatey 6-8 weeks after the official launch 02 What will
                  the mint price be?.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ amount: 1, once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <Accordion
              type="single"
              collapsible
              className="bg-neutral-900 px-4"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-2xl font-bold uppercase text-white">
                  When we should choose nftport
                </AccordionTrigger>
                <AccordionContent className="text-lg text-white text-opacity-80">
                  We want provide our community with the best quality art from
                  real artist for afordable price That is why we chose mint
                  price of 0.22 ETH (+ gas fee). If you are planning to hold
                  your Bulls you will bee rewarded with FEE Apes Land
                  approximatey 6-8 weeks after the official launch 02 What will
                  the mint price be?.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ amount: 1, once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <Accordion
              type="single"
              collapsible
              className="bg-neutral-900 px-4"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-2xl font-bold uppercase text-white">
                  How secure is this token
                </AccordionTrigger>
                <AccordionContent className="text-lg text-white text-opacity-80">
                  We want provide our community with the best quality art from
                  real artist for afordable price That is why we chose mint
                  price of 0.22 ETH (+ gas fee). If you are planning to hold
                  your Bulls you will bee rewarded with FEE Apes Land
                  approximatey 6-8 weeks after the official launch 02 What will
                  the mint price be?.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>

        <div className="w-full space-y-6">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ amount: 1, once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <Accordion
              type="single"
              collapsible
              className="bg-neutral-900 px-4"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-2xl font-bold uppercase text-white">
                  When is the official launch
                </AccordionTrigger>
                <AccordionContent className="text-lg text-white text-opacity-80">
                  We want provide our community with the best quality art from
                  real artist for afordable price That is why we chose mint
                  price of 0.22 ETH (+ gas fee). If you are planning to hold
                  your Bulls you will bee rewarded with FEE Apes Land
                  approximatey 6-8 weeks after the official launch 02 What will
                  the mint price be?.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ amount: 1, once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <Accordion
              type="single"
              collapsible
              className="bg-neutral-900 px-4"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-2xl font-bold uppercase text-white">
                  What will b the mint price be
                </AccordionTrigger>
                <AccordionContent className="text-lg text-white text-opacity-80">
                  We want provide our community with the best quality art from
                  real artist for afordable price That is why we chose mint
                  price of 0.22 ETH (+ gas fee). If you are planning to hold
                  your Bulls you will bee rewarded with FEE Apes Land
                  approximatey 6-8 weeks after the official launch 02 What will
                  the mint price be?.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ amount: 1, once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <Accordion
              type="single"
              collapsible
              className="bg-neutral-900 px-4"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-2xl font-bold uppercase text-white">
                  How does the raffle work
                </AccordionTrigger>
                <AccordionContent className="text-lg text-white text-opacity-80">
                  We want provide our community with the best quality art from
                  real artist for afordable price That is why we chose mint
                  price of 0.22 ETH (+ gas fee). If you are planning to hold
                  your Bulls you will bee rewarded with FEE Apes Land
                  approximatey 6-8 weeks after the official launch 02 What will
                  the mint price be?.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
