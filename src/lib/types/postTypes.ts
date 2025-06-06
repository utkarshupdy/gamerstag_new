import { PortableTextProps } from "next-sanity";

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  author?: {
    name: string;
    authorImage?: string,
    linkedinLink?: string
  };
  imageUrl: string;
  altText: string;
  body: PortableTextProps["value"];
  publishedAt: string;
  categories?: {
    title: string;
  }[];
  comments?: {
    name: string,
    email: string,
    content: string,
    _createdAt: string
  }[],
  commentCount: number
}

export interface PostResponse {
  error?: string;
  message?: string;
  posts?: Post[];
  post?: Post[];
}

export interface LatestPost {
  id: string;
  title: string;
  slug: { current: string };
  author?: {
    name: string;
  };
  imageUrl: string;
  altText: string;
  body: PortableTextProps["value"];
  publishedAt: string;
}

export interface LatestPostResponse {
  error?: string;
  message?: string;
  latestPosts?: LatestPost[];
}

export interface Category {
  id: string;
  title: string;
  slug: { current: string };
  description: string;
}

export interface CategoryResponse{
    error?: string,
    message?: string,
    categories?: Category[]
}
