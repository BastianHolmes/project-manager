import { Project } from "../../../types/projectsTypes";
import {
  CREATE_PROJECT_ERROR,
  CREATE_PROJECT_START,
  CREATE_PROJECT_SUCCESS,
  GET_PROJECTS_SUCCESS,
  LOAD_PROJECTS_START,
  LOAD_PROJECTS_SUCCESS,
  LOAD_PROJECTS_ERROR,
  GET_PROJECTS_START,
} from "../../actionTypes";
export interface GetProjectsAction {
  type: typeof GET_PROJECTS_START;
}

export interface GetProjectsSuccessAction {
  type: typeof GET_PROJECTS_SUCCESS;
  payload: Project;
}

export interface LoadProjectsStartsAction {
  type: typeof LOAD_PROJECTS_START;
  payload: Project;
}

export interface LoadProjectsSuccessAction {
  type: typeof LOAD_PROJECTS_SUCCESS;
  payload: Project;
}

export interface LoadProjectsErrorAction {
  type: typeof LOAD_PROJECTS_ERROR;
  payload: Project;
}

export interface CreateProjectStartAction {
  type: typeof CREATE_PROJECT_START;
  payload: Project;
}

export interface CreateProjectSuccessAction {
  type: typeof CREATE_PROJECT_SUCCESS;
  payload: Project;
}

export interface CreateProjectErrorAction {
  type: typeof CREATE_PROJECT_ERROR;
  payload: any;
}

export type ProjectAction =
  | LoadProjectsStartsAction
  | LoadProjectsSuccessAction
  | LoadProjectsErrorAction
  | GetProjectsAction
  | CreateProjectStartAction
  | CreateProjectSuccessAction
  | CreateProjectErrorAction;
