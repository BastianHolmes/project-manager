import { Task } from "../../../types/taskTypes";
import {
  ADD_DESCRIPTION_TASK_ERROR,
  ADD_DESCRIPTION_TASK_START,
  ADD_DESCRIPTION_TASK_SUCCESS,
  CHANGE_TASK_STATUS_ERROR,
  CHANGE_TASK_STATUS_START,
  CHANGE_TASK_STATUS_SUCCESS,
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
    case CHANGE_TASK_STATUS_START:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === payload.id) {
            return {
              ...task,
              status: payload.newStatus,
            };
          }
          return task;
        }),
      };
    case CHANGE_TASK_STATUS_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case CHANGE_TASK_STATUS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case ADD_DESCRIPTION_TASK_START:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          console.log(task);
          console.log(payload);
          if (task.id === payload.id) {
            return {
              ...task,
              description: payload.description,
            };
          }
          return task;
        }),
      };
    case ADD_DESCRIPTION_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case ADD_DESCRIPTION_TASK_ERROR: {
      return {
        ...state,
        loading: false,
        error: payload,
      };
    }
    default:
      return state;
  }
};

export default tasks;
