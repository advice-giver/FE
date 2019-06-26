import React from 'react';
import QuestionForm from './QuestionForm';


class User extends React.Component {
    state = {
     }
     
    

    render(){
        return(
            <>
                <div className="user-dash">
                    <img src="http://via.placeholder.com/160" alt='profile-pic'/>
                </div>
                <QuestionForm/>
            </>
        )
    }
}

export default User;