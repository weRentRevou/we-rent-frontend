import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api-werent.ahmadcloud.my.id/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
