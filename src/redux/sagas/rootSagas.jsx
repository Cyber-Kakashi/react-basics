import { all } from "@redux-saga/core/effects";
import { fetchDataSaga } from './fetchDataSagas';

export default function* RootSaga() {
    yield all([
        fetchDataSaga()
    ])
}