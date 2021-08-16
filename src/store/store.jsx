import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import RootReducer from "../redux/reducer/rootReducer";

import RootSaga from "../redux/sagas/rootSagas";

const sagaMiddleWare =  createSagaMiddleware();
const store = createStore(RootReducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(RootSaga);

export default store;