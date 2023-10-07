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

export const createTaskStart = (id, count, title, status, project_id) => ({
  type: CREATE_TASKS_START,
  payload: {
    id,
    count,
    title,
    status,
    project_id,
  },
});

export const createTaskSuccess = (payload) => ({
  type: CREATE_TASKS_SUCCESS,
  payload,
});

export const createTaskError = (payload) => ({
  type: CREATE_TASKS_ERROR,
  payload,
});

export const changeTaskStatus = (
  id: string,
  newStatus: string,
  taskNum: number
) => ({
  type: "CHANGE_TASK_STATUS",
  payload: {
    id,
    newStatus,
    taskNum,
  },
});
