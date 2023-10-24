import { call, fork, put, take } from "redux-saga/effects";
import {
  CREATE_TASKS_START,
  createTaskError,
  createTaskSuccess,
} from "../model";
import { postTasks } from "../../api";
import { Task } from "../../../../shared/types/types";

interface CreateTaskResponse {
  msg: string;
  data: Task[];
}

function* handleCreateTasks(action: {
  payload: Task;
}): Generator<any, void, CreateTaskResponse> {
  try {
    const response: CreateTaskResponse = yield call(postTasks, action.payload);
    if (response.msg === "OK") {
      yield put(createTaskSuccess(response.data[0]));
    }
  } catch (err) {
    yield put(createTaskError(err));
  }
}

export function* onCreateTasks(): Generator<any, void> {
  while (true) {
    const action: any = yield take(CREATE_TASKS_START);
    yield fork(handleCreateTasks, action);
  }
}
