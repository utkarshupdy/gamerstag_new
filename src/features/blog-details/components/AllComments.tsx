import { FaUserCircle } from "react-icons/fa";
import React from "react";
import { AllCommentsProps } from "@/features/blog-details/BlogDetails.type";

const AllComments: React.FC<AllCommentsProps> = ({ comments }) => {
  return (
    <>
      {comments.map((comment, index) => (
        <div
          key={index}
          className="md:flex items-center gap-6 bg-zinc-900 p-6 border-b border-solid border-gray-600"
        >
          <FaUserCircle className="text-white text-7xl text-opacity-30" />
          <div className="space-y-2">
            <h2 className="text-white text-xl">{comment.name}</h2>
            <p className="text-gray-300">{comment.content}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default AllComments;
