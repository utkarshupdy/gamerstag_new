import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const query = `*[_type == "temporaryFeature" && !(_id in path("drafts.**"))]{
    _id, 
    name, 
    slug, 
    featureLink
    }`;

    const temporaryFeature = await client.fetch(query);

    return NextResponse.json({ temporaryFeature }, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
