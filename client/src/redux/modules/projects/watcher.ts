import { put, call, takeEvery, fork, take } from "redux-saga/effects";
import { LOAD_PROJECTS_START } from "../../actionTypes";
import { getProjects } from "../../../features/Projects/api/project.servise";
import { loadProjectsSuccess } from "./actions";

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
