import {
  CREATE_SUBTASKS_ERROR,
  CREATE_SUBTASKS_START,
  CREATE_SUBTASKS_SUCCESS,
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
    default:
      return state;
  }
};

export default subtasks;
