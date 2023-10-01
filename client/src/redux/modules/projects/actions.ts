import { CREATE_PROJECT, GET_PROJECTS, SET_PROJECTS } from "../../constants";

export const setProjects = (payload) => ({
  type: SET_PROJECTS,
  payload,
});

export const createProjects = (payload) => ({
  type: CREATE_PROJECT,
  payload,
});
