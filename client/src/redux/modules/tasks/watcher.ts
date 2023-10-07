import { call, put, take, takeEvery, fork } from "redux-saga/effects";
import { CREATE_TASKS_START, LOAD_TASKS_START } from "../../actionTypes";
import { getAllTasks, postTasks } from "../../../api/tasksAPI";
import {
  createTaskError,
  createTaskStart,
  createTaskSuccess,
  setTasks,
} from "./actions";

export function* handleGetTasks() {
  try {
    const { data } = yield call(getAllTasks);
    yield put(setTasks(data));
  } catch (err) {
    console.log(err);
  }
}

export function* onLoadTasks() {
  yield takeEvery(LOAD_TASKS_START, handleGetTasks);
}

export function* handleCreateTasks({ payload }) {
  console.log(payload);
  try {
    const response = yield call(postTasks, payload);
    console.log(response);
    if (response.msg === "OK") {
      yield put(createTaskSuccess(response.data));
    }
  } catch (err) {
    yield put(createTaskError(err));
  }
}

export function* onСreateTasks() {
  while (true) {
    const action = yield take(CREATE_TASKS_START);
    yield fork(handleCreateTasks, action);
  }
}
