import * as ActionTypes from '../actionTypes';

export const user_Reducer = (state = { isLoading: true, errMess: null, users: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_USERS:
            return { ...state, isLoading: false, errMess: null, users: action.payload };

        // case ActionTypes.DISHES_LOADING:
        //     return { ...state, isLoading: true, errMess: null, dishes: [] }

        // case ActionTypes.DISHES_FAILED:
        //     return { ...state, isLoading: false, errMess: action.payload };

        default:
            return state;
    }
};