import { Task } from "../../../../shared/types/types";

export const ADD_DESCRIPTION_TASK_START = "ADD_DESCRIPTION_TASK_START";
export const ADD_DESCRIPTION_TASK_SUCCESS = "ADD_DESCRIPTION_TASK_SUCCESS";
export const ADD_DESCRIPTION_TASK_ERROR = "ADD_DESCRIPTION_TASK_ERROR";

type TaskId = string;
type TaskDescription = string;

export interface addDescriptionTaskStartAction {
  type: typeof ADD_DESCRIPTION_TASK_START;
  payload: {
    id: string;
    description: string;
  };
}

export interface addDescriptionTaskSuccessAction {
  type: typeof ADD_DESCRIPTION_TASK_SUCCESS;
  payload: Task;
}

export interface addDescriptionTaskErrorAction {
  type: typeof ADD_DESCRIPTION_TASK_ERROR;
  payload: any;
}

export const addDescriptionTaskStart = (
  id: TaskId,
  description: TaskDescription
): addDescriptionTaskStartAction => ({
  type: ADD_DESCRIPTION_TASK_START,
  payload: {
    id,
    description,
  },
});

export const addDescriptionTaskSuccess = (
  payload: Task
): addDescriptionTaskSuccessAction => ({
  type: ADD_DESCRIPTION_TASK_SUCCESS,
  payload,
});

export const addDescriptionTaskError = (
  payload: unknown
): addDescriptionTaskErrorAction => ({
  type: ADD_DESCRIPTION_TASK_ERROR,
  payload,
});
