import Link from "next/link";
import { BlogCategoryProps } from "@/features/blog-details/BlogDetails.type";

const BlogCategory: React.FC<BlogCategoryProps> = ({ categories }) => {
  return (
    <div className="bg-neutral-950 px-6 py-10" style={{ backgroundColor: "" }}>
      <h1 className="uppercase text-white font-semibold text-lg">Categories</h1>
      <div className="text-white text-lg mt-6 flex flex-wrap gap-2">
        {categories.map((category, index) => (
          <Link key={index} href={`/blog-list?category=${category.slug}`}>
            <span
              key={index}
              className="px-4 py-2 hover:bg-main capitalize cursor-pointer transition-colors duration-500"
            >
              {category.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogCategory;
