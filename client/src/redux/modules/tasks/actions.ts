import { LOAD_TASKS_START, SET_TASKS } from "../../actionTypes";

export const LoadTask = () => ({
  type: LOAD_TASKS_START,
});

export const setTasks = (payload) => ({
  type: SET_TASKS,
  payload,
});

export const changeTaskStatus = (taskId: string, newStatus: string) => ({
  type: "CHANGE_TASK_STATUS",
  payload: {
    taskId,
    newStatus,
  },
});
