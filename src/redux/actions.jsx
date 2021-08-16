import { types } from './types.jsx';

export function validateEmail(userName) {
    return {
        type: types.EMAIL_VALIDATION,
        payload: userName
    }
}

export function getEmailValidationResponse(res) {
    if (res) {
        console.log(res)
        return {
            type: types.EMAIL_VALIDATION_RES,
            payload: res
        };
    }
}

export function validatePassword(data) {
    return {
        type: types.PASSWORD_VALIDATION,
        payload: data
    }
}