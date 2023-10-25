import { Subtask } from "../../../shared/types/types";

export const LOAD_SUBTASKS_START = "LOAD_SUBTASKS_START",
  LOAD_SUBTASKS_SUCCESS = "LOAD_SUBTASKS_SUCCESS",
  LOAD_SUBTASKS_ERROR = "LOAD_SUBTASKS_ERROR";
export const loadSubtasksStart = (
  id: string
): { type: string; payload: Subtask } => ({
  type: LOAD_SUBTASKS_START,
  payload: {
    id,
  },
});

export const loadSubtasksSuccess = (
  payload: any
): { type: string; payload: any } => ({
  type: LOAD_SUBTASKS_SUCCESS,
  payload,
});

export const loadSubtasksError = (
  payload: any
): { type: string; payload: any } => ({
  type: LOAD_SUBTASKS_ERROR,
  payload,
});
