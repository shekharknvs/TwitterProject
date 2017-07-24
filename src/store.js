import { createStore, combineReducers, applyMiddleware } from 'redux';
import { TwitterAPI } from './middlwares/twitterAPI';
import {browserHistory} from 'react-router';
import reducers from './reducers';
export const store = createStore(
    reducers,
    applyMiddleware(TwitterAPI)
);
export const history = browserHistory;
window.store = store;
