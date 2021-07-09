import { call, put, takeLatest, delay } from "redux-saga/effects";
import axios from "axios";
import { TYPES } from "../action-types";

function* getTableData(action) {
  try {
    console.log(action);
    const { data } = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/posts"
    );
    yield delay(5000);
    // throw new Error("ХЕРНЯ");
    yield put({ type: TYPES.GET_TABLE_DATA_REQUEST_SUCCESS, data });
  } catch (error) {
    yield put({
      type: TYPES.GET_TABLE_DATA_REQUEST_ERROR,
      message: error.message,
    });
  }
}

export function* mySaga() {
  yield takeLatest(TYPES.GET_TABLE_DATA_REQUEST, getTableData);
}
