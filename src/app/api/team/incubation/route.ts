import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const incubation = `*[_type == "incubation" && !(_id in path("drafts.**"))]{
    _id, 
    title, 
    slug, 
    "imageUrl": image.asset->url, 
    logo, 
    link, 
    description}`;

    const incubations = await client.fetch(incubation);

    return NextResponse.json({ incubations }, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
