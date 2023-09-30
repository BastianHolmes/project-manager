import API from ".";

export const getProjects = async () => {
  try {
    const response = await API.get("/");
    return response;
  } catch (err) {
    console.log(err);
  }
};
