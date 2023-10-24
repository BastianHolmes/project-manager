import { call, put, takeEvery } from "redux-saga/effects";
import { getAllTasks } from "../../../features/Tasks/api";
import { LOAD_TASKS_START, LoadTaskError, LoadTaskSuccess } from "../model";
import { Task } from "../../../shared/types/types";

interface GetTasksResponse {
  data: Task[];
}

function* handleGetTasks(): Generator<any, void, any> {
  try {
    const { data }: { data: Array<Task> } = yield call(getAllTasks);
    yield put(LoadTaskSuccess(data));
  } catch (err) {
    LoadTaskError(err);
  }
}

export function* onLoadTasks(): Generator<any, void> {
  yield takeEvery(LOAD_TASKS_START, handleGetTasks);
}
