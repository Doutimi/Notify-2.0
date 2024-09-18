import { env } from "@/env";
import axios from "axios";

export const apiClient = axios.create({
  baseURL: env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// TODO: add inteceptors for automaitcally adding access token to requests apart from public routes
