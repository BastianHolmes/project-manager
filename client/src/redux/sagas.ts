import { all, fork } from "redux-saga/effects";
import { onCreateProject, onGetProjects } from "./modules/projects/watcher";

export default function* rootSaga() {
  yield all([fork(onGetProjects), fork(onCreateProject)]);
}
