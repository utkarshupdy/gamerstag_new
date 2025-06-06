"use client";
import { useState } from "react";
import faqData from "../data/faqData.json";
import Button from "@/components/buttons/Button";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="p-22 m-2 text-white">
      {/* Header Section */}
      <div
        className="bg-cover bg-center py-20 text-center"
        style={{
          backgroundImage: "url('/faq-page-assets/images/image.png')", // Update with your image path
        }}
      >
        <h1 className="mb-2 text-4xl font-bold text-white">FAQ</h1>
        <p className="text-gray-300">Home — FAQ</p>
      </div>

      {/* Discover Section */}
      <div className="mt-8 text-center">
        <h2 className="text-3xl font-bold">DISCOVER THE ANSWERS</h2>
        <div className="mt-4 flex justify-center gap-3">
          <Button color={"main"} text={"About App"} />
          <Button color={"white"} text={"Tournaments"} />
          <Button color={"main"} text={"Esports"} />
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-8">
        {faqData.map(({ answer, question }, index) => (
          <div
            key={index}
            className="cursor-pointer border-b border-gray-700 py-4"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex items-center justify-between">
              <h3
                className={`text-lg font-bold ${
                  activeIndex === index ? "text-main" : "text-white"
                }`}
              >
                {question}
              </h3>
              <span className="text-main">
                {activeIndex === index ? "▲" : "▼"}
              </span>
            </div>
            {activeIndex === index && (
              <p className="mt-2 text-gray-400">{answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
