import { ADD_TWEETS , ACCESS_TOKEN } from '../constants';

export const tweets = (state=[], action) => {
    if(action.type === ADD_TWEETS)
        return action.payload;
    else
        return state;
};

export const accessToken = (state={},action) => {
    if(action.type===ACCESS_TOKEN)
        return action.payload;
    else
        return state;
};


