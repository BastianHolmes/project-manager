import { CREATE_PROJECT, GET_PROJECTS, SET_PROJECTS } from "../../constants";

export const getProjects = () => ({
  type: GET_PROJECTS,
});

export const setProjects = (payload) => ({
  type: SET_PROJECTS,
  payload,
});

export const createProjects = (payload) => ({
  type: CREATE_PROJECT,
  payload,
});
