import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";

import { reducer } from "./reducer";
import { rootSaga } from "./root-saga";

import { tableReducer } from "./table";
import { messagesReducer } from "./messages";

const rootReducer = combineReducers({
  table: tableReducer,
  reducer,
  messages: messagesReducer,
});

const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(rootSaga);
