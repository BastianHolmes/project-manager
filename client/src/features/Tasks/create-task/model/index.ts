import { Task } from "../../../../shared/types/types";

export const CREATE_TASKS_START = "CREATE_TASKS_START",
  CREATE_TASKS_SUCCESS = "CREATE_TASKS_SUCCESS",
  CREATE_TASKS_ERROR = "CREATE_TASKS_ERROR";

type TaskCount = number;
type TaskTitle = string;
type TaskStatus = string;
type ProjectId = number;

export interface createTaskSuccessAction {
  type: typeof CREATE_TASKS_SUCCESS;
  payload: Task;
}

export interface createTaskErrorAction {
  type: typeof CREATE_TASKS_ERROR;
  payload: any;
}

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
