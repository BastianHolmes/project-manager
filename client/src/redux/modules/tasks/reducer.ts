import { Task } from "../../../types/taskTypes";
import {
  CREATE_TASKS_START,
  CREATE_TASKS_SUCCESS,
  LOAD_TASKS_ERROR,
  LOAD_TASKS_START,
  LOAD_TASKS_SUCCESS,
  SET_TASKS,
} from "../../actionTypes";

const initialState = {
  tasks: [],
  loading: false,
  error: null,
};

const tasks = (
  state = initialState,
  { type, payload }: { type: string; payload: Task[] }
) => {
  switch (type) {
    case SET_TASKS:
    case LOAD_TASKS_START:
      return {
        ...state,
        loading: true,
        tasks: payload,
      };
    case CREATE_TASKS_START:
      return {
        ...state,
        loading: true,
        tasks: [...state.tasks, payload],
      };
    case CREATE_TASKS_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case LOAD_TASKS_SUCCESS:
      return {
        ...state,
        tasks: payload,
        loading: false,
      };
    case LOAD_TASKS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case "CHANGE_TASK_STATUS":
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === payload.id) {
            if (payload.taskNum >= 6) return task;
            return {
              ...task,
              status: payload.newStatus,
            };
          }
          return task;
        }),
      };

    default:
      return state;
  }
};

export default tasks;
