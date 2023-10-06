import { call, put, takeEvery } from "redux-saga/effects";
import { LOAD_TASKS_START } from "../../actionTypes";
import { getAllTasks, getTasks } from "../../../api/tasksAPI";
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
  try {
    const response = yield call(postTasks, payload);
    if (response.msg === "OK") {
      yield put(createTaskSuccess(response.data));
    }
  } catch (err) {
    yield put(createTaskError(err));
  }
}
