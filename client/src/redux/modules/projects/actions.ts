import { Project } from "../../../types/types";
import {
  CREATE_PROJECT_ERROR,
  CREATE_PROJECT_START,
  CREATE_PROJECT_SUCCESS,
  GET_PROJECTS_START,
  LOAD_PROJECTS_START,
  LOAD_PROJECTS_SUCCESS,
} from "../../actionTypes";
import {
  LoadProjectsStartsAction,
  LoadProjectsSuccessAction,
  GetProjectsAction,
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

export const createProjectStart = (
  created_at: string,
  title: string,
  id: number
) => ({
  type: CREATE_PROJECT_START,
  payload: {
    created_at,
    title,
    id,
  },
});

export const createProjectSuccess = (
  project: Project
): CreateProjectSuccessAction => ({
  type: CREATE_PROJECT_SUCCESS,
  payload: project,
});

export const createProjectError = (error: any): CreateProjectErrorAction => ({
  type: CREATE_PROJECT_ERROR,
  payload: error,
});
