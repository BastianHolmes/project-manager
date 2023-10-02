import {
  CREATE_PROJECT_ERROR,
  CREATE_PROJECT_START,
  CREATE_PROJECT_SUCCESS,
  GET_PROJECTS,
  SET_PROJECTS,
} from "../../actionTypes";
import {
  SetProjectsAction,
  GetProjectsAction,
  CreateProjectStartAction,
  CreateProjectSuccessAction,
  CreateProjectErrorAction,
} from "./types";

export const setProjects = (payload: any): SetProjectsAction => ({
  type: SET_PROJECTS,
  payload,
});

export const getProjects = (): GetProjectsAction => ({
  type: GET_PROJECTS,
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
