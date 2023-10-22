import { call, put, take, takeEvery, fork } from "redux-saga/effects";
import {
  ADD_DESCRIPTION_TASK_START,
  CHANGE_TASK_PRIORITY_START,
} from "../../actionTypes";
import { addDescription, updatePriority } from "../../../features/Tasks/api";
import {
  addDescriptionTaskError,
  addDescriptionTaskSuccess,
  changeTaskPriorityError,
  changeTaskPrioritySuccess,
} from "./actions";
import { Task } from "../../../shared/types/types";

interface AddDescriptionResponse {
  msg: string;
  data: Task;
}

function* handleAddTaskDescription(action: {
  payload: { description: string; id: number };
}): Generator<any, void, AddDescriptionResponse> {
  try {
    const response: AddDescriptionResponse = yield call(
      addDescription,
      action.payload.description,
      action.payload.id
    );
    if (response.msg === "OK") {
      yield put(addDescriptionTaskSuccess(response.data));
    }
  } catch (err) {
    yield put(addDescriptionTaskError(err));
  }
}

export function* onAddDescription(): Generator<any, void> {
  while (true) {
    const action: { payload: { description: string; id: number } } = yield take(
      ADD_DESCRIPTION_TASK_START
    );
    yield fork(handleAddTaskDescription, action);
  }
}

function* handleChangePriority(action: {
  payload: { priority: string; id: number };
}): Generator<any, void, ChangeStatusResponse> {
  try {
    const response: ChangeStatusResponse = yield call(
      updatePriority,
      action.payload.priority,
      action.payload.id
    );
    if (response.msg === "OK") {
      yield put(changeTaskPrioritySuccess(response.data));
    }
  } catch (err) {
    yield put(changeTaskPriorityError(err));
  }
}

export function* onChangePriority(): Generator<any, void> {
  while (true) {
    const action: { payload: { status: string; id: number } } = yield take(
      CHANGE_TASK_PRIORITY_START
    );
    yield fork(handleChangePriority, action);
  }
}
