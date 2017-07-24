import React , {Component} from 'react';
import TweetCard from './tweetCard';
import { Link } from 'react-router';
import { getHomeTimeLine } from '../utils/twitterRequests';

export class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            pageNo:1,
            pageNoArray:[],
            prevButtonStyle:{display:'none'},
            nextButtonStyle:{display:'none'}
        }
    }
    componentDidMount(){
        let cookie = (document.cookie)?JSON.parse(document.cookie):false;
        if(!cookie)
            window.location.pathname = '/login';
        else{
            let oauth_token = cookie['oauth_token'];
            let oauth_token_secret = cookie['oauth_token_secret'];
            if(oauth_token && oauth_token_secret) {
                this.props.accessToken({oauth_token, oauth_token_secret});
                getHomeTimeLine();
            }else
                alert("something is wrong");
        }
    }
    onPrevClick(){
        this.setState({
            pageNo:this.state.pageNo-1,
            prevButtonStyle:{
                display:(this.state.pageNo-1 <=0)?'none':'block'
            }
        })
    }
    onNextClick(){
        this.setState({
            pageNo:this.state.pageNo+1,
            nextButtonStyle:{
                display:(this.state.pageNo+1 >=5 )?'none':'block'
            }
        })
    }


    render(){
        if(!document.cookie)
            this.props.push('/login');
        else {
            const renderTweets =this.props.tweets.map((TweetData, index)=>(
                <Link to={`/tweet/${index}`} style={{textDecoration: 'none'}} key={index} onClick={(e)=>this.props.addLike(index)}>
                    <TweetCard
                        key={index}
                        TweetData={TweetData}
                        pageNo={this.state.pageNo}
                        index={index}
                    />
                </Link>
            ));
            return (
                <div>
                    <h1>Home </h1>
                    {renderTweets}
                    <button className="btn btn-default" style={this.state.prevButtonStyle} onClick={(e)=>this.onPrevClick()} >Prev</button>
                    <button className="btn btn-default" style={this.state.nextButtonStyle} onClick={(e)=>this.onNextClick()} >Next</button>
                </div>
            )
        }
    }
}