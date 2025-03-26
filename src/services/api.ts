import axiosInstance from "./axiosInstance";

export const fetchProductById = async (id: number) => {
  try {
    const { data } = await axiosInstance.get(`/product/${id}`);

    return data.data;
  } catch (error) {
    console.error("Error fetching product:", error);
  }
};

export const fetchReviewProduct = async (id: number) => {
  try {
    const { data } = await axiosInstance.get(`/product-review/${id}`);

    return data;
  } catch (error) {
    console.error("Error fetching product:", error);
  }
};
