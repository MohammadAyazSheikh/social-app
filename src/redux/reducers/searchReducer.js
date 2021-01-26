import * as ActionTypes from '../actionTypes';

export const Auth_Reducer = (state = { searchSuccess: false, isLoading: false, errMess: null, success: false, users: null, token: null }, action) => {


    switch (action.type) {
        case ActionTypes.SEARCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                searchSuccess: true,
                errMess: null,
                success: true,
                users: action.payload.users,
                token: action.payload.token
            };
        case ActionTypes.SEARCH_FAILED:
            return {
                ...state,
                isLoading: false,
                searchSuccess: false,
                errMess: action.payload.errMess,
                success: false,
                users: null,
                token: action.payload.token
            };
        case ActionTypes.SEARCH_LOADING:
            return {
                ...state,
                isLoading: true,
                searchSuccess: false,
                errMess: null,
                success: false,
                users: null,
                token: action.payload.token
            };
        default:
            return state;
    }
};