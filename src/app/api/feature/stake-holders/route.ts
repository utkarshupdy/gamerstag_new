import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const query = `*[_type == "stakeHolders" && !(_id in path("drafts.**"))]{
    _id, 
    name, 
    slug, 
    stakeHolderTitle, 
    stakeHolderNickName, 
    "imageUrl": image.asset->url, 
    quote, 
    subHeader, 
    features[]->{
    _id, 
    name, 
    description, 
    "featureImage": image.asset->url 
    }, 
    buttons[]->{
    text, 
    action
    }
    }`;

    const stakeHolders = await client.fetch(query);

    return NextResponse.json({ stakeHolders }, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
