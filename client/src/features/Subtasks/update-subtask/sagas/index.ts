import { call, fork, put, take, takeEvery } from "redux-saga/effects";
import { updateSubtasks } from "../../api";
import {
  DONE_SUBTASKS_START,
  doneSubtaskError,
  doneSubtaskSuccess,
} from "../model";

function* handleUpdateSubtasks(action: {
  payload: { done: boolean; id: string };
}): Generator<any, void, any> {
  try {
    const response = yield call(
      updateSubtasks,
      action.payload.done,
      action.payload.id
    );

    if (response.msg === "OK") {
      yield put(doneSubtaskSuccess(response.data));
    }
  } catch (err) {
    yield put(doneSubtaskError(err));
  }
}

export function* onUpdateSubTasks(): Generator<any, void> {
  while (true) {
    const action: any = yield take(DONE_SUBTASKS_START);
    yield fork(handleUpdateSubtasks, action);
  }
}
