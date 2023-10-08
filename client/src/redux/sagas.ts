import { all, fork } from "redux-saga/effects";
import { onCreateProject, onGetProjects } from "./modules/projects/watcher";
import {
  onAddDescription,
  onChangeStatus,
  onLoadTasks,
  onСreateTasks,
} from "./modules/tasks/watcher";
import fileUploaderSaga from "./modules/files/watcher";

export default function* rootSaga() {
  yield all([
    fork(onGetProjects),
    fork(onCreateProject),
    fork(onLoadTasks),
    fork(onСreateTasks),
    fork(onAddDescription),
    fork(onChangeStatus),
    fork(fileUploaderSaga),
  ]);
}
