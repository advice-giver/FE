import React from 'react';
import RequiresAuth from './RequiresAuth';

class Navigation extends React.Component {
    render(){
        return(
            <nav>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a href="#">Logout</a>
            </nav>
        )
    }
}

export default RequiresAuth(Navigation);