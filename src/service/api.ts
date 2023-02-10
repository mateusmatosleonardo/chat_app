import axios, { InternalAxiosRequestConfig } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const api = axios.create({
  baseURL: "http://localhost:3000",
});

// :safety_vest: instantiating the interceptor for user validation

api.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  const token = await AsyncStorage.getItem("token");
  if (!token) return config;
  if (config.headers) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
