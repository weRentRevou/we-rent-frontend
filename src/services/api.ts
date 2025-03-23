import axiosInstance from "./axiosInstance";

export const fetchProductById = async (id: number) => {
  const { data } = await axiosInstance.get(`/product/${id}`);

  return data;
};
