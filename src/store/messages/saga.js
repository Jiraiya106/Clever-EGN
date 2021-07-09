import { call, put, takeLatest, delay } from "redux-saga/effects";
import axios from "axios";
import { TYPES } from "../action-types";

function* getMessagesWorker() {
  console.log("SAGA MESSAGES");
  try {
    const {
      data: { messages, totalResults },
    } = yield call(
      axios.get,
      "https://webhooks.mongodb-realm.com/api/client/v2.0/app/cleverlandblog-cuual/service/chat/incoming_webhook/getMessages"
    );
    yield delay(2000);
    // throw new Error("ХЕРНЯ");
    yield put({
      type: TYPES.GET_MESSAGES_REQUEST_SUCCESS,
      messages,
      totalResults,
    });
  } catch (error) {
    yield put({
      type: TYPES.GET_MESSAGES_REQUEST_ERROR,
    });
  }
}

export function* messagesWatcher() {
  yield takeLatest(TYPES.GET_MESSAGES_REQUEST, getMessagesWorker);
}
