export interface User {
  id: number;
  name: string;
  height: number;
  weight: number;
  profile_image: string;
}

export interface Review {
  id: number;
  user_id: number;
  rating: number;
  review_text: string;
  likes: number;
  review_photo: string[] | null;
  created_at: string;
  updated_at: string;
  user: User;
}

export interface ReviewReply {
  id: number;
  review_id: number;
  user: {
    id: number;
    username: string;
    email: string;
  };
  comment_text: string;
  is_liked: boolean;
  created_at: string;
  updated_at: string;
}
