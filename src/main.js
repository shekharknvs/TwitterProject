import React  from 'react';
import ReactDOM from 'react-dom';
import { Route , Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux'
import Home from './containers/home';
import Tweet from './containers/tweet';
import Login from './containers/login';
import { store , history } from './store';
import {Header } from './components/header';
import {Callback} from './components/callback';

ReactDOM.render(
<Provider store={store}>
    <div>
        <Header/>
        <Router history={history}>
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="login" component={Login}/>
            <Route path="tweet/:tweetId" component={Tweet}/>
            <Route path="callback" component={Callback}/>
        </div>
        </Router>
    </div>
</Provider>,
    document.getElementById('root')
);
