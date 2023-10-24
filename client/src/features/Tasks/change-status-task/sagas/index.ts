import { call, fork, put, take } from "redux-saga/effects";
import { updateStatus } from "../../api";
import {
  CHANGE_TASK_STATUS_START,
  changeTaskStatusError,
  changeTaskStatusSuccess,
} from "../model";
import { Task } from "../../../../shared/types/types";

interface ChangeStatusResponse {
  msg: string;
  data: Task[];
}

function* handleChangeStatus(action: {
  payload: { status: string; id: number };
}): Generator<any, void, ChangeStatusResponse> {
  try {
    const response: ChangeStatusResponse = yield call(
      updateStatus,
      action.payload.status,
      action.payload.id.toString()
    );
    if (response.msg === "OK") {
      yield put(changeTaskStatusSuccess(response.data[0]));
    }
  } catch (err) {
    yield put(changeTaskStatusError(err));
  }
}

export function* onChangeStatus(): Generator<any, void> {
  while (true) {
    const action: any = yield take(CHANGE_TASK_STATUS_START);
    yield fork(handleChangeStatus, action);
  }
}
