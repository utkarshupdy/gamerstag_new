import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const game = `*[_type == "games" && !(_id in path("drafts.**"))]{
    _id, 
    name, 
    slug, 
    publisherName, 
    gamerDescription, 
    "imageUrl": image.asset->url, 
    launchDate
    }`;

    const games = await client.fetch(game);

    return NextResponse.json({ games }, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
