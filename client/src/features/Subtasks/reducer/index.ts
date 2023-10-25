import {
  LOAD_SUBTASKS_ERROR,
  LOAD_SUBTASKS_START,
  LOAD_SUBTASKS_SUCCESS,
} from "../../../widgets/TaskModalContent/model";
import {
  CREATE_SUBTASKS_ERROR,
  CREATE_SUBTASKS_START,
  CREATE_SUBTASKS_SUCCESS,
} from "../create-subtask/model";
import {
  DELETE_SUBTASKS_ERROR,
  DELETE_SUBTASKS_START,
  DELETE_SUBTASKS_SUCCESS,
} from "../delete-subtask/model";
import {
  DONE_SUBTASKS_ERROR,
  DONE_SUBTASKS_START,
  DONE_SUBTASKS_SUCCESS,
} from "../update-subtask/model";

const initialState = {
  loading: false,
  subtasks: [],
  error: null,
};

const subtasks = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_SUBTASKS_START:
      return {
        ...state,
        loading: true,
        subtasks: payload,
      };
    case LOAD_SUBTASKS_SUCCESS:
      return {
        ...state,
        loading: false,
        subtasks: payload,
      };
    case LOAD_SUBTASKS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
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
        subtasks: state.subtasks.slice(0, -1).concat(payload),
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
              done: !payload.done,
            };
          }
          return subtask;
        }),
      };
    case DONE_SUBTASKS_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case DONE_SUBTASKS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case DELETE_SUBTASKS_START:
      return {
        ...state,
        loading: true,
        subtasks: state.subtasks.filter((subtask) => subtask.id !== payload.id),
      };
    case DELETE_SUBTASKS_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case DELETE_SUBTASKS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default subtasks;
