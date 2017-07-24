import { connect } from 'react-redux';
import { Login } from '../components/login';
import { bindActionCreators } from 'redux';
import { getAccessToken , addTweets } from '../actions';
import { push } from 'react-router-redux';
const mapStateToProps = (state) => {
    return{
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({

    },dispatch)
};


export default connect(mapStateToProps,mapDispatchToProps)(Login);