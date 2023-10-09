import { call, put, takeEvery } from "redux-saga/effects";
import { loadSubtasksSuccess } from "./actions";
import { LOAD_SUBTASKS_START } from "../../actionTypes";
import { getSubtasks } from "../../../api/subtasksAPI";

function* handleLoadSubtasks(task_id) {
  try {
    const { data } = yield call(getSubtasks, task_id);
    yield put(loadSubtasksSuccess(data));
  } catch (err) {
    console.log(err);
  }
}

export function* onLoadTasks(): Generator<any, void> {
  yield takeEvery(LOAD_SUBTASKS_START, handleLoadSubtasks);
}
