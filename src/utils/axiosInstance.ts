import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.API_URL || "SERVER_URL",
  withCredentials: true,
});

export default axiosInstance;
