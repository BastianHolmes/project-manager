import { call, fork, put, take } from "redux-saga/effects";
import { postProjects } from "../../api/project.servise";
import {
  CREATE_PROJECT_START,
  createProjectError,
  createProjectSuccess,
} from "../model";

export function* handleCreateProjects({
  payload,
}: {
  payload: any;
}): Generator<any, void, any> {
  try {
    const response: any = yield call(postProjects, payload.title);
    if (response.msg === "OK") {
      yield put(createProjectSuccess(response.data[0]));
    }
  } catch (err) {
    console.log(err);
    yield put(createProjectError(err));
  }
}

export function* onCreateProject(): Generator<any, void, any> {
  while (true) {
    const action: any = yield take(CREATE_PROJECT_START);
    yield fork(handleCreateProjects, action);
  }
}
