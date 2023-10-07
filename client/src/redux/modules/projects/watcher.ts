import {
  put,
  call,
  takeEvery,
  fork,
  takeLatest,
  take,
} from "redux-saga/effects";
import { CREATE_PROJECT_START, GET_PROJECTS_START } from "../../actionTypes";
import { getProjects, postProjects } from "../../../api/projectsAPI";
import {
  createProjectError,
  createProjectStart,
  createProjectSuccess,
  loadProjectsSuccess,
} from "./actions";

export function* handleGetProjects() {
  try {
    const { data } = yield call(getProjects);
    yield put(loadProjectsSuccess(data));
  } catch (err) {
    console.log(err);
  }
}

export function* handleCreateProjects({ payload }: any) {
  try {
    const response = yield call(postProjects, payload.title);
    if (response.msg === "OK") {
      yield put(createProjectSuccess(response));
    }
  } catch (err) {
    yield put(createProjectError(err));
  }
}

export function* onCreateProject() {
  while (true) {
    const action = yield take(CREATE_PROJECT_START);
    yield fork(handleCreateProjects, action);
  }
}

export function* onGetProjects() {
  yield takeEvery(GET_PROJECTS_START, handleGetProjects);
}
