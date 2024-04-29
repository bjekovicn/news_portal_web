import axios from "axios";
import config from "./config";

const API_URL = config.api;
console.log("BASE URL: ", API_URL);

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
