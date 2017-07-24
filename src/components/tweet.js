import React,{ Component } from 'react';

export class Tweet extends Component {
    constructor(props){
        super(props);
        this.state={
            tweet:{}
        }
    }
    componentDidMount(){
        let index = this.props.location.pathname.split('/')[3];
        this.setState({
            tweet:this.props.tweets[index]
        })
    }
    render(){
        return(
            <div>Tweet</div>
        )
    }
}