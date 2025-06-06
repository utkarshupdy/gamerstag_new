import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const query = `*[_type == "gallery" && !(_id in path("drafts.**"))]{
    _id, 
    title, 
    slug, 
    images[]{
    "imageUrl": image.asset->url,
     url
    }
    }`;

    const gallery = await client.fetch(query);

    return NextResponse.json({ gallery }, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
