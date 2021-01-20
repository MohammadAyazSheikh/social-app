import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { user_Reducer } from './reducers/userReducer';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            User: user_Reducer
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}