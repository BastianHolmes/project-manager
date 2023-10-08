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

interface TasksState {
  tasks: Task[];
  loading: boolean;
  error: string | null;
}

interface Action {
  type: string;
  payload: Task[] | Task;
}

const initialState: TasksState = {
  tasks: [],
  loading: false,
  error: null,
};

const tasks = (
  state: TasksState = initialState,
  { type, payload }: Action
): TasksState => {
  switch (type) {
    case SET_TASKS:
    case LOAD_TASKS_START:
      return {
        ...state,
        loading: true,
        tasks: payload as Task[],
      };
    case CREATE_TASKS_START:
      return {
        ...state,
        loading: true,
        tasks: state.tasks.concat(payload as Task),
      };
    case CREATE_TASKS_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case LOAD_TASKS_SUCCESS:
      return {
        ...state,
        tasks: payload as Task[],
        loading: false,
      };
    case LOAD_TASKS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload as string,
      };
    case CHANGE_TASK_STATUS_START:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === (payload as Task).id) {
            return {
              ...task,
              status: (payload as Task).status,
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
        error: payload as string,
      };
    case ADD_DESCRIPTION_TASK_START:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === (payload as Task).id) {
            return {
              ...task,
              description: (payload as Task).description,
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
        error: payload as string,
      };
    }
    default:
      return state;
  }
};

export default tasks;
