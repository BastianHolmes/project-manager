import {
  LOAD_PROJECTS_START,
  LOAD_PROJECTS_SUCCESS,
} from "../../../pages/ProjectPage/model";
import { Project } from "../../../shared/types/types";
import {
  CREATE_PROJECT_ERROR,
  CREATE_PROJECT_START,
  CREATE_PROJECT_SUCCESS,
} from "../create-project/model";

export const initialState = {
  projects: [],
  loading: false,
  error: null,
};

const projects = (
  state = initialState,
  { type, payload }: { type: string; payload: Project }
) => {
  switch (type) {
    case LOAD_PROJECTS_START:
      return {
        ...state,
        loading: true,
        projects: payload,
      };
    case LOAD_PROJECTS_SUCCESS:
      return {
        ...state,
        loading: false,
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
        projects: [...state.projects, payload],
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
