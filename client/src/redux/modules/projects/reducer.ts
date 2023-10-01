import {
  CREATE_PROJECT_ERROR,
  CREATE_PROJECT_START,
  CREATE_PROJECT_SUCCESS,
  SET_PROJECTS,
} from "../../actionTypes";

const initialState = {
  projects: [],
  loading: false,
  error: null,
  projectId: "",
};

const projects = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PROJECTS:
      return {
        ...state,
        projects: payload,
      };
    case CREATE_PROJECT_START:
      return {
        ...state,
        loading: true,
      };
    case CREATE_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        projectId: payload.projectId,
      };
    case CREATE_PROJECT_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default projects;
