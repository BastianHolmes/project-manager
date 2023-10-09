import { all, fork } from "redux-saga/effects";
import { onCreateProject, onGetProjects } from "./modules/projects/watcher";
import {
  onAddDescription,
  onChangeStatus,
  onLoadTasks,
  onCreateTasks,
} from "./modules/tasks/watcher";
import fileUploaderSaga from "./modules/files/watcher";
import {
  onCreateSubTasks,
  onDeleteSubTasks,
  onLoadSubTasks,
} from "./modules/subtasks/watcher";

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
  ]);
}
