import { call, put, takeEvery } from "redux-saga/effects";
import {
  createSubtaskError,
  createSubtaskSuccess,
  deleteSubTaskSuccess,
  deleteSubtaskError,
  doneSubtaskError,
  doneSubtaskSuccess,
  loadSubtasksError,
  loadSubtasksSuccess,
} from "./actions";
import {
  CREATE_SUBTASKS_START,
  DELETE_SUBTASKS_START,
  DONE_SUBTASKS_START,
  LOAD_SUBTASKS_START,
} from "../../actionTypes";
import {
  createSubtasks,
  deleteSubtasks,
  getSubtasks,
  updateSubtasks,
} from "../../../features/Subtasks/api";

function* handleLoadSubtasks({ payload }: { id: string }) {
  try {
    const response = yield call(getSubtasks, payload.id);

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

function* handleDeleteSubtasks({ payload }: { id: string }) {
  try {
    const response = yield call(deleteSubtasks, payload.id);

    if (response.msg === "OK") {
      yield put(deleteSubTaskSuccess(response.data));
    }
  } catch (err) {
    yield put(deleteSubtaskError(err));
  }
}

export function* onDeleteSubTasks(): Generator<any, void> {
  yield takeEvery(DELETE_SUBTASKS_START, handleDeleteSubtasks);
}

function* handleUpdateSubtasks({ payload }: { done: string }) {
  try {
    const response = yield call(updateSubtasks, payload.done, payload.id);

    if (response.msg === "OK") {
      yield put(doneSubtaskSuccess(response.data));
    }
  } catch (err) {
    yield put(doneSubtaskError(err));
  }
}

export function* onUpdateSubTasks(): Generator<any, void> {
  yield takeEvery(DONE_SUBTASKS_START, handleUpdateSubtasks);
}
