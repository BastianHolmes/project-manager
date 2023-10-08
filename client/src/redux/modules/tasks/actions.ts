import {
  ADD_DESCRIPTION_TASK_ERROR,
  ADD_DESCRIPTION_TASK_START,
  ADD_DESCRIPTION_TASK_SUCCESS,
  CHANGE_TASK_STATUS_ERROR,
  CHANGE_TASK_STATUS_SUCCESS,
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

export const addDescriptionTaskStart = (id, description) => ({
  type: ADD_DESCRIPTION_TASK_START,
  payload: {
    id,
    description,
  },
});

export const addDescriptionTaskSuccess = (payload) => ({
  type: ADD_DESCRIPTION_TASK_SUCCESS,
  payload,
});

export const addDescriptionTaskError = (payload) => ({
  type: ADD_DESCRIPTION_TASK_ERROR,
  payload,
});

export const changeTaskStatusStart = (
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

export const changeTaskStatusSuccess = (payload) => ({
  type: CHANGE_TASK_STATUS_SUCCESS,
  payload,
});

export const changeTaskStatusError = (payload) => ({
  type: CHANGE_TASK_STATUS_ERROR,
  payload,
});
