import { connect } from 'react-redux';
import { Tweet } from '../components/tweet';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
const mapStateToProps = (state) => {
    return{
        tweets:state.tweets
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({

    },dispatch)
};


export default connect(mapStateToProps,mapDispatchToProps)(Tweet);