import { all } from "redux-saga/effects";

import { mySaga } from "./table/saga";
import { messagesWatcher } from "./messages/saga";

export function* rootSaga() {
  yield all([mySaga(), messagesWatcher()]);
}
