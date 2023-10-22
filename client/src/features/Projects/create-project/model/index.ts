import { Project } from "../../../../shared/types/types";

export const CREATE_PROJECT_START = "CREATE_PROJECT_START",
  CREATE_PROJECT_ERROR = "CREATE_PROJECT_ERROR",
  CREATE_PROJECT_SUCCESS = "CREATE_PROJECT_SUCCESS";

interface CreateProjectStartAction {
  type: typeof CREATE_PROJECT_START;
  payload: Project;
}

interface CreateProjectSuccessAction {
  type: typeof CREATE_PROJECT_SUCCESS;
  payload: Project;
}

interface CreateProjectErrorAction {
  type: typeof CREATE_PROJECT_ERROR;
  payload: any;
}

export const createProjectStart = (
  created_at: string,
  title: string
): CreateProjectStartAction => ({
  type: CREATE_PROJECT_START,
  payload: {
    created_at,
    title,
    id: null,
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
