import axios from "axios";

export const api = axios.create({
  baseURL: "https://mymovies-api-hric.onrender.com"
});
