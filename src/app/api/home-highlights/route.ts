import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const query = `*[_type == "homeHighlights" && !(_id in path("drafts.**"))]{
    _id, 
    homeHighlightsName, 
    slug, 
    layout, 
    content[]->{name, "image": image.asset->url}, 
    buttons[]{
    text,
    action
    }, 
    buttonOrder
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
