import { all, fork } from "redux-saga/effects";
import { watchPopularSaga } from "./modules/projects/watcher";

export default function* rootSaga() {
  yield all([fork(watchPopularSaga)]);
}
