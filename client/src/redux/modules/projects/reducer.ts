import {
  GET_PROJECTS,
  CREATE_PROJECT,
  DELETE_PROJECT,
  UPDATE_PROJECT,
  SET_PROJECTS,
} from "../../constants";

const initialState = {
  projects: [],
};

const projects = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: payload,
      };
    case SET_PROJECTS:
      return {
        ...state,
        projects: payload,
      };
    case CREATE_PROJECT:
      return {
        ...state,
        projects: payload,
      };
    case DELETE_PROJECT:
      return {
        ...state,
      };
    case UPDATE_PROJECT:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default projects;
