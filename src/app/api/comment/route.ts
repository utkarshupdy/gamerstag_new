import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";
import { CommentResponse, CommentRequest, Comment } from "@/lib/types/commentsTypes";

export async function POST(req: Request): Promise<NextResponse<CommentResponse>> {
  const data: CommentRequest = await req.json();
  const { name, email, content, postId } = data;

  if (!name || !email || !content || !postId) {
    return NextResponse.json<CommentResponse>(
      { message: "All Fields are required" },
      { status: 400 },
    );
  }

  try {
    const newComment: Comment = await client.create({
      _type: "comment",
      name,
      email,
      content,
      post: {
        _type: "reference",
        _ref: postId,
      },
    });

    return NextResponse.json<CommentResponse>(
      { message: "Comment Added Successfully", comment: newComment },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json<CommentResponse>(
      { message: "Failed to add comment", error },
      { status: 500 },
    );
  }
}
