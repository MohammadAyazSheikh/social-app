import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Auth_Reducer } from './reducers/authReducer';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            User: Auth_Reducer
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}