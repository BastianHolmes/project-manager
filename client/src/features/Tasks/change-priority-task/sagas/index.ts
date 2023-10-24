import { call, fork, put, take } from "redux-saga/effects";
import { updatePriority } from "../../api";
import {
  CHANGE_TASK_PRIORITY_START,
  changeTaskPriorityError,
  changeTaskPrioritySuccess,
} from "../model";

function* handleChangePriority(action: {
  payload: { priority: string; id: number };
}): Generator<any, void, any> {
  try {
    const response = yield call(
      updatePriority,
      action.payload.priority,
      action.payload.id.toString()
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
    const action: any = yield take(CHANGE_TASK_PRIORITY_START);
    yield fork(handleChangePriority, action);
  }
}
