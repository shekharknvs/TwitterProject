import React from 'react';
import { oauth_access_token} from '../utils/oauth';

export const  Callback = (props)=>{
    let search = window.location.search;
    let oauth_token = search('oauth_token').split('oauth_token')[1];
    let oauth_verifier = oauth_token.split('oauth_verifier')[1];
    oauth_token = oauth_token.split('oauth_verifier')[0];
    if(oauth_token && oauth_verifier){
        let cookie = (document.cookie)?JSON.parse(document.cookie):{};
        let oauth_token="";
        let oauth_token_secret="";
        oauth_access_token(oauth_verifier,oauth_token)
            .then(res=>{
                oauth_token=res['oauth_token'];
                oauth_token_secret=res['oauth_token_secret'];
                document.cookie = JSON.stringify(Object.assign({},cookie, {oauth_verifier,oauth_token, oauth_token_secret, oauth_token}));
                window.location.pathname='/';
            })
            .catch(error=>{
                alert('something went wrong ..!!, error');
                window.location.pathname='/login';
            });

    }
    else{
        alert('Something wrong went ');
        window.location.pathname='/login';
    }
    return(
        <div>.....Loading </div>
    )
};