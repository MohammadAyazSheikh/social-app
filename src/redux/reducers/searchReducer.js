import * as ActionTypes from '../actionTypes';

export const Search_Reducer = (state = { searchSuccess: false, isLoading: false, errMess: null, success: false, users: null }, action) => {


    switch (action.type) {
        case ActionTypes.SEARCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                searchSuccess: true,
                errMess: null,
                success: true,
                users: action.payload,
               
            };
        case ActionTypes.SEARCH_FAILED:
            return {
                ...state,
                isLoading: false,
                searchSuccess: false,
                errMess: action.payload,
                success: false,
                users: null,
                
            };
        case ActionTypes.SEARCH_LOADING:
            return {
                ...state,
                isLoading: true,
                searchSuccess: false,
                errMess: null,
                success: false,
                users: null,
               
            };
        default:
            return state;
    }
};