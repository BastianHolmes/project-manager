import { Task } from "../../../shared/types/types";
import {
  CHANGE_TASK_STATUS_ERROR,
  CHANGE_TASK_STATUS_START,
  CHANGE_TASK_STATUS_SUCCESS,
} from "../change-status-task/model";
import { CREATE_TASKS_START, CREATE_TASKS_SUCCESS } from "../create-task/model";
import {
  LOAD_TASKS_ERROR,
  LOAD_TASKS_START,
  LOAD_TASKS_SUCCESS,
} from "../../../pages/TaskPage/model";
import {
  ADD_DESCRIPTION_TASK_ERROR,
  ADD_DESCRIPTION_TASK_START,
  ADD_DESCRIPTION_TASK_SUCCESS,
} from "../add-description-task/model";
import {
  CHANGE_TASK_PRIORITY_ERROR,
  CHANGE_TASK_PRIORITY_START,
  CHANGE_TASK_PRIORITY_SUCCESS,
} from "../change-priority-task/model";

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
    case LOAD_TASKS_START:
      return {
        ...state,
        loading: true,
      };
    case LOAD_TASKS_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: payload as Task[],
      };
    case LOAD_TASKS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload as string,
      };
    case CREATE_TASKS_START:
      return {
        ...state,
        loading: true,
        tasks: [...state.tasks, payload as Task],
      };
    case CREATE_TASKS_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: state.tasks.slice(0, -1).concat(payload as Task),
      };
    case CHANGE_TASK_STATUS_START:
      return {
        ...state,
        loading: true,
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
    case CHANGE_TASK_PRIORITY_START: {
      return {
        ...state,
        loading: false,
        tasks: state.tasks.map((task) => {
          if (task.id === (payload as Task).id) {
            return {
              ...task,
              priority: (payload as Task).priority,
            };
          }
          return task;
        }),
      };
    }
    case CHANGE_TASK_PRIORITY_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case CHANGE_TASK_PRIORITY_ERROR: {
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
