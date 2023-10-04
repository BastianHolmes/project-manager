import {
  LOAD_TASKS_ERROR,
  LOAD_TASKS_START,
  LOAD_TASKS_SUCCESS,
  SET_TASKS,
} from "../../actionTypes";

const initialState = [];

const tasks = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TASKS:
      return payload;
    case LOAD_TASKS_START:
      return {
        ...state,
        loading: true,
      };
    case LOAD_TASKS_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: payload,
      };
    case LOAD_TASKS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case "CHANGE_TASK_STATUS":
      return state.map((task) => {
        if (task.id === payload.taskId) {
          return {
            ...task,
            status: payload.newStatus,
          };
        }
        return task;
      });
    default:
      return state;
  }
};

export default tasks;
