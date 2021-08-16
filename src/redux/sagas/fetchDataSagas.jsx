import { call, put, takeLatest } from "@redux-saga/core/effects";
import { types } from '../types';
import {getEmailValidationResponse} from '../actions';

function* asyncEmailValidation(state) {
    try {
        const url = 'https://run.mocky.io/v3/386baee0-3694-4384-b69a-8e9798aac3a2';
        const response = yield call(() => fetch(url).then((res) => res.json()));
        if (state.payload === response.user.email) {    
            yield put(getEmailValidationResponse(response));
        } else {
            alert('Wrong email. Hint: code@nexotto.com');
        }
    } catch(error) {
        console.log(error);
    }
}

function* asyncEmailValidationRes(state) {
    try {
        console.log('this is in response', state);
        yield;
    } catch (error) {
        console.log(error);
    }
}

export function* fetchDataSaga() {
    yield takeLatest(types.EMAIL_VALIDATION, asyncEmailValidation);
    yield takeLatest(types.EMAIL_VALIDATION_RES, asyncEmailValidationRes);
}