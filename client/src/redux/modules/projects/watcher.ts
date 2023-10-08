import { put, call, takeEvery, fork, take } from "redux-saga/effects";
import { CREATE_PROJECT_START, GET_PROJECTS_START } from "../../actionTypes";
import { getProjects, postProjects } from "../../../api/projectsAPI";
import {
  createProjectError,
  createProjectSuccess,
  loadProjectsSuccess,
} from "./actions";

export function* handleGetProjects(): Generator<any, void, any> {
  try {
    const { data }: { data: any } = yield call(getProjects);
    yield put(loadProjectsSuccess(data));
  } catch (err) {
    console.log(err);
  }
}

export function* handleCreateProjects({
  payload,
}: {
  payload: any;
}): Generator<any, void, any> {
  try {
    const response: any = yield call(postProjects, payload.title);
    if (response.msg === "OK") {
      yield put(createProjectSuccess(response));
    }
  } catch (err) {
    yield put(createProjectError(err));
  }
}

export function* onCreateProject(): Generator<any, void, any> {
  while (true) {
    const action: any = yield take(CREATE_PROJECT_START);
    yield fork(handleCreateProjects, action);
  }
}

export function* onGetProjects(): Generator<any, void, any> {
  yield takeEvery(GET_PROJECTS_START, handleGetProjects);
}
