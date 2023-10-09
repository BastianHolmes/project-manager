import {
  CREATE_SUBTASKS_ERROR,
  CREATE_SUBTASKS_START,
  CREATE_SUBTASKS_SUCCESS,
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
  },
});

export const createSubTaskSuccess = (payload) => ({
  type: CREATE_SUBTASKS_SUCCESS,
  payload,
});

export const createSubTaskError = (payload) => ({
  type: CREATE_SUBTASKS_ERROR,
  payload,
});
