import { call, fork, put, take, takeEvery } from "redux-saga/effects";
import {
  LOAD_SUBTASKS_START,
  loadSubtasksError,
  loadSubtasksSuccess,
} from "../model";
import { getSubtasks } from "../../../features/Subtasks/api";

function* handleLoadSubtasks(action: {
  payload: { id: string };
}): Generator<any, void, any> {
  try {
    const response = yield call(getSubtasks, action.payload.id);

    if (response.msg === "OK") {
      yield put(loadSubtasksSuccess(response.data));
    }
  } catch (err) {
    yield put(loadSubtasksError(err));
  }
}

export function* onLoadSubTasks(): Generator<any, void> {
  while (true) {
    const action: any = yield take(LOAD_SUBTASKS_START);
    yield fork(handleLoadSubtasks, action);
  }
}
