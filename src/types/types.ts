export interface Review {
  id: number;
  profileImage: string;
  rating: number;
  fit: string;
  weight: string;
  height: string;
  review: string;
  date: string;
  likes: number;
  images: string[] | null;
}
