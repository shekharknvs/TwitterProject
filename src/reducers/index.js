import { combineReducers } from 'redux';
import { tweets , accessToken } from './Tweets';

export default combineReducers({
    tweets,
    accessToken
});