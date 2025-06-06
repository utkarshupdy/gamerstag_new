export interface CommentRequest {
  name: string;
  email: string;
  content: string;
  postId: string;
}

export interface Comment {
  _id: string;
  name: string;
  email: string;
  content: string;
  post: {
    _type: "reference";
    _ref: string;
  };
}

export interface CommentResponse {
  message: string;
  comment?: Comment; 
  error?: unknown;
}