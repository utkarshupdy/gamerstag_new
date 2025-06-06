import { PortableTextProps } from "next-sanity";

export interface BlogDetailsProps {
  _id: string;
  title: string;
  slug: { current: string };
  author?: {
    name: string;
    authorImage: string;
    linkedinLink: string;
  };
  imageUrl: string;
  altText: string;
  body: PortableTextProps["value"];
  publishedAt: string;
  categories?: {
    title: string;
  }[];
}

export interface AddCommentProps {
  postId: string;
}

interface Comment {
  name: string;
  content: string;
}

export interface AllCommentsProps {
  comments: Comment[];
}

interface Category {
  title: string;
  slug: string;
}

export interface BlogCategoryProps {
  categories: Category[];
}

export interface HeaderProps {
  post: BlogDetailsProps;
  category: Category[];
  countComments: number;
}

export interface LatestPostsProps {
  latestPosts: BlogDetailsProps[];
}

export interface ReadBlogProps {
  post: BlogDetailsProps;
}

export interface SearchBlogProps {
  _id: string;
  title: string;
  author: { title: string };
  category: string;
  slug: string;
}
