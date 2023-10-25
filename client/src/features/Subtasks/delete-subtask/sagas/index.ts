import { call, fork, put, take, takeEvery } from "redux-saga/effects";
import { deleteSubtasks } from "../../api";
import {
  DELETE_SUBTASKS_START,
  deleteSubTaskSuccess,
  deleteSubtaskError,
} from "../model";

function* handleDeleteSubtasks(action: {
  payload: { id: string };
}): Generator<any, void, any> {
  try {
    const response = yield call(deleteSubtasks, action.payload.id);

    if (response.msg === "OK") {
      yield put(deleteSubTaskSuccess(response.data));
    }
  } catch (err) {
    yield put(deleteSubtaskError(err));
  }
}

export function* onDeleteSubTasks(): Generator<any, void> {
  while (true) {
    const action: any = yield take(DELETE_SUBTASKS_START);
    yield fork(handleDeleteSubtasks, action);
  }
}
