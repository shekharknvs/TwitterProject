import React , {Component} from 'react';
import { requestToken, oauth_authenticate } from '../utils/oauth';

export class Login extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        let cookie = (document.cookie)?JSON.parse(document.cookie):"";
        if(!cookie.access_token) {
            requestToken()
                .then(res => {
                    document.cookie = JSON.stringify(res);
                    this.setState({
                        ...res
                    })
                })
                .catch(error => {
                    alert("refresh browser error");
                })
        }else{
            window.location.pathname='/';
        }
    }
    render(){
        return(
                <form action={oauth_authenticate()} method="get">
                    <button type="submit" className="btn btn-default">Login</button>
                </form>
        )
    }
}