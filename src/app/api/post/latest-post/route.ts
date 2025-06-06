import { LatestPost, LatestPostResponse } from "@/lib/types/postTypes";
import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const latestPostsQuery = `*[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc) [0..2]{_id, title, slug, "imageUrl": mainImage.asset->url, "altText": mainImage.alt, publishedAt}`;
    const latestPosts: LatestPost[] = await client.fetch(latestPostsQuery);

    return NextResponse.json<LatestPostResponse>({ latestPosts }, { status: 200 });
  } catch (error) {
    console.error("Error fetching latest posts:", error);
    return NextResponse.json<LatestPostResponse>({ error: "Internal Server Error" }, { status: 500 });
  }
}
