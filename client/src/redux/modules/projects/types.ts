import { Project } from "../../../shared/types/types";
import {
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

export type ProjectAction =
  | LoadProjectsStartsAction
  | LoadProjectsSuccessAction
  | LoadProjectsErrorAction
  | GetProjectsAction;
