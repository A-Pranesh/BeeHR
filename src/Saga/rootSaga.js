// Imports: Dependencies
import { all, fork } from "redux-saga/effects";
// Imports: Redux Sagas
import { getUsers } from "./USERAPI/Sagas";
// Redux Saga: Root Saga
export function* rootSaga() {
  yield all([
    fork(getUsers),
  ]);
}
