import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const query = `*[_type == "features" && !(_id in path("drafts.**"))]{
    _id, 
    name, 
    slug, 
    "imageUrl": 
    image.asset->url, 
    launchDate, 
    subFeatures[]->{
    name, 
    description, 
    "imageUrl": image.asset->url
    }, 
    description
    }`;

    const features = await client.fetch(query);

    return NextResponse.json({ features }, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
