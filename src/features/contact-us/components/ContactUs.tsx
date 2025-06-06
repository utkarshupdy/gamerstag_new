"use client";

import { useState } from "react";
import HeroSection from "@/features/contact-us/components/HeroSection";
import Button from "@/components/buttons/Button";
import Image from "next/image";

import queryFields from "../data/queryFields.json";
import queryDescriptions from "../data/queryDescriptions.json";

export default function ContactUs() {
  const [queryType, setQueryType] =
    useState<keyof typeof queryDescriptions>("Join as Mentor");
  const [formData, setFormData] = useState<{
    [key: string]: string | File | undefined;
  }>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type, files } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: type === "file" ? files?.[0] : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <div
      className="mt-4 flex min-h-screen flex-col items-center bg-black bg-cover bg-center p-2 py-10 text-white"
      style={{
        backgroundImage: "url('/campus-ambassdor-assets/images/')", // Replace with your image path
      }}
    >
      {/* General Query Section */}
      <div className="bg- mb-10 bg-opacity-50 p-6 text-center">
        <h1 className="text-4xl font-bold">{queryType.toUpperCase()}</h1>
        <p className="mt-2 text-gray-400">{queryDescriptions[queryType]}</p>
      </div>
      <HeroSection />

      {/* Content Section */}
      <div className="grid w-full max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-2">
        {/* Left Section */}
        <div className="bg-transparent p-6 shadow-lg">
          <Image
            height={100}
            width={100}
            src="/logo.svg"
            className="size-24"
            alt="logo"
          />
          <h2 className="mb-1 text-xl font-bold text-main">GET IN TOUCH</h2>
          <h3 className="mb-1 text-3xl font-extrabold">
            WE&apos;RE HERE TO CONNECT
          </h3>
          <p className="mb-6 text-gray-400">
            &quot;Whatever you need, we&apos;re here to answer — just send us a
            message.&quot;
          </p>

          <Button color={"main"} text={"Contact us"} />
        </div>

        {/* Right Section */}
        <div className="bg-black/20 p-6 shadow-lg">
          <label
            htmlFor="queryType"
            className="mb-4 block text-lg font-semibold"
          >
            Select Query Type
          </label>
          <select
            id="queryType"
            value={queryType}
            onChange={(e) =>
              setQueryType(e.target.value as keyof typeof queryDescriptions)
            }
            className="mb-6 block w-full border border-gray-600 bg-neutral-800 p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {Object.keys(queryFields).map((type) => (
              <option
                key={type}
                value={type}
                className="bg-neutral-800 text-white"
              >
                {type}
              </option>
            ))}
          </select>

          <form onSubmit={handleSubmit} className="space-y-6">
            {queryFields[queryType].map((field) => (
              <div key={field.label} className="flex flex-col">
                <label htmlFor={field.name} className="mb-2 block font-medium">
                  {field.label}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    id={field.name}
                    name={field.name}
                    onChange={handleChange}
                    className="w-full border border-gray-600 bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : field.type === "select" ? (
                  <select
                    id={field.name}
                    name={field.name}
                    onChange={handleChange}
                    className="w-full border border-gray-600 bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></select>
                ) : (
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    onChange={handleChange}
                    className="w-full border border-gray-600 bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    accept={field.type === "file" ? ".pdf" : undefined}
                  />
                )}
              </div>
            ))}
            <button
              type="submit"
              className="w-full bg-gradient-to-tr from-main via-red-700 to-red-600 px-6 py-3 font-semibold text-white hover:bg-white hover:text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
