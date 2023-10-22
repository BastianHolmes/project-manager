import { all, fork } from "redux-saga/effects";
import { onGetProjects } from "./modules/projects/watcher";
import { onCreateProject } from "../features/Projects/create-project/sagas";
import {
  onAddDescription,
  onChangeStatus,
  onLoadTasks,
  onCreateTasks,
  onChangePriority,
} from "./modules/tasks/watcher";
import fileUploaderSaga from "./modules/files/watcher";
import {
  onCreateSubTasks,
  onDeleteSubTasks,
  onLoadSubTasks,
  onUpdateSubTasks,
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
    fork(onUpdateSubTasks),
    fork(onChangePriority),
  ]);
}
