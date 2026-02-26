import axios from "axios";

export const tripadvisorClient = axios.create({
  baseURL: "https://api.content.tripadvisor.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    key: import.meta.env.VITE_TRIPADVISOR_API_KEY, // or process.env.REACT_APP...
  },
});
