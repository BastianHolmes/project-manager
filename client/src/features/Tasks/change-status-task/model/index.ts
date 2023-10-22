import { Task } from "redux-saga";

export const CHANGE_TASK_STATUS_START = "CHANGE_TASK_STATUS_START",
  CHANGE_TASK_STATUS_SUCCESS = "CHANGE_TASK_STATUS_SUCCESS",
  CHANGE_TASK_STATUS_ERROR = "CHANGE_TASK_STATUS_ERROR";

type NewTaskStatus = string;
type TaskNumber = number;
type TaskId = string;

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

export const changeTaskStatusStart = (
  id: TaskId,
  status: NewTaskStatus,
  taskNum: TaskNumber
): changeTaskStatusStartAction => ({
  type: CHANGE_TASK_STATUS_START,
  payload: {
    id,
    status,
    taskNum,
  },
});

export const changeTaskStatusSuccess = (
  payload: Task
): changeTaskStatusSuccessAction => ({
  type: CHANGE_TASK_STATUS_SUCCESS,
  payload,
});

export const changeTaskStatusError = (
  payload: any
): changeTaskStatusErrorAction => ({
  type: CHANGE_TASK_STATUS_ERROR,
  payload,
});
