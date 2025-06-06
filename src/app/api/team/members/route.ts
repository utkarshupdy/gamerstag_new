import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {

    const teams = `*[_type == "members" && !(_id in path("drafts.**"))]{
    _id, 
    name, 
    slug, 
    role, 
    socialMedia[]{platform, url}, 
    "imageUrl": image.asset->url
    }`

    const teamMembers = await client.fetch(teams)

    return NextResponse.json({ teamMembers }, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
