import API from ".";

export const getAllTasks = async () => {
  try {
    const { data } = await API.get(`/tasks`);
    return data;
  } catch (err) {
    console.log(err);
  }
};
