"use client";

import { Input } from "@/components/ui/input"; // From shadcn
import { Textarea } from "@/components/ui/textarea"; // From shadcn
import { Button } from "@/components/ui/button"; // From Shadcn

import { useFormik } from "formik"; // Build form
import * as Yup from "yup"; // Form Validations
import React from "react";
import { AddCommentProps } from "../BlogDetails.type";

export default function AddComment({ postId }: AddCommentProps) {

  interface FormValues {
    name: string;
    email: string;
    message: string;
  }

  // Validating form
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Mention Your Name"),
    email: Yup.string()
      .email("Please Enter The Valid Email")
      .required("Mention Your Email"),
    message: Yup.string().required("Add The Message"),
  });

  //Building Form
  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const res = await fetch("/api/comment", {
          method: "POST",
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            content: values.message,
            postId,
          }),
        });
        if (!res.ok) {
          console.log("Failed to add comment");
          return;
        }
      } catch (error) {
        console.log("Error while adding comment", error);
        setSubmitting(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-10 pt-14">
      <h1 className="text-white text-4xl font-semibold">Leave a comment</h1>
      <div className="flex items-center gap-6">
        <div className="w-full relative space-y-2">
          <label htmlFor="name"></label>
          <Input
            type="text"
            id="name"
            placeholder="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="text-white text-lg py-6 rounded-none"
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-red-500 text-sm absolute left-0">
              {formik.errors.name}
            </div>
          )}
        </div>
        <div className="w-full relative space-y-2">
          <label htmlFor="email"></label>
          <Input
            type="text"
            id="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="text-white text-lg py-6 rounded-none"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-sm absolute">
              {formik.errors.email}
            </div>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Textarea
          placeholder="Message"
          id="message"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="text-white text-lg rounded-none"
        />
        {formik.touched.message && formik.errors.message && (
          <div className="text-red-500 text-sm">{formik.errors.message}</div>
        )}
      </div>
      <Button
        type="submit"
        disabled={formik.isSubmitting}
        variant="outline"
        className="w-full hover:bg-main bg-black text-white hover:text-white py-6 transition-colors duration-500 rounded-none"
      >
        POST COMMENT
      </Button>
    </form>
  );
};