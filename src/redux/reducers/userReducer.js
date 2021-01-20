import * as ActionTypes from '../actionTypes';

export const user_Reducer = (state = { isLoading: false, errMess: null, success: false, user: null, token: null }, action) => {


    switch (action.type) {
        case ActionTypes.SIGNUP_SUCCES:
            return {
                ...state,
                isLoading: false,
                errMess: null,
                success: true,
                user: action.payload.userInfo,
                token: action.payload.token
            };
        case ActionTypes.SIGNUP_LOADING:
            return {
                ...state,
                isLoading: true,
                errMess: null,
                success: false,
                user: null,
                token: null
            };
        case ActionTypes.SIGNUP_FAILED:
            return {
                ...state,
                isLoading: false,
                errMess: action.payload,
                success: false,
                user: null,
                token: null
            };
            case ActionTypes.LOGIN_SUCCES:
            return {
                ...state,
                isLoading: false,
                errMess: null,
                success: true,
                user: action.payload.userInfo,
                token: action.payload.token
            };
        case ActionTypes.LOGIN_LOADING:
            return {
                ...state,
                isLoading: true,
                errMess: null,
                success: false,
                user: null,
                token: null
            };
        case ActionTypes.LOGIN_FAILED:
            return {
                ...state,
                isLoading: false,
                errMess: action.payload,
                success: false,
                user: null,
                token: null
            };
        default:
            return state;
    }
};