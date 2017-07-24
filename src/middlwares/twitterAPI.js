import { GET_ACCESS_TOKEN , GET_UPDATED_TWEETS, URL_Host , ADD_VIEW} from '../constants';
import { fetchTweets } from '../actions';
import {push} from 'react-router-redux';
import {addTweets} from '../actions';
 export const TwitterAPI = store => next => action => {
     switch(action.type){
         case ADD_VIEW:
             let  index = action.payload;
             let obj = store.getState().tweets;
             let view = obj[index].view || 0;
             obj[index].view = ++ obj[index].view;
             let newObj = [...obj];
             store.dispatch(fetchTweets(newObj));
         default:
             break;
     }
    return next(action);
};