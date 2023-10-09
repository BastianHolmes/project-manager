import {
  CREATE_SUBTASKS_ERROR,
  CREATE_SUBTASKS_START,
  CREATE_SUBTASKS_SUCCESS,
  DELETE_SUBTASKS_START,
  DONE_SUBTASKS_START,
} from "../../actionTypes";

const initialState = {
  loading: false,
  subtasks: [],
  error: null,
};

const subtasks = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_SUBTASKS_START:
      return {
        ...state,
        loading: true,
        subtasks: [...state.subtasks, payload],
      };
    case CREATE_SUBTASKS_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case CREATE_SUBTASKS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case DONE_SUBTASKS_START:
      return {
        ...state,
        loading: true,
        subtasks: state.subtasks.map((subtask) => {
          if (subtask.id === payload.id) {
            return {
              ...subtask,
              done: true,
            };
          }
          return subtask;
        }),
      };
    case DELETE_SUBTASKS_START:
      return {
        ...state,
        loading: true,
        subtasks: state.subtasks.filter((subtask) => subtask.id !== payload.id),
      };
    default:
      return state;
  }
};

export default subtasks;
