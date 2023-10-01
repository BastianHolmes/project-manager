import { GET_PROJECTS, SET_PROJECTS } from "../../constants";

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
    default:
      return state;
  }
};

export default projects;
