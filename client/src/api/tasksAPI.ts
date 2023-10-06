import API from ".";

export const getAllTasks = async () => {
  try {
    const { data } = await API.get(`/tasks`);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const postTasks = async (title: string) => {
  try {
    const { data } = await API.post(`/tasks`, title);
    return data;
  } catch (err) {
    console.log(err);
  }
};
