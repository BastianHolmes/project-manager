import { Subtask } from "../../../shared/types/types";
import {
  CREATE_SUBTASKS_ERROR,
  CREATE_SUBTASKS_START,
  CREATE_SUBTASKS_SUCCESS,
  DELETE_SUBTASKS_START,
  DELETE_SUBTASKS_SUCCESS,
  DONE_SUBTASKS_START,
  DONE_SUBTASKS_SUCCESS,
  DONE_SUBTASKS_ERROR,
  DELETE_SUBTASKS_ERROR,
  LOAD_SUBTASKS_START,
  LOAD_SUBTASKS_SUCCESS,
  LOAD_SUBTASKS_ERROR,
} from "../../actionTypes";

export const createSubTaskStart = (
  id: string,
  task_id: string,
  title: string
): { type: string; payload: Subtask } => ({
  type: CREATE_SUBTASKS_START,
  payload: {
    id,
    task_id,
    title,
    done: false,
  },
});

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

export const createSubtaskStart = (
  payload: Subtask
): { type: string; payload: Subtask } => ({
  type: CREATE_SUBTASKS_START,
  payload,
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
