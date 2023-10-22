import { call, put, takeEvery } from "redux-saga/effects";
import { getProjects } from "../../../features/Projects/api/project.servise";
import { LOAD_PROJECTS_START, loadProjectsSuccess } from "../model";

export function* handleGetProjects(): Generator<any, void, any> {
  try {
    const { data }: { data: any } = yield call(getProjects);
    yield put(loadProjectsSuccess(data));
  } catch (err) {
    console.log(err);
  }
}

export function* onGetProjects(): Generator<any, void, any> {
  yield takeEvery(LOAD_PROJECTS_START, handleGetProjects);
}
