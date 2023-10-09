import {
  CREATE_COMMENTS_ERROR,
  CREATE_COMMENTS_START,
  CREATE_COMMENTS_SUCCESS,
  LOAD_COMMENTS_ERROR,
  LOAD_COMMENTS_START,
  LOAD_COMMENTS_SUCCESS,
} from "../../actionTypes";

const initialState = {
  comments: [],
  loading: false,
  error: null,
};

const comments = (state = initialState, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case LOAD_COMMENTS_START:
      return {
        ...state,
        loading: true,
        comments: payload,
      };
    case LOAD_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case LOAD_COMMENTS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case CREATE_COMMENTS_START:
      return {
        ...state,
        loading: true,
        comments: [...state.comments, payload],
      };
    case CREATE_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: payload,
      };
    case CREATE_COMMENTS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default comments;
