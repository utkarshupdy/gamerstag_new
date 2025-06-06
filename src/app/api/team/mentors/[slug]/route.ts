import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const slug = (await params).slug;

    const mentor = `*[_type == "mentors" && slug.current == $slug && !(_id in path("drafts.**"))][0]{
    _id, 
    name, 
    slug, 
    role, 
    skills, 
    socialMedia, 
    "imageUrl": image.asset->url,
     bio, 
     thoughts, 
     comments[]{comment}
    }`;

    const mentorDetails = await client.fetch(mentor, { slug });

    return NextResponse.json({ mentorDetails }, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
