import {CONSUMER_SECRET , CONSUMER_KEY} from '../constants';
import { nonceGenerator } from './nonceGenerator';

export const requestToken = () =>new Promise((resolve,reject)=>{
    let callback = encodeURIComponent("https://shekhar:8080/callback");
    let AuthorizationString = 'OAuth ';
    AuthorizationString +='oauth_callback=\"'+callback +'\"';
    AuthorizationString += 'oauth_consumer_key=\"'+ CONSUMER_KEY +'\"';
    AuthorizationString += 'oauth_nonce=\"'+ nonceGenerator() + '\"';
    AuthorizationString += 'oauth_signature_method="HMAC-SHA1"';
    AuthorizationString += 'oauth_timestamp=\"' + Number(new Date()) + '\"';
    AuthorizationString += 'oauth_version="1.0"';
    fetch('https://api.twitter.com/oauth/request_token',{
        method:'POST',
        headers:new Headers({
            'Authorization':AuthorizationString
        }),
        mode:'no-cors'
    })
        .then((response)=>{
            resolve(response.json());
        })
        .catch((error)=>{
            reject(error.status);
        })

});

export const oauth_authenticate = oauth_token =>'https://api.twitter.com/oauth/authenticate?oauth_token='+oauth_token;

export const oauth_access_token = (oauth_verifier, oauth_token) => new Promise((resolve,reject)=>{
    let AuthorizationString = 'OAuth ';
    AuthorizationString += 'oauth_consumer_key=\"'+ CONSUMER_KEY +'\"';
    AuthorizationString += 'oauth_nonce=\"'+ nonceGenerator() + '\"';
    AuthorizationString += 'oauth_signature_method="HMAC-SHA1"';
    AuthorizationString += 'oauth_timestamp=\"' + Number(new Date()) + '\"';
    AuthorizationString += 'oauth_version="1.0"';
    AuthorizationString += 'oauth_token=\"'+ oauth_token +'\"';
    fetch('https;//api.twitter.com/oauth/access_token', {
        method:"POST",
        headers:new Headers({
            'Authorization':AuthorizationString,
            'Content-Type':'application/x-www-form-urlencoded'
        }),
        body:'oauth_verifier='+oauth_verifier
    }).then(response=> resolve(response.json()))
        .catch(error=>reject(error.status));
});