import { call, put, takeEvery } from "redux-saga/effects";
import { getAllTasks } from "../../../features/Tasks/api";
import { Task } from "redux-saga";
import { LOAD_TASKS_START, LoadTaskError, LoadTaskSuccess } from "../model";

interface GetTasksResponse {
  data: Task[];
}

function* handleGetTasks(): Generator<any, void, GetTasksResponse> {
  try {
    const { data }: GetTasksResponse = yield call(getAllTasks);
    yield put(LoadTaskSuccess(data));
  } catch (err) {
    LoadTaskError(err);
  }
}

export function* onLoadTasks(): Generator<any, void> {
  yield takeEvery(LOAD_TASKS_START, handleGetTasks);
}
