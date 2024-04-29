import axios from "axios";
import config from "./config";

const API_URL = config.api;

axios.defaults.baseURL = API_URL;

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// axiosInstance.interceptors.request.use(
//   async (cfg) => {
//     const token = localStorage.getItem("token");
//     if (!token) return cfg;

//     cfg.headers["Authorization"] = `Bearer ${token}`;
//     return cfg;
//   },
//   (error) => {
//     Promise.reject(error);
//   }
// );

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
