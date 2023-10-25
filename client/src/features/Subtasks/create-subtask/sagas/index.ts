import { call, fork, put, take, takeEvery } from "redux-saga/effects";
import {
  CREATE_SUBTASKS_START,
  createSubtaskError,
  createSubtaskSuccess,
} from "../model";
import { createSubtasks } from "../../api";

function* handleCreateSubtasks(action: {
  payload: {
    task_id: string;
    title: string;
  };
}): Generator<any, void, any> {
  try {
    const response = yield call(
      createSubtasks,
      action.payload.task_id,
      action.payload.title
    );
    console.log(response);
    if (response.msg === "OK") {
      yield put(createSubtaskSuccess(response.data));
    }
  } catch (err) {
    yield put(createSubtaskError(err));
  }
}

export function* onCreateSubTasks(): Generator<any, void> {
  while (true) {
    const action: any = yield take(CREATE_SUBTASKS_START);
    yield fork(handleCreateSubtasks, action);
  }
}
