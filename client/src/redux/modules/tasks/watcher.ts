import { call, put, take, takeEvery, fork } from "redux-saga/effects";
import {
  ADD_DESCRIPTION_TASK_START,
  CHANGE_TASK_PRIORITY_START,
  CHANGE_TASK_STATUS_START,
  CREATE_TASKS_START,
  LOAD_TASKS_START,
} from "../../actionTypes";
import {
  addDescription,
  getAllTasks,
  postTasks,
  updatePriority,
  updateStatus,
} from "../../../api/tasksAPI";
import {
  addDescriptionTaskError,
  addDescriptionTaskSuccess,
  changeTaskPriorityError,
  changeTaskPrioritySuccess,
  changeTaskStatusError,
  changeTaskStatusSuccess,
  createTaskError,
  createTaskSuccess,
  setTasks,
} from "./actions";
import { Task } from "../../../types/taskTypes";

interface GetTasksResponse {
  data: Task[];
}

interface CreateTaskResponse {
  msg: string;
  data: Task;
}

interface AddDescriptionResponse {
  msg: string;
  data: Task;
}

interface ChangeStatusResponse {
  msg: string;
  data: Task;
}

function* handleGetTasks(): Generator<any, void, GetTasksResponse> {
  try {
    const { data }: GetTasksResponse = yield call(getAllTasks);
    yield put(setTasks(data));
  } catch (err) {
    console.log(err);
  }
}

export function* onLoadTasks(): Generator<any, void> {
  yield takeEvery(LOAD_TASKS_START, handleGetTasks);
}

function* handleCreateTasks(action: {
  payload: Task;
}): Generator<any, void, CreateTaskResponse> {
  try {
    const response: CreateTaskResponse = yield call(postTasks, action.payload);
    if (response.msg === "OK") {
      yield put(createTaskSuccess(response.data));
    }
  } catch (err) {
    yield put(createTaskError(err));
  }
}

export function* onCreateTasks(): Generator<any, void> {
  while (true) {
    const action: { payload: Task } = yield take(CREATE_TASKS_START);
    yield fork(handleCreateTasks, action);
  }
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

function* handleChangeStatus(action: {
  payload: { status: string; id: number };
}): Generator<any, void, ChangeStatusResponse> {
  try {
    const response: ChangeStatusResponse = yield call(
      updateStatus,
      action.payload.status,
      action.payload.id
    );
    if (response.msg === "OK") {
      yield put(changeTaskStatusSuccess(response.data));
    }
  } catch (err) {
    yield put(changeTaskStatusError(err));
  }
}

export function* onChangeStatus(): Generator<any, void> {
  while (true) {
    const action: { payload: { status: string; id: number } } = yield take(
      CHANGE_TASK_STATUS_START
    );
    yield fork(handleChangeStatus, action);
  }
}

function* handleChangePriority(action: {
  payload: { priority: string; id: number };
}): Generator<any, void, ChangeStatusResponse> {
  try {
    console.log(action.payload.id);
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
