"use client";

import { Button } from "@/components/ui/button"; // from shadcn
import { Textarea } from "@/components/ui/textarea"; // from shadcn
import { Input } from "@/components/ui/input"; // from shadcn
import * as Yup from "yup"; // for form validation
import { useFormik } from "formik"; // building form
import { useState } from "react";
import Image from "next/image";

export default function SendMessage() {
  interface FormValues {
    name: string;
    email: string;
    subject: string;
    message: string;
    image: File | null;
  }

  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Mention Your Name"),
    email: Yup.string()
      .email("Please Enter The Valid Email")
      .required("Mention Your Email"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Add The Message"),
    image: Yup.mixed().nullable(),
  });

  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      image: null,
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("email", values.email);
        formData.append("subject", values.subject);
        formData.append("message", values.message);

        if (values.image) {
          formData.append("image", values.image);
        }

        console.log("Form submitted with values:", values);
      } catch (error) {
        console.error("Error while submitting the form:", error);
        setSubmitting(false);
      }
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      formik.setFieldValue("image", file);
      setPreviewImage(URL.createObjectURL(file)); // Generate a preview URL for the image
    }
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="mx-4 flex flex-col justify-between space-y-8 py-4 lg:mx-auto lg:w-[55%] lg:space-y-4"
    >
      {/* Image Upload and Preview */}
      <div className="flex flex-col items-center space-y-4 lg:flex-row lg:gap-6 lg:space-y-0">
        <div className="w-full lg:w-1/2">
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:rounded-full file:border-0 file:bg-black file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-white hover:file:text-black"
          />
          {formik.touched.image && formik.errors.image && (
            <div className="mt-2 text-sm text-red-500">
              {formik.errors.image}
            </div>
          )}
        </div>
        {/* Preview Box */}
        <div className="relative flex h-[250px] w-full items-center justify-center overflow-hidden rounded-md border-2 border-dashed border-gray-500 lg:w-[220px]">
          {previewImage ? (
            <Image
              src={previewImage}
              width={100}
              height={100}
              alt="Preview"
              className="h-full w-full object-cover"
              style={{ aspectRatio: "4/5" }} // Enforcing 4:5 ratio
            />
          ) : (
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-16 w-16 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9A3.75 3.75 0 1112 5.25 3.75 3.75 0 0115.75 9zM7.5 15.75a5.25 5.25 0 0110.5 0v1.5a.75.75 0 01-.75.75h-9a.75.75 0 01-.75-.75v-1.5z"
                />
              </svg>
              <span className="mt-2 text-sm text-gray-500">
                Upload your picture
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Form Heading */}
      <div className="text-center lg:text-left">
        <span className="block uppercase text-red-500">Let&apos;s Chat</span>
        <h1 className="mt-2 text-2xl uppercase text-white md:text-3xl lg:text-5xl">
          <span className="font-semibold">Send a</span> message
        </h1>
      </div>

      {/* Name and Email Fields */}
      <div className="gap-6 space-y-8 lg:flex lg:space-y-0">
        <div className="w-full">
          <Input
            type="text"
            placeholder="Name"
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full rounded-full py-7 pl-8 text-lg text-white"
          />
          {formik.touched.name && formik.errors.name && (
            <div className="mt-2 text-sm text-red-500">
              {formik.errors.name}
            </div>
          )}
        </div>
        <div className="w-full">
          <Input
            type="email"
            placeholder="Email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full rounded-full py-7 pl-8 text-lg text-white"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="mt-2 text-sm text-red-500">
              {formik.errors.email}
            </div>
          )}
        </div>
      </div>

      {/* Subject Field */}
      <div>
        <Input
          type="text"
          placeholder="Subject"
          id="subject"
          value={formik.values.subject}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full rounded-full py-7 pl-8 text-lg text-white"
        />
        {formik.touched.subject && formik.errors.subject && (
          <div className="mt-2 text-sm text-red-500">
            {formik.errors.subject}
          </div>
        )}
      </div>

      {/* Message Field */}
      <div>
        <Textarea
          placeholder="Message"
          id="message"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full rounded-3xl py-4 pl-8 text-lg text-white"
        />
        {formik.touched.message && formik.errors.message && (
          <div className="mt-2 text-sm text-red-500">
            {formik.errors.message}
          </div>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="outline"
        className="w-full rounded-full bg-black py-6 text-lg text-white transition-colors duration-500 hover:bg-white hover:text-black"
      >
        Let&apos;s Talk
      </Button>
    </form>
  );
}
