import { all, fork } from "redux-saga/effects";
import { watchProjectSaga } from "./modules/projects/watcher";

export default function* rootSaga() {
  yield all([fork(watchProjectSaga)]);
}
