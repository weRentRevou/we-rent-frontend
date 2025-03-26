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
  review_photo: string | null;
  created_at: string;
  updated_at: string;
  user: User;
}
