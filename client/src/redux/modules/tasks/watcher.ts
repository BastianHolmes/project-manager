import { call, put, takeEvery } from "redux-saga/effects";
import { LOAD_TASKS_START } from "../../actionTypes";
import { getTasks } from "../../../api/tasksAPI";
import { setTasks } from "./actions";

export function* handleGetTasks({ payload }) {
  try {
    const { data } = yield call(getTasks, payload);
    yield put(setTasks(data));
  } catch (err) {
    console.log(err);
  }
}

export function* onLoadTasks() {
  yield takeEvery(LOAD_TASKS_START, handleGetTasks);
}
