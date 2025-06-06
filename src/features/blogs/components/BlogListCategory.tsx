"use client";

import { useRouter } from "next/dist/client/components/navigation";
import { useSearchParams } from "next/navigation";
import { BlogListCategoryProps } from "../Blogs.types";

export default function BlogListCategory({
  categories,
}: BlogListCategoryProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCategoryClick = (categorySlug: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", categorySlug);
    router.push(`/blogs?${params.toString()}`);
  };

  return (
    <div className="bg-neutral-950 p-6">
      <h1
        className="text-lg font-semibold uppercase text-white"
      >
        Categories
      </h1>
      <div
        className="mt-6 flex flex-wrap gap-2 text-lg text-white"
      >
        {categories?.map((category, index) => (
          <span
            key={index}
            className="cursor-pointer rounded-md px-4 py-2 capitalize transition-colors duration-500 hover:text-main"
            onClick={() => handleCategoryClick(category.slug)}
          >
            {category.title}
          </span>
        ))}
      </div>
    </div>
  );
}
