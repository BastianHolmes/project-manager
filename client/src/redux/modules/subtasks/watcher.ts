import { call, put, takeEvery } from "redux-saga/effects";
import {
  createSubtaskError,
  createSubtaskSuccess,
  loadSubtasksError,
  loadSubtasksSuccess,
} from "./actions";
import { CREATE_SUBTASKS_START, LOAD_SUBTASKS_START } from "../../actionTypes";
import { createSubtasks, getSubtasks } from "../../../api/subtasksAPI";

function* handleLoadSubtasks({ payload }: { id: string }) {
  try {
    const response = yield call(getSubtasks, payload.id);
    console.log(response);
    if (response.msg === "OK") {
      yield put(loadSubtasksSuccess(response.data));
    }
  } catch (err) {
    yield put(loadSubtasksError(err));
  }
}

export function* onLoadSubTasks(): Generator<any, void> {
  yield takeEvery(LOAD_SUBTASKS_START, handleLoadSubtasks);
}

function* handleCreateSubtasks({
  payload,
}: {
  task_id: string;
  title: string;
}) {
  try {
    const response = yield call(createSubtasks, payload.task_id, payload.title);
    console.log(response);
    if (response.msg === "OK") {
      yield put(createSubtaskSuccess(response.data));
    }
  } catch (err) {
    yield put(createSubtaskError(err));
  }
}

export function* onCreateSubTasks(): Generator<any, void> {
  yield takeEvery(CREATE_SUBTASKS_START, handleCreateSubtasks);
}
