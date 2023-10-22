import { Task } from "../../../shared/types/types";
import {
  ADD_DESCRIPTION_TASK_ERROR,
  ADD_DESCRIPTION_TASK_START,
  ADD_DESCRIPTION_TASK_SUCCESS,
} from "../../actionTypes";

export interface addDescriptionTaskStartAction {
  type: typeof ADD_DESCRIPTION_TASK_START;
  payload: {
    id: string;
    description: string;
  };
}

export interface addDescriptionTaskSuccessAction {
  type: typeof ADD_DESCRIPTION_TASK_SUCCESS;
  payload: Task;
}

export interface addDescriptionTaskErrorAction {
  type: typeof ADD_DESCRIPTION_TASK_ERROR;
  payload: any;
}

export type TaskAction =
  | addDescriptionTaskStartAction
  | addDescriptionTaskSuccessAction
  | addDescriptionTaskErrorAction;
