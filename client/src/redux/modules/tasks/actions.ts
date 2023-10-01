import { LOAD_TASKS_START, SET_TASKS } from "../../actionTypes";

export const LoadTask = (payload) => ({
  type: LOAD_TASKS_START,
  payload,
});

export const setTasks = (payload) => ({
  type: SET_TASKS,
  payload,
});
