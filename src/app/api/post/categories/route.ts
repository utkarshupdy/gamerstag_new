import { Category, CategoryResponse } from "@/lib/types/postTypes";
import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const categoriesQuery = `*[_type == "category" && !(_id in path("drafts.**"))]{
        _id,
        title,
        "slug": slug.current,
        description,
      }`;
    const categories: Category[] = await client.fetch(categoriesQuery);
    return NextResponse.json<CategoryResponse>({ categories }, { status: 200 });
  } catch (error) {
    console.error("Error fetching posts by category:", error);
    return NextResponse.json<CategoryResponse>(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
