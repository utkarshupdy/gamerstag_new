import { Post, PostResponse } from "@/lib/types/postTypes";
import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  try {
    const slug = (await params).slug;

    const query = `*[_type == "post" && slug.current == $slug && !(_id in path("drafts.**"))][0]{
        _id, 
        title, 
        slug, 
        author, 
        categories[]->{title},
        "imageUrl": mainImage.asset->url, 
        "altText": mainImage.alt, 
        body, 
        author-> { name, "authorImage": image.asset->url, linkedinLink }, 
        publishedAt, 
        "comments": *[_type == "comment" && post._ref == ^._id]{
        name,
        email,
        content,
        _createdAt,
        },
        "commentCount": count(*[_type == "comment" && post._ref == ^._id])
      }`;
    
    const post: Post[] = await client.fetch(query, { slug });
    return NextResponse.json<PostResponse>({ post }, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json<PostResponse>(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
