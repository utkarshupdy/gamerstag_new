import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const query = `*[_type == "subFeatures" && !(_id in path("drafts.**"))]{
    _id, 
    name, 
    slug, 
    "imageUrl": image.asset->url, 
    launchDate, 
    tutorialsScreens[]{
    note, 
    "image": image.asset->url
    }, 
    stakeHolders[]->{
    stakeHolderName, 
    "stakeHolderImage": image.asset->url
    }, 
    playstoreLink, 
    videoExplainLink, 
    quote, 
    description, 
    benefits, 
    problemSolved
    }`;

    const subFeatures = await client.fetch(query);

    return NextResponse.json({ subFeatures }, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
