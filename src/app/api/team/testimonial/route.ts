import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const query = `*[_type == "testimonial" && status == "accepted" && !(_id in path("drafts.**"))]{
    _id, 
    name, 
    status, 
    type, 
    id, 
    rating, 
    testimoniallink, 
    sociallink, 
    featureSelection, 
    comment
    }`;

    const testimonials = await client.fetch(query);

    return NextResponse.json({ testimonials }, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
