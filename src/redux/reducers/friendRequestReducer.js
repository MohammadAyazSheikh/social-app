import * as ActionTypes from '../actionTypes';

export const Follow_Send_Reducer = (state = { succes: false, isLoading: false, errMess: null }, action) => {


    switch (action.type) {
        case ActionTypes.FOLLOW_REQ_SUCCESS:
            return {
                ...state,
                isLoading: false,
                errMess: null,
                success: action.payload,
            };
        case ActionTypes.FOLLOW_REQ_FAILED:
            return {
                ...state,
                isLoading: false,
                errMess: action.payload,
                success: false,

            };
        case ActionTypes.SEARCH_LOADING:
            return {
                ...state,
                isLoading: true,
                errMess: null,
                success: false,
            };
        default:
            return state;
    }
};


export const Get_Sent_Req_Reducer = (state = { succes: false, isLoading: false, errMess: null, reqst: null }, action) => {


    switch (action.type) {
        case ActionTypes.GET_SENT_REQ_SUCCESS:
            return {
                ...state,
                isLoading: false,
                errMess: null,
                success: true,
                reqst: action.payload
            };
        case ActionTypes.GET_SENT_REQ_FAILED:
            return {
                ...state,
                isLoading: false,
                errMess: action.payload,
                success: false,
            };
        case ActionTypes.GET_SENT_REQ_LOADING:
            return {
                ...state,
                isLoading: true,
                errMess: null,
                success: false,
            };
        default:
            return state;
    }
};