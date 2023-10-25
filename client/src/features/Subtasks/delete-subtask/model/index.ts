import { Subtask } from "../../../../shared/types/types";

export const DELETE_SUBTASKS_START = "DELETE_SUBTASKS_START",
  DELETE_SUBTASKS_SUCCESS = "DELETE_SUBTASKS_SUCCESS",
  DELETE_SUBTASKS_ERROR = "DELETE_SUBTASKS_ERROR";

export const deleteSubtaskStart = (
  id: string
): { type: string; payload: Subtask } => ({
  type: DELETE_SUBTASKS_START,
  payload: {
    id,
  },
});

export const deleteSubTaskSuccess = (
  payload: any
): { type: string; payload: any } => ({
  type: DELETE_SUBTASKS_SUCCESS,
  payload,
});

export const deleteSubtaskError = (
  payload: any
): { type: string; payload: any } => ({
  type: DELETE_SUBTASKS_ERROR,
  payload,
});
