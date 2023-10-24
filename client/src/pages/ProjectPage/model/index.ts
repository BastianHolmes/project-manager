import { Project } from "../../../shared/types/types";

export const LOAD_PROJECTS_START = "LOAD_PROJECTS_START",
  LOAD_PROJECTS_SUCCESS = "LOAD_PROJECTS_SUCCESS",
  LOAD_PROJECTS_ERROR = "LOAD_PROJECTS_ERROR";

export interface LoadProjectsStartsAction {
  type: typeof LOAD_PROJECTS_START;
  payload: Project[];
}

export interface LoadProjectsSuccessAction {
  type: typeof LOAD_PROJECTS_SUCCESS;
  payload: Project[];
}

export interface LoadProjectsErrorAction {
  type: typeof LOAD_PROJECTS_ERROR;
  payload: unknown;
}

export const loadProjects = () => ({
  type: LOAD_PROJECTS_START,
});

export const loadProjectsSuccess = (
  payload: Project[]
): LoadProjectsSuccessAction => ({
  type: LOAD_PROJECTS_SUCCESS,
  payload,
});

export const loadProjectsError = (
  payload: unknown
): LoadProjectsErrorAction => ({
  type: LOAD_PROJECTS_ERROR,
  payload,
});
