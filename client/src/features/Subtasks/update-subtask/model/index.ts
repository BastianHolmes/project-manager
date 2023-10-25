import { Subtask } from "../../../../shared/types/types";

export const DONE_SUBTASKS_START = "DONE_SUBTASKS_START",
  DONE_SUBTASKS_SUCCESS = "DONE_SUBTASKS_SUCCESS",
  DONE_SUBTASKS_ERROR = "DONE_SUBTASKS_ERROR";

export const doneSubtaskStart = (
  id: string,
  done: boolean
): { type: string; payload: Subtask } => ({
  type: DONE_SUBTASKS_START,
  payload: {
    id,
    done,
  },
});

export const doneSubtaskSuccess = (
  payload: any
): { type: string; payload: any } => ({
  type: DONE_SUBTASKS_SUCCESS,
  payload,
});

export const doneSubtaskError = (
  payload: any
): { type: string; payload: any } => ({
  type: DONE_SUBTASKS_ERROR,
  payload,
});
