import { LOAD_PROJECTS_START, LOAD_PROJECTS_SUCCESS } from "../../actionTypes";
import { LoadProjectsSuccessAction } from "./types";

export const loadProjects = () => ({
  type: LOAD_PROJECTS_START,
});

export const loadProjectsSuccess = (
  payload: any
): LoadProjectsSuccessAction => ({
  type: LOAD_PROJECTS_SUCCESS,
  payload,
});
