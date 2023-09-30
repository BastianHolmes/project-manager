import axios from "axios";

const API = axios.create({
  baseURL: "https://project-manager-tpmh.vercel.app/api/v1/projects",
});

export default API;
