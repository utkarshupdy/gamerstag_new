"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFormik } from "formik";
import React, { useState } from "react";
import { FaRegSquareFull, FaSquareFull } from "react-icons/fa6";

import * as Yup from "yup";
import { FaStar } from "react-icons/fa";

import MultipleSelectCheckmarks from "./checkbox-select/checkbox-select";

interface FormValues {
  name: string;
  email: string;
  id: string;
  review: string;
  testimonialLink: string;
  socialMediaLink: string;
  features: string;
  comments: string;
}

export default function ShareTestimonial() {
  const [rating, setRating] = useState<number>(0);
  const [hoverStar, setHoverStar] = useState<number | null>(null);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Mention Your Name"),
    email: Yup.string()
      .email("Please Enter The Valid Email")
      .required("Mention Your Email"),
    id: Yup.string().required("Id is required"),
    testimonialLink: Yup.string().required("Add Your Testimonial"),
    socialMediaLink: Yup.string().required("Add Your Social Media Link"),
    features: Yup.string().required("Add Features"),
    comments: Yup.string().required("Add Your Comments"),
  });

  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      id: "",
      review: "",
      testimonialLink: "",
      socialMediaLink: "",
      features: "",
      comments: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        console.log(
          "Form added sucessfully",
          values.email,
          values.comments,
          values.name,
        );
      } catch (error) {
        console.log("Error while adding comment", error);
        setSubmitting(false);
      }
    },
  });

  const handleStarClick = (index: number) => {
    setRating(index + 1);
  };

  const handleStarHoverOnMouseEnter = (index: number) => {
    setHoverStar(index + 1);
  };

  const handleStarMouseLeave = () => {
    setHoverStar(null);
  };

  const generateStars = (count: number) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(
        <FaStar
          className={`text-2xl hover:cursor-pointer xl:text-2xl ${(hoverStar || rating) > i ? "text-orange-400" : "text-gray-300"}`}
          onClick={() => handleStarClick(i)}
          onMouseEnter={() => handleStarHoverOnMouseEnter(i)}
          onMouseLeave={handleStarMouseLeave}
          key={i}
        />,
      );
    }
    return stars;
  };

  return (
    <div className="mx-auto w-[85%] pb-20">
      <h1 className="mx-2 text-center text-2xl font-bold uppercase text-main md:text-4xl lg:text-5xl">
        Share Your Testimonial
      </h1>
      <div className="mt-10 gap-10 lg:mt-20 lg:flex">
        <div className="mt-4 lg:space-y-4">
          <div className="flex gap-2">
            <span className="text-lg font-semibold uppercase text-main">
              Get in Touch
            </span>
            <div className="flex items-center gap-1 text-main text-opacity-80">
              <hr className="w-6 border border-solid border-main border-opacity-50 sm:w-10" />
              <FaRegSquareFull className="text-xs-sm" />
              <FaSquareFull className="text-xs-sm" />
            </div>
          </div>

          <h1 className="text-2xl font-bold uppercase text-white md:text-4xl lg:text-5xl">
            We&apos;re Here to Hear From You!
          </h1>
          <p className="pt-2 text-lg font-semibold text-white/50 lg:pt-4">
            Sodales ut etiam sit amet nisl purus in. Nisi scelerisque eu
            ultrices vitae auctor eu augue ut.
          </p>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col justify-between space-y-4 py-4 lg:w-[85%] lg:space-y-8"
        >
          <div className="gap-6 space-y-4 lg:space-y-8 xl:flex xl:space-y-0">
            <div className="w-full">
              <Input
                type="text"
                placeholder="Enter Your Name"
                id="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="rounded-none py-7 text-lg text-white"
              />
              {formik.touched.name && formik.errors.name && (
                <div className="text-sm text-red-500">{formik.errors.name}</div>
              )}
            </div>
            <div className="w-full">
              <Input
                type="email"
                placeholder="Enter Your Email"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="rounded-none py-7 text-lg text-white"
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-sm text-red-500">
                  {formik.errors.email}
                </div>
              )}
            </div>
          </div>

          <div className="gap-6 space-y-4 lg:space-y-8 xl:flex xl:space-y-0">
            <div className="w-full">
              <Input
                type="text"
                placeholder="Gamers Tag ID"
                id="id"
                value={formik.values.id}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="rounded-none py-7 text-lg text-white"
              />
              {formik.touched.id && formik.errors.id && (
                <div className="text-sm text-red-500">{formik.errors.id}</div>
              )}
            </div>
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Rate Us:"
                id="review"
                value={formik.values.review}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                readOnly
                className="pointer-events-none rounded-none py-7 text-lg text-white"
              />
              <div className="absolute bottom-0 left-24 top-0 flex items-center">
                <span className="flex items-center gap-2 text-white/40">
                  {generateStars(5)}
                </span>
              </div>
              {formik.touched.review && formik.errors.review && (
                <div className="relative text-sm text-red-500">
                  {formik.errors.review}
                </div>
              )}
            </div>
          </div>
          <div>
            <Input
              type="text"
              placeholder="Youtube, or drive link for testimonial video"
              id="testimonialLink"
              value={formik.values.testimonialLink}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="rounded-none py-7 text-lg text-white"
            />
            {formik.touched.testimonialLink &&
              formik.errors.testimonialLink && (
                <div className="text-sm text-red-500">
                  {formik.errors.testimonialLink}
                </div>
              )}
          </div>

          <div>
            <Input
              type="text"
              placeholder="Your Instagram / Linkedin / Youtube"
              id="socialMediaLink"
              value={formik.values.socialMediaLink}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="rounded-none py-7 text-lg text-white"
            />
            {formik.touched.socialMediaLink &&
              formik.errors.socialMediaLink && (
                <div className="text-sm text-red-500">
                  {formik.errors.socialMediaLink}
                </div>
              )}
          </div>

          <MultipleSelectCheckmarks />

          <div>
            <Textarea
              placeholder="Share Your Comments"
              id="comments"
              value={formik.values.comments}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="rounded-none py-4 text-lg text-white"
            />
            {formik.touched.comments && formik.errors.comments && (
              <div className="text-sm text-red-500">
                {formik.errors.comments}
              </div>
            )}
          </div>

          <Button
            type="submit"
            variant="outline"
            className="w-full rounded-none bg-black py-6 text-lg text-white transition-colors duration-500 hover:bg-main hover:text-white"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
