'use client';
import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import faqData from "../data/faq.json";

export default function FAQSection() {
  return (
    <div className="px-4 mx-auto max-w-[1280px]">
      {/* Header Section */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ amount: 1, once: true, margin: "0px 0px -10% 0px" }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="space-y-2 text-center"
      >
        <span className="font-bold uppercase text-blue-500 text-sm md:text-base">
          Questions & Answers
        </span>
        <h1 className="text-3xl md:text-5xl font-bold uppercase text-white">
          Frequently Asked Questions
        </h1>
      </motion.div>

      {/* FAQ Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ amount: 1, once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="w-full"
          >
            <Accordion
              type="single"
              collapsible
              className="bg-neutral-900 p-4 rounded-md shadow-lg"
            >
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="text-lg md:text-2xl font-bold uppercase text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-lg text-white text-opacity-80 whitespace-pre-line">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
