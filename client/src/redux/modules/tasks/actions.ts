import {
  CREATE_TASKS_ERROR,
  CREATE_TASKS_START,
  CREATE_TASKS_SUCCESS,
  LOAD_TASKS_START,
  SET_TASKS,
} from "../../actionTypes";

export const LoadTask = () => ({
  type: LOAD_TASKS_START,
});

export const setTasks = (payload) => ({
  type: SET_TASKS,
  payload,
});

export const createTaskStart = (payload) => ({
  type: CREATE_TASKS_START,
  payload,
});

export const createTaskSuccess = (payload) => ({
  type: CREATE_TASKS_SUCCESS,
  payload,
});

export const createTaskError = (payload) => ({
  type: CREATE_TASKS_ERROR,
  payload,
});

export const changeTaskStatus = (taskId: string, newStatus: string) => ({
  type: "CHANGE_TASK_STATUS",
  payload: {
    taskId,
    newStatus,
  },
});
