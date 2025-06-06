import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const slug = (await params).slug;

    const team = `*[_type == "members" && slug.current == $slug && !(_id in path("drafts.**"))][0]{
    _id, 
    name, 
    slug, 
    role, 
    headline, 
    education, 
    skills, 
    socialMedia, 
    quote, 
    bio, 
    capabilities, 
    "imageUrl": image.asset->url, 
    comments[]{comment}
    }`;

    const memberDetails = await client.fetch(team, { slug });

    return NextResponse.json({ memberDetails }, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
