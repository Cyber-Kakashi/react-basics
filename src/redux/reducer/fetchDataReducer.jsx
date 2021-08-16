import { types } from '../types';

const fetchDataReducer = (state, action) => {

    switch (action.type) {
        case types.EMAIL_VALIDATION_RES:
            console.log(action);
            return {
                ...state
            }
        case types.EMAIL_VALIDATION:
            return {
                ...state
            }
        default:
            return {
                state,
                action
            }
    }
}

export default fetchDataReducer;