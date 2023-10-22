import API from "../../../shared/api/api.service";

export const getProjects = async () => {
  try {
    const { data } = await API.get("/projects");
    return data;
  } catch (err) {
    console.log(err);
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
