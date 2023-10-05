import { Project } from "../../../types/projectsTypes";
import {
  CREATE_PROJECT_ERROR,
  CREATE_PROJECT_START,
  CREATE_PROJECT_SUCCESS,
  GET_PROJECTS_START,
  GET_PROJECTS_SUCCESS,
  LOAD_PROJECTS_START,
  LOAD_PROJECTS_SUCCESS,
  LOAD_TASKS_ERROR,
} from "../../actionTypes";

const initialState = {
  projects: [],
  loading: false,
  error: null,
  projectId: "",
};

const projects = (
  state = initialState,
  { type, payload }: { type: string; payload: Project }
) => {
  switch (type) {
    case GET_PROJECTS_START:
    case CREATE_PROJECT_START:
    case LOAD_PROJECTS_START:
      return {
        ...state,
        loading: true,
        projects: payload,
      };
    case GET_PROJECTS_SUCCESS:
    case LOAD_PROJECTS_SUCCESS:
    case CREATE_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        projects: payload,
      };
    case LOAD_TASKS_ERROR:
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
