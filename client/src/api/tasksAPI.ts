import API from ".";

export const getTasks = async (id: string) => {
  try {
    const { data } = await API.get(`/${id}/tasks`);
    return data;
  } catch (err) {
    console.log(err);
  }
};
