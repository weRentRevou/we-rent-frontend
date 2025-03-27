import axiosInstance from "./axiosInstance";

export const fetchProductById = async (id: number) => {
  try {
    const { data } = await axiosInstance.get(`/product/${id}`);

    return data.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw Error;
  }
};

export const fetchReviewProduct = async (id: number) => {
  try {
    const { data } = await axiosInstance.get(`/product-review/${id}`);

    return data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw Error;
  }
};

export const likeReview = async (
  review_id: number,
  body: { user_id: number; is_liked: boolean; comment_text: string }
) => {
  try {
    await axiosInstance.post(`/review-reply/${review_id}`, body);
  } catch (error) {
    console.error("Error post like:", error);
    throw Error;
  }
};

export const fetchReviewReply = async (review_id: number) => {
  try {
    const { data } = await axiosInstance.get(`/review-reply/${review_id}`);
    return data.data;
  } catch (error) {
    console.error("Error fetching review reply:", error);
    throw Error;
  }
};

export const fetchFilteredReviews = async ({
  productId,
  rating,
  hasPhoto,
  sortBy,
}: {
  productId: number;
  rating?: number;
  hasPhoto?: boolean;
  sortBy?: string;
}) => {
  if (!productId) {
    console.error("Error: productId is required");
    return [];
  }

  try {
    const params = new URLSearchParams();
    if (rating) params.append("rating", rating.toString());
    if (hasPhoto) params.append("has_photo", "true");
    if (sortBy) params.append("sort_by", sortBy);
    
    const { data } = await axiosInstance.get(
      `/product-review/${productId}?${params.toString()}`
    );

    return data.reviews;
  } catch (error) {
    console.error("Error fetching filtered reviews:", error);
    return [];
  }
};
