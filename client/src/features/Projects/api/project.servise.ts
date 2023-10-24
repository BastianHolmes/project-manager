import API from "../../../shared/api/api.service";
import { Project } from "../../../shared/types/types";

export const getProjects = async (): Promise<Project[]> => {
  try {
    const { data } = await API.get("/projects");
    return data;
  } catch (err) {
    throw new Error("Failed to get projects");
  }
};

export const postProjects = async (title: string) => {
  try {
    const { data } = await API.post("/projects", { title });
    return data;
  } catch (err) {
    console.log(err);
  }
};
