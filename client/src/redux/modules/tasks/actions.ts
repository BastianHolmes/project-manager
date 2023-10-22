import { Task } from "../../../shared/types/types";
import {
  ADD_DESCRIPTION_TASK_ERROR,
  ADD_DESCRIPTION_TASK_START,
  ADD_DESCRIPTION_TASK_SUCCESS,
  CHANGE_TASK_PRIORITY_ERROR,
  CHANGE_TASK_PRIORITY_START,
  CHANGE_TASK_PRIORITY_SUCCESS,
  CHANGE_TASK_STATUS_ERROR,
  CHANGE_TASK_STATUS_START,
  CHANGE_TASK_STATUS_SUCCESS,
  CREATE_TASKS_ERROR,
  CREATE_TASKS_START,
  CREATE_TASKS_SUCCESS,
  LOAD_TASKS_START,
  SET_TASKS,
} from "../../actionTypes";
import {
  addDescriptionTaskErrorAction,
  addDescriptionTaskStartAction,
  addDescriptionTaskSuccessAction,
  changeTaskStatusErrorAction,
  changeTaskStatusStartAction,
  changeTaskStatusSuccessAction,
  createTaskErrorAction,
  createTaskSuccessAction,
} from "./types";

type TaskId = string;
type TaskCount = number;
type TaskTitle = string;
type TaskStatus = string;
type ProjectId = number;
type TaskDescription = string;
type NewTaskStatus = string;
type TaskNumber = number;
type TaskPriority = string;

export const LoadTask = (): { type: typeof LOAD_TASKS_START } => ({
  type: LOAD_TASKS_START,
});

export const setTasks = (
  payload: Array<Task>
): { type: typeof SET_TASKS; payload: Array<Task> } => ({
  type: SET_TASKS,
  payload,
});

export const createTaskStart = (
  count: TaskCount,
  title: TaskTitle,
  status: TaskStatus,
  project_id: ProjectId
): {
  type: typeof CREATE_TASKS_START;
  payload: {
    count: TaskCount;
    title: TaskTitle;
    status: TaskStatus;
    project_id: ProjectId;
    created_at: string;
  };
} => ({
  type: CREATE_TASKS_START,
  payload: {
    count,
    title,
    status,
    project_id,
    created_at: new Date().toISOString(),
  },
});

export const createTaskSuccess = (payload: Task): createTaskSuccessAction => ({
  type: CREATE_TASKS_SUCCESS,
  payload,
});

export const createTaskError = (payload: any): createTaskErrorAction => ({
  type: CREATE_TASKS_ERROR,
  payload,
});

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
