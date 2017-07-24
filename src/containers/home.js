import { connect } from 'react-redux';
import { Home } from '../components/home';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import { getUpdatedTweets, addTweets , accessToken, addLike} from '../actions';
const mapStateToProps = (state) => {
    console.log('state',state);
    return{
        tweets:state.tweets
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        push,
        getUpdatedTweets,
        addTweets,
        accessToken,
        addLike
    },dispatch)
};


export default connect(mapStateToProps,mapDispatchToProps)(Home);