import { call, put, takeEvery } from "redux-saga/effects";
import { getProjects } from "../../../features/Projects/api/project.servise";
import {
  LOAD_PROJECTS_START,
  loadProjectsError,
  loadProjectsSuccess,
} from "../model";
import { Project } from "../../../shared/types/types";

export function* handleGetProjects(): Generator<any, void, any> {
  try {
    const { data }: { data: Array<Project> } = yield call(getProjects);
    yield put(loadProjectsSuccess(data));
  } catch (err: unknown) {
    put(loadProjectsError(err));
  }
}

export function* onGetProjects(): Generator<any, void, any> {
  yield takeEvery(LOAD_PROJECTS_START, handleGetProjects);
}
