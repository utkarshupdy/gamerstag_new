// All The Componenets Are Imported Here
import HeroSection from "@/features/blogs/components/HeroSection";
import AllBlogList from "@/features/blogs/components/AllBlogList";
import SearchBlogList from "@/features/blogs/components/SearchBlogList";
import BlogListCategory from "@/features/blogs/components/BlogListCategory";
import LatestBlogList from "@/features/blogs/components/LatestBlogList";
import { BlogListProps, SearchParams } from "@/features/blogs/Blogs.types";

export const revalidate = 60;

async function fetchPosts({ category, search }: SearchParams) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/post?category=${category || ""}&search=${search || ""}`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const data = await response.json();
    return data.posts || [];
  } catch (error) {
    console.error("Error fetching posts:", error);
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

export default async function Blogs({ searchParams }: BlogListProps) {
  const { category, search } = await searchParams;

  const posts = await fetchPosts({ category, search });
  const categories = await fetchCategories();
  const latestPosts = await fetchLatestPosts();

  return (
    <div className="bg-primary">
      <HeroSection />
      <div className="mt-32 flex justify-center px-4 md:px-10">
        <div className="justify-between gap-6 lg:flex lg:w-[90%]">
          <div className="lg:w-[70%]">
            <AllBlogList posts={posts} search={search} category={category} />
          </div>
          <div className="lg:w-[30%]">
            <SearchBlogList />
            <BlogListCategory categories={categories} />
            <LatestBlogList latestPosts={latestPosts} />
          </div>
        </div>
      </div>
    </div>
  );
}
