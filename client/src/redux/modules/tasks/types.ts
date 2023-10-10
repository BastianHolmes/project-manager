import { Task } from "../../../types/types";
import {
  ADD_DESCRIPTION_TASK_ERROR,
  ADD_DESCRIPTION_TASK_START,
  ADD_DESCRIPTION_TASK_SUCCESS,
  CHANGE_TASK_STATUS_ERROR,
  CHANGE_TASK_STATUS_START,
  CHANGE_TASK_STATUS_SUCCESS,
  CREATE_TASKS_ERROR,
  CREATE_TASKS_SUCCESS,
} from "../../actionTypes";

export interface createTaskSuccessAction {
  type: typeof CREATE_TASKS_SUCCESS;
  payload: Task;
}

export interface createTaskErrorAction {
  type: typeof CREATE_TASKS_ERROR;
  payload: any;
}

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

export interface changeTaskStatusStartAction {
  type: typeof CHANGE_TASK_STATUS_START;
  payload: {
    id: string;
    status: string;
    taskNum: number;
  };
}

export interface changeTaskStatusSuccessAction {
  type: typeof CHANGE_TASK_STATUS_SUCCESS;
  payload: Task;
}

export interface changeTaskStatusErrorAction {
  type: typeof CHANGE_TASK_STATUS_ERROR;
  payload: any;
}

export type TaskAction =
  | createTaskSuccessAction
  | createTaskErrorAction
  | addDescriptionTaskStartAction
  | addDescriptionTaskSuccessAction
  | addDescriptionTaskErrorAction
  | changeTaskStatusStartAction
  | changeTaskStatusSuccessAction
  | changeTaskStatusErrorAction;
