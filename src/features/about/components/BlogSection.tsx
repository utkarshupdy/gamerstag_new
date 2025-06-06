import Image from "next/image";
import { Button } from "@/components/ui/button"; // from shadcn
import { FiArrowUpRight } from "react-icons/fi"; //from react icons

// Getting card from shadcn
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import blogs from "../data/blogs.json";

type CardContent = {
  _id: string;
  author: string;
  title: string;
  createdAt: number;
  thumbnail: string;
};

export default function BlogSection() {
  return (
    <div className="justify-center px-4 py-[140px] lg:flex">
      <div className="max-w-screen-xl">
        <div className="mb-20 items-center justify-between space-y-5 lg:flex lg:space-y-0">
          <div>
            <span className="text-lg uppercase text-red-500">Our Blogs</span>
            <h1 className="text-3xl font-semibold uppercase text-white md:text-5xl">
              Latest <span className="font-thin">News.</span>
            </h1>
          </div>

          <div className="flex items-center">
            <Button
              variant="outline"
              className="border-1 peer/view-btn rounded-full border border-solid border-white bg-black text-white transition-colors duration-500 hover:bg-white"
            >
              VIEW ALL
            </Button>
            <div className="cursor-pointer rounded-full p-2 transition-colors duration-500 hover:bg-red-500 peer-hover/view-btn:bg-red-500 peer-hover/view-btn:transition-colors peer-hover/view-btn:duration-500">
              <FiArrowUpRight className="text-lg text-white" />
            </div>
          </div>
        </div>

        <div className="flex-grow-0 flex-nowrap justify-between gap-8 space-y-8 lg:flex lg:space-y-0">
          {blogs.map((blog) => (
            <BlogCard key={blog._id} {...blog} />
          ))}
        </div>
      </div>
    </div>
  );
}

function BlogCard({ author, createdAt, thumbnail, title }: CardContent) {
  return (
    <Card className="border border-white border-opacity-20">
      <CardHeader>
        <CardTitle>
          <p className="space-x-5 font-normal uppercase text-white opacity-70">
            <span>By: {author}</span>{" "}
            <span>{new Date(createdAt).toLocaleDateString()}</span>
          </p>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src={thumbnail}
          alt="blog1"
          className="h-80 w-full object-cover"
          width={400}
          height={400}
        />
        <p className="mt-5 text-2xl font-semibold">{title}</p>
      </CardContent>
      <CardFooter className="group/read-more w-fit space-x-4 pt-0">
        <button className="rounded-full bg-black p-4 transition-colors duration-500 hover:bg-red-500 group-hover/read-more:bg-red-500">
          <FiArrowUpRight className="text-2xl" />
        </button>
        <span className="cursor-pointer">Read More</span>
      </CardFooter>
    </Card>
  );
}
