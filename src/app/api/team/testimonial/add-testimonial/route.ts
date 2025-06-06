import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

import { v4 as uuidv4 } from "uuid";

export async function POST(req: Request): Promise<NextResponse> {
  const data = await req.json();
  const {
    name,
    email,
    status = "pending",
    type = "none",
    gamersTagId,
    rating,
    testimoniallink,
    sociallink,
    featureSelection,
    comment,
  } = data;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const uniqueKeyToObject = featureSelection.map((item: any) => ({
    ...item,
    _key: uuidv4(),
  }));

  if (
    !name ||
    !email ||
    !status ||
    !type ||
    !rating ||
    !sociallink ||
    !featureSelection ||
    !comment
  ) {
    return NextResponse.json(
      { message: "All Fields are required" },
      { status: 400 },
    );
  }

  try {
    const newTestimonial = await client.create({
      _type: "testimonial",
      name,
      email,
      status,
      type,
      gamersTagId,
      rating,
      testimoniallink,
      sociallink,
      featureSelection: uniqueKeyToObject,
      comment,
    });

    return NextResponse.json(
      {
        message: "Testimonial Added Successfully",
        testimonial: newTestimonial,
      },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to add testimonial", error },
      { status: 500 },
    );
  }
}
