import API from "../../../shared/api/api.service";
import { Task } from "../../../shared/types/types";

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

export const addDescription = async (description: string, id: string) => {
  try {
    const { data } = await API.put(`/tasks/description`, {
      description,
      id,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const updateStatus = async (status: string, id: string) => {
  try {
    const { data } = await API.put(`/tasks/status`, {
      status,
      id,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const updatePriority = async (priority: string, id: string) => {
  try {
    const { data } = await API.put(`/tasks/priority`, {
      priority,
      id,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};
