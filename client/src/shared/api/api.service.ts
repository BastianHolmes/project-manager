import axios from "axios";

const API = axios.create({
  baseURL: "https://project-manager-nine-ecru.vercel.app/api/v1/",
});

export default API;
