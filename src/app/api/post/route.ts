import { PostResponse, Post } from "@/lib/types/postTypes";
import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET(req: Request): Promise<NextResponse<PostResponse>> {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const search = searchParams.get("search") || "";

    const start = parseInt(searchParams.get("start") || "0", 10)
    const limit = 10

    let postsQuery = `*[_type == "post" && !(_id in path("drafts.**")) && (
              title match "${search || ""}*" || 
              author->name match "${search || ""}*" || 
              references(*[_type == "category" && title match "${search || ""}*"]._id)
            )] | order(publishedAt desc)[${start}..${start + limit}]{_id, title, slug, author, "imageUrl": mainImage.asset->url, "altText": mainImage.alt, body, author->{
            name}, publishedAt}`;

    if (category) {
      postsQuery = `*[_type == "post" && references(*[_type == "category" && slug.current == "${category}"]._id) && (
                title match "${search || ""}*" || 
                author->name match "${search || ""}*" || 
                references(*[_type == "category" && title match "${search || ""}*"]._id)
              )] | order(publishedAt desc)[${start}..${start + limit}] {
                _id,
                title,
                slug,
                author,
                "imageUrl": mainImage.asset->url,
                "altText": mainImage.alt,
                body,
                author->{
                  name
                },
                publishedAt
              }`;
    }

    let posts: Post[] = await client.fetch(postsQuery);

    if (posts.length === 0) {
      const allPostQuery = `*[_type == "post" && references(*[_type == "category" && slug.current == "${category}"]._id)] | order(publishedAt desc)[${start}..${start + limit}] {
        _id, title, slug, author, 
        "imageUrl": mainImage.asset->url, 
        "altText": mainImage.alt, 
        body, author->{name}, publishedAt
      }`;
      posts = await client.fetch(allPostQuery);
    }

    return NextResponse.json<PostResponse>({ posts }, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json<PostResponse>(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
