import { call, fork, put, take } from "redux-saga/effects";
import { addDescription } from "../../api";
import {
  ADD_DESCRIPTION_TASK_START,
  addDescriptionTaskError,
  addDescriptionTaskSuccess,
} from "../model";
import { Task } from "../../../../shared/types/types";

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
      action.payload.id.toString()
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
    const action: any = yield take(ADD_DESCRIPTION_TASK_START);
    yield fork(handleAddTaskDescription, action);
  }
}
