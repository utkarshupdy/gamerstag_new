// All Componenets are imported here

import AddComment from "@/features/blog-details/components/AddComment";
import AllComments from "@/features/blog-details/components/AllComments";
import BlogCategory from "@/features/blog-details/components/BlogCategory";
import Header from "@/features/blog-details/components/Header";
import LatestPostsSection from "@/features/blog-details/components/LatestPostsSection";
import ReadBlog from "@/features/blog-details/components/ReadBlog";
import SearchBlog from "@/features/blog-details/components/SearchBlog";
import { client } from "@/sanity/lib/client";
import { BlogDetailsProps } from "@/features/blog-details/BlogDetails.type";

export const revalidate = 60;
export const dynamicParams = true; // Allow fallback for dynamic routes

export async function generateStaticParams() {
  const query = `*[_type == "post"] {
    "slug": slug.current
  }`;

  const posts = await client.fetch(query);

  return posts.map((post: BlogDetailsProps) => ({
    slug: post.slug,
  }));
}

async function fetchPost(slug: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/post/${slug}`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch post");
    }
    const data = await response.json();
    return data.post || [];
  } catch (error) {
    console.error("Error fetching post:", error);
    return [];
  }
}

async function fetchCategories() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/post/categories`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }
    const data = await response.json();
    return data.categories || [];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

async function fetchLatestPosts() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/post/latest-post`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch latest posts");
    }
    const data = await response.json();
    return data.latestPosts || [];
  } catch (error) {
    console.error("Error fetching latestPosts:", error);
    return [];
  }
}

export default async function BlogDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await fetchPost(slug);

  const postId = post?._id;
  const comments = post?.comments || [];
  const countComments = post?.commentCount || [];
  const category = post?.categories || [];

  const latestPosts = await fetchLatestPosts();
  const categories = await fetchCategories();

  return (
    <div className="overflow-hidden bg-primary pb-20">
      <div>
        <Header post={post} category={category} countComments={countComments} />
        <div className="flex justify-center">
          <div className="justify-between px-10 lg:flex lg:w-[100%] xl:w-[90%]">
            <div className="space-y-4 bg-neutral-950 p-8 lg:w-[65%]">
              <ReadBlog post={post} />
              <AllComments comments={comments} />
              <AddComment postId={postId} />
            </div>

            <div className="mt-14 space-y-14 lg:mt-0 lg:w-[35%] xl:w-[30%]">
              <SearchBlog />
              <BlogCategory categories={categories} />
              <LatestPostsSection latestPosts={latestPosts} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
