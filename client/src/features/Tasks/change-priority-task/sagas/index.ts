import { call, fork, put, take } from "redux-saga/effects";
import { updatePriority } from "../../api";
import {
  CHANGE_TASK_PRIORITY_START,
  changeTaskPriorityError,
  changeTaskPrioritySuccess,
} from "../model";

function* handleChangePriority(action: {
  payload: { priority: string; id: number };
}): Generator<any, void, ChangeStatusResponse> {
  try {
    const response: ChangeStatusResponse = yield call(
      updatePriority,
      action.payload.priority,
      action.payload.id
    );
    if (response.msg === "OK") {
      yield put(changeTaskPrioritySuccess(response.data));
    }
  } catch (err) {
    yield put(changeTaskPriorityError(err));
  }
}

export function* onChangePriority(): Generator<any, void> {
  while (true) {
    const action: { payload: { status: string; id: number } } = yield take(
      CHANGE_TASK_PRIORITY_START
    );
    yield fork(handleChangePriority, action);
  }
}
