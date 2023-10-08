import { call, put, take, takeEvery, fork } from "redux-saga/effects";
import {
  ADD_DESCRIPTION_TASK_START,
  CHANGE_TASK_STATUS_START,
  CREATE_TASKS_START,
  LOAD_TASKS_START,
} from "../../actionTypes";
import {
  addDescription,
  getAllTasks,
  postTasks,
  updateStatus,
} from "../../../api/tasksAPI";
import {
  addDescriptionTaskError,
  addDescriptionTaskSuccess,
  changeTaskStatusError,
  changeTaskStatusSuccess,
  createTaskError,
  createTaskSuccess,
  setTasks,
} from "./actions";

function* handleGetTasks() {
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

function* handleCreateTasks({ payload }) {
  try {
    const response = yield call(postTasks, payload);
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

function* handleAddTaskDescription({ payload }) {
  try {
    const response = yield call(
      addDescription,
      payload.description,
      payload.id
    );
    if (response.msg === "OK") {
      yield put(addDescriptionTaskSuccess(response.data));
    }
  } catch (err) {
    yield put(addDescriptionTaskError(err));
  }
}

export function* onAddDescription() {
  while (true) {
    const action = yield take(ADD_DESCRIPTION_TASK_START);
    yield fork(handleAddTaskDescription, action);
  }
}

function* handleChangeStatus({ payload }) {
  console.log(payload);
  try {
    const response = yield call(updateStatus, payload.newStatus, payload.id);
    if (response.msg === "OK") {
      yield put(changeTaskStatusSuccess(response.data));
    }
  } catch (err) {
    yield put(changeTaskStatusError(err));
  }
}

export function* onChangeStatus() {
  while (true) {
    const action = yield take(CHANGE_TASK_STATUS_START);
    yield fork(handleChangeStatus, action);
  }
}
