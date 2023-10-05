import {
  CREATE_PROJECT_ERROR,
  CREATE_PROJECT_START,
  CREATE_PROJECT_SUCCESS,
  GET_PROJECTS_START,
  LOAD_PROJECTS_START,
  LOAD_PROJECTS_SUCCESS,
  LOAD_TASKS_ERROR,
} from "../../actionTypes";
import {
  LoadProjectsStartsAction,
  LoadProjectsSuccessAction,
  GetProjectsAction,
  CreateProjectStartAction,
  CreateProjectSuccessAction,
  CreateProjectErrorAction,
} from "./types";

export const loadProjects = (payload: any): LoadProjectsStartsAction => ({
  type: LOAD_PROJECTS_START,
  payload,
});

export const loadProjectsSuccess = (
  payload: any
): LoadProjectsSuccessAction => ({
  type: LOAD_PROJECTS_SUCCESS,
  payload,
});

export const getProjects = (): GetProjectsAction => ({
  type: GET_PROJECTS_START,
});

export const createProjectStart = (project: any): CreateProjectStartAction => ({
  type: CREATE_PROJECT_START,
  payload: project,
});

export const createProjectSuccess = (
  projectId: any
): CreateProjectSuccessAction => ({
  type: CREATE_PROJECT_SUCCESS,
  payload: projectId,
});

export const createProjectError = (error: any): CreateProjectErrorAction => ({
  type: CREATE_PROJECT_ERROR,
  payload: error,
});
