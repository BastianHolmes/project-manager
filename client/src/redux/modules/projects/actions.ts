import {
  CREATE_PROJECT_ERROR,
  CREATE_PROJECT_START,
  CREATE_PROJECT_SUCCESS,
  GET_PROJECTS,
  SET_PROJECTS,
} from "../../actionTypes";

export const setProjects = (payload) => ({
  type: SET_PROJECTS,
  payload,
});

export const getProjects = () => ({
  type: GET_PROJECTS,
});

export const createProjectStart = (project) => ({
  type: CREATE_PROJECT_START,
  payload: project,
});

export const createProjectSuccess = (projectId) => ({
  type: CREATE_PROJECT_SUCCESS,
  payload: projectId,
});

export const createProjectError = (error) => ({
  type: CREATE_PROJECT_ERROR,
  payload: error,
});
