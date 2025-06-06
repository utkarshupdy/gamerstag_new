import { PortableTextProps } from "next-sanity";

export interface Author {
  name: string;
}

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  author?: {
    name: string;
  };
  imageUrl: string;
  altText: string;
  body: PortableTextProps["value"];
  publishedAt: string;
  categories?: {
    title: string;
  }[];
}

export interface AllBlogListProps {
  posts: Post[];
  search?: string | undefined;
  category?: string;
}

export interface BlogListCategoryProps {
  categories?: {
    title: string;
    slug: string;
  }[];
}

export interface LatestBlogListProps {
  // post: Post[];
  latestPosts: Post[];
}

export interface SearchBlogListProps {
  _id: string;
  title: string;
  author: string;
  category: string;
  slug: string;
}

export interface SearchParams {
  category?: string;
  search?: string;
  start?: number
}

export interface BlogListProps {
  searchParams: Promise<SearchParams>;
}
