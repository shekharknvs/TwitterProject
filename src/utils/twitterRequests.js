import {CONSUMER_SECRET, CONSUMER_KEY} from '../constants';

export const getHomeTimeLine = (count=20) => new Promise((resolve,reject)=>{
    let oauth_token = JSON.parse(document.cookie)['oauth_token'];
    let AuthorizationString = 'OAuth ';
    AuthorizationString += 'oauth_consumer_key=\"'+ CONSUMER_KEY +'\"';
    AuthorizationString += 'oauth_nonce=\"'+ nonceGenerator() + '\"';
    AuthorizationString += 'oauth_signature_method="HMAC-SHA1"';
    AuthorizationString += 'oauth_timestamp=\"' + Number(new Date()) + '\"';
    AuthorizationString += 'oauth_version="1.0"';
    AuthorizationString += 'oauth_token=\"'+ oauth_token +'\"';
    fetch(`https://api.twitter.com/1.1/statuses/home_timeline.json?count=${count}`,{
        method:"GET",
        headers:new Headers({
            'Authorization':AuthorizationString,
        })
    })
        .then(res=>resolve(res.json()))
        .catch(error=>reject(error));
});