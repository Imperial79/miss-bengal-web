import axios from "axios";

export const baseUrl = "https://api.missbengal.in";

export const dbObject = axios.create({
  withCredentials: true,
  baseURL: baseUrl,
});
