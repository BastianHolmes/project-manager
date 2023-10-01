import API from ".";

export const getProjects = async () => {
  try {
    const { data } = await API.get("/");
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const postProjects = async (title: string) => {
  try {
    const { data } = await API.post("/", { title });
    return data;
  } catch (err) {
    console.log(err);
  }
};
