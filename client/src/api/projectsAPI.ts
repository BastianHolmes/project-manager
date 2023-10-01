import API from ".";

export const getProjects = async () => {
  try {
    const { data } = await API.get("/");
    return data;
  } catch (err) {
    console.log(err);
  }
};
