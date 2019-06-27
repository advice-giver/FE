import React from 'react';
import requiresAuth from './requiresAuth';
import { connect } from 'react-redux';

class User extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
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

export default connect(mapStateToProps, {})(requiresAuth(User));