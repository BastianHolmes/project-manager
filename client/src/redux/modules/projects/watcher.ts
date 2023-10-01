import { put, call, all, takeEvery, fork } from "redux-saga/effects";
import { GET_PROJECTS } from "../../constants";
import { getProjects } from "../../../api/projectsAPI";
import { setProjects } from "./actions";

export function* handleProjects() {
  try {
    const { data } = yield call(getProjects);
    yield put(setProjects(data));
  } catch (err) {
    console.log(err);
  }
}

export function* watchProjectSaga() {
  yield takeEvery(GET_PROJECTS, handleProjects);
}
