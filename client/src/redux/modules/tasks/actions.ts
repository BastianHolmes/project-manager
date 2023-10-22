import { Task } from "../../../shared/types/types";
import {
  ADD_DESCRIPTION_TASK_ERROR,
  ADD_DESCRIPTION_TASK_START,
  ADD_DESCRIPTION_TASK_SUCCESS,
  CHANGE_TASK_PRIORITY_ERROR,
  CHANGE_TASK_PRIORITY_START,
  CHANGE_TASK_PRIORITY_SUCCESS,
} from "../../actionTypes";
import {
  addDescriptionTaskErrorAction,
  addDescriptionTaskStartAction,
  addDescriptionTaskSuccessAction,
} from "./types";

type TaskId = string;
type TaskDescription = string;
type TaskPriority = string;

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
  payload: any
): addDescriptionTaskErrorAction => ({
  type: ADD_DESCRIPTION_TASK_ERROR,
  payload,
});

export const changeTaskPriorityStart = (
  id: TaskId,
  priority: TaskPriority
) => ({
  type: CHANGE_TASK_PRIORITY_START,
  payload: {
    id,
    priority,
  },
});

export const changeTaskPrioritySuccess = (payload: Task) => ({
  type: CHANGE_TASK_PRIORITY_SUCCESS,
  payload,
});

export const changeTaskPriorityError = (payload: Task) => ({
  type: CHANGE_TASK_PRIORITY_ERROR,
  payload,
});
