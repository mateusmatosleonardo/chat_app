import { API_URL } from "@env";
import { getToken } from "./userStorage";
import axios, { InternalAxiosRequestConfig } from "axios";

export const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  const token: string = await getToken();
  console.log(`Token -> ${token}`);
  if (!token) return config;
  if (config.headers) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
