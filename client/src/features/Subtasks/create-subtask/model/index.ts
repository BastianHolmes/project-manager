import { Subtask } from "../../../../shared/types/types";

export const CREATE_SUBTASKS_START = "CREATE_SUBTASKS_START",
  CREATE_SUBTASKS_SUCCESS = "CREATE_SUBTASKS_SUCCESS",
  CREATE_SUBTASKS_ERROR = "CREATE_SUBTASKS_ERROR";

export const createSubtaskStart = (
  task_id: string,
  title: string
): { type: string; payload: Subtask } => ({
  type: CREATE_SUBTASKS_START,
  payload: {
    task_id,
    title,
    done: false,
  },
});

export const createSubtaskSuccess = (
  payload: any
): { type: string; payload: any } => ({
  type: CREATE_SUBTASKS_SUCCESS,
  payload,
});

export const createSubtaskError = (
  payload: any
): { type: string; payload: any } => ({
  type: CREATE_SUBTASKS_ERROR,
  payload,
});
