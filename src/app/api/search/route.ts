import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";
import { SearchResponse, Post } from "@/lib/types/searchTypes";

export async function GET(req: Request): Promise<NextResponse<SearchResponse>>  {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query")?.trim().toLowerCase();

  if (!query) {
    return NextResponse.json<SearchResponse>(
      { error: "Query parameter is required" },
      { status: 400 },
    );
  }

  try {
    const searchQuery = `*[_type == "post" && !(_id in path("drafts.**")) && 
      (title match "${query}*" || 
      author->name match "${query}*" || 
      references(*[_type == "category" && title match "${query}*"]._id))
    ] {
      _id,
      title,
      "slug": slug.current,
      author->{
        name
      },
      "category": categories[]->title
    }[0..4]`;

    const suggestions: Post[] = await client.fetch(searchQuery);

    // if (suggestions.length === 0) {
    //   return NextResponse.json(
    //     { message: "No results found" },
    //     { status: 404 }
    //   );
    // }

    return NextResponse.json<SearchResponse>({suggestions}, { status: 200 });
  } catch (error) {
    console.error("Search API Error:", error);
    return NextResponse.json<SearchResponse>(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
