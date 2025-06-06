export interface Post {
  _id: string;
  title: string;
  slug: string;
  author: {
    name: string;
  };
  category: string[];
}

export interface SearchResponse {
  error?: string;
  message?: string;
  suggestions?: Post[];
}
