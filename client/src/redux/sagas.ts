import { all, fork } from "redux-saga/effects";
import { onCreateProject } from "../features/Projects/create-project/sagas";
import fileUploaderSaga from "./modules/files/watcher";
import {
  onCreateSubTasks,
  onDeleteSubTasks,
  onLoadSubTasks,
  onUpdateSubTasks,
} from "./modules/subtasks/watcher";
import { onGetProjects } from "../pages/ProjectPage/sagas";
import { onCreateTasks } from "../features/Tasks/create-task/sagas";
import { onChangeStatus } from "../features/Tasks/change-status-task/sagas";
import { onLoadTasks } from "../pages/TaskPage/sagas";
import { onAddDescription } from "../features/Tasks/add-description-task/sagas";
import { onChangePriority } from "../features/Tasks/change-priority-task/sagas";

export default function* rootSaga() {
  yield all([
    fork(onGetProjects),
    fork(onCreateProject),
    fork(onLoadTasks),
    fork(onCreateTasks),
    fork(onAddDescription),
    fork(onChangeStatus),
    fork(fileUploaderSaga),
    fork(onLoadSubTasks),
    fork(onCreateSubTasks),
    fork(onDeleteSubTasks),
    fork(onUpdateSubTasks),
    fork(onChangePriority),
  ]);
}
