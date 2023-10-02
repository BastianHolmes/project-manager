import { Project } from "../../../types/projectsTypes";
import {
  CREATE_PROJECT_ERROR,
  CREATE_PROJECT_START,
  CREATE_PROJECT_SUCCESS,
  GET_PROJECTS,
  SET_PROJECTS,
} from "../../actionTypes";

export interface SetProjectsAction {
  type: typeof SET_PROJECTS;
  payload: Project;
}

export interface GetProjectsAction {
  type: typeof GET_PROJECTS;
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
  | SetProjectsAction
  | GetProjectsAction
  | CreateProjectStartAction
  | CreateProjectSuccessAction
  | CreateProjectErrorAction;
