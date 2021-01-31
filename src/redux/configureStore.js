import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Auth_Reducer } from './reducers/authReducer';
import { Search_Reducer  } from './reducers/searchReducer';
import {Follow_Send_Reducer,Get_Sent_Req_Reducer} from './reducers/friendRequestReducer';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            User: Auth_Reducer,
            searchedUsers: Search_Reducer,
            followSend: Follow_Send_Reducer,
            sentReqst: Get_Sent_Req_Reducer,
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}