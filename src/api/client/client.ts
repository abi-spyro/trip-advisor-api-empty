import axios from "axios";

export const tripadvisorClient = axios.create({
  baseURL: "https://stackblitz-starters-zfkn7q6w.vercel.app/api/tripadvisor/",
  headers: {
    "Content-Type": "application/json",
  },
});
