import { Task } from "../../../../shared/types/types";

type TaskId = string;
type TaskPriority = string;

export const CHANGE_TASK_PRIORITY_START = "CHANGE_TASK_PRIORITY_START";
export const CHANGE_TASK_PRIORITY_SUCCESS = "CHANGE_TASK_PRIORITY_SUCCESS";
export const CHANGE_TASK_PRIORITY_ERROR = "CHANGE_TASK_PRIORITY_ERROR";

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

export const changeTaskPriorityError = (payload: any) => ({
  type: CHANGE_TASK_PRIORITY_ERROR,
  payload,
});
