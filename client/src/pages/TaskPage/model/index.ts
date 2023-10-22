import { Task } from "../../../shared/types/types";

export const LOAD_TASKS_START = "LOAD_TASKS_START";
export const LOAD_TASKS_SUCCESS = "LOAD_TASKS_SUCCESS";
export const LOAD_TASKS_ERROR = "LOAD_TASKS_ERROR";

export const LoadTaskStart = (): { type: typeof LOAD_TASKS_START } => ({
  type: LOAD_TASKS_START,
});

export const LoadTaskSuccess = (
  payload: Array<Task>
): { type: typeof LOAD_TASKS_SUCCESS; payload: Array<Task> } => ({
  type: LOAD_TASKS_SUCCESS,
  payload,
});

export const LoadTaskError = (payload: any) => ({
  type: LOAD_TASKS_ERROR,
  payload,
});
