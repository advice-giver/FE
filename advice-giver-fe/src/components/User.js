import React from 'react';
import RequiresAuth from './RequiresAuth';
import { connect } from 'react-redux';
import { grabfeed } from '../actions'


class User extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return(
            <>
                <div className="user-dash">
                    <img src="http://via.placeholder.com/160" alt='profile-pic'/>
                    <p>{this.props.user.username}</p>
                </div>
            </>
        )
    }
}


const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {})(RequiresAuth(User));