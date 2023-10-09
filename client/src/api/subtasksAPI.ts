import API from ".";

export const getSubtasks = async (task_id: string) => {
  try {
    const { data } = await API.get(`/subtasks/${task_id}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const createSubtasks = async (task_id: string, title: string) => {
  try {
    const { data } = await API.post("/subtasks", { task_id, title });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteSubtasks = async (subtaskID: string) => {
  try {
    const { data } = await API.delete(`/subtasks/${subtaskID}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const updateSubtasks = async (done: boolean, id: string) => {
  try {
    const { data } = await API.put(`/subtasks/${id}`, { boolean });
    return data;
  } catch (err) {
    console.log(err);
  }
};
