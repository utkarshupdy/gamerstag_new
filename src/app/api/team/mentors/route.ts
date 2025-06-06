import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const teams = `*[_type == "mentors" && !(_id in path("drafts.**"))]{
    _id, 
    name, 
    slug, 
    role, 
    "imageUrl": image.asset->url
    }`

    const teamMentors = await client.fetch(teams)

    return NextResponse.json({ teamMentors }, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
