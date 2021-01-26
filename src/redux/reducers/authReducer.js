import * as ActionTypes from '../actionTypes';

export const Auth_Reducer = (state = { logOutSuccess: false, isLoading: false, errMess: null, success: false, user: null, token: null }, action) => {


    switch (action.type) {
        case ActionTypes.CLEAR_USER_STATS:
            return {
                ...state,
                isLoading: false,
                logOutSuccess: false,
                errMess: null,
                success: false,
                user: null,
                token: null
            };
        case ActionTypes.SIGNUP_SUCCES:
            return {
                ...state,
                isLoading: false,
                errMess: null,
                success: true,
                user: action.payload.userInfo,
                token: action.payload.token,
                logOutSuccess: false
            };
        case ActionTypes.SIGNUP_LOADING:
            return {
                ...state,
                isLoading: true,
                errMess: null,
                success: false,
                user: null,
                token: null,
                logOutSuccess: false
            };
        case ActionTypes.SIGNUP_FAILED:
            return {
                ...state,
                isLoading: false,
                errMess: action.payload,
                success: false,
                user: null,
                token: null,
                logOutSuccess: false
            };
        case ActionTypes.LOGIN_SUCCES:
            return {
                ...state,
                isLoading: false,
                errMess: null,
                success: true,
                user: action.payload.userInfo,
                token: action.payload.token,
                logOutSuccess: false
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
                token: null,
                logOutSuccess: false
            };
        case ActionTypes.LOGOUT_SUCCES:
            return {
                ...state,
                logOutSuccess: action.payload.success,
                isLoading: false,
                errMess: null,
                success: false,
                user: null,
                token: null,
            };
        case ActionTypes.LOGOUT_LOADING:
            return {
                ...state,
                isLoading: true,
                logOutSuccess: false,
            };
        case ActionTypes.LOGOUT_FAILED:
            return {
                ...state,
                isLoading: false,
                logOutSuccess: false,
                errMess: action.payload,
            };
        default:
            return state;
    }
};