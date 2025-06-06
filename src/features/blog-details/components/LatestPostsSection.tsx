import Image from "next/image";
import Link from "next/link";
import { LatestPostsProps } from "@/features/blog-details/BlogDetails.type";

const LatestPostsSection: React.FC<LatestPostsProps> = ({ latestPosts }) => {
  return (
    <div className="px-6 py-10 bg-neutral-950 space-y-6">
      <h1 className="uppercase text-white text-lg font-semibold">
        Latest Posts
      </h1>
      {latestPosts.map((post, index) => (
        <Link
          key={index}
          href={`/blog-details/${post.slug.current}`}
          className="flex"
        >
          <div className="flex items-center gap-4 cursor-pointer">
            <Image
              src={post.imageUrl}
              width={1000}
              height={1000}
              alt="blog image"
              className="w-24 h-24 object-cover"
            />
            <div className="space-y-4">
              {post.categories?.map((category, index) => (
                <span
                  key={index}
                  className="text-gray-300 px-3 py-1 bg-gray-900"
                >
                  {category.title}
                </span>
              ))}
              <p className="text-white text-lg line-clamp-2">{post.title}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default LatestPostsSection;
