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
  id: number,
  task_id: number,
  title: string
) => ({
  type: CREATE_SUBTASKS_START,
  payload: {
    id,
    task_id,
    title,
    done: false,
  },
});

export const loadSubtasksStart = (id: number) => ({
  type: LOAD_SUBTASKS_START,
  payload: {
    id,
  },
});

export const loadSubtasksSuccess = (payload) => ({
  type: LOAD_SUBTASKS_SUCCESS,
  payload,
});

export const loadSubtasksError = (payload) => ({
  type: LOAD_SUBTASKS_ERROR,
  payload,
});

export const createSubtaskSuccess = (payload) => ({
  type: CREATE_SUBTASKS_SUCCESS,
  payload,
});

export const createSubtaskError = (payload) => ({
  type: CREATE_SUBTASKS_ERROR,
  payload,
});

export const doneSubtaskStart = (id: number, title: string, done: boolean) => ({
  type: DONE_SUBTASKS_START,
  payload: {
    id,
    title,
    done,
  },
});

export const doneSubtaskSuccess = (payload) => ({
  type: DONE_SUBTASKS_SUCCESS,
  payload,
});

export const doneSubtaskError = (payload) => ({
  type: DONE_SUBTASKS_ERROR,
  payload,
});

export const deleteSubtaskStart = (id: number) => ({
  type: DELETE_SUBTASKS_START,
  payload: {
    id,
  },
});

export const deleteSubTaskSuccess = (payload) => ({
  type: DELETE_SUBTASKS_SUCCESS,
  payload,
});

export const deleteSubtaskError = (payload) => ({
  type: DELETE_SUBTASKS_ERROR,
  payload,
});
