import React from 'react';
import RequiresAuth from './RequiresAuth';
import { connect } from 'react-redux';
import { grabFeed } from '../actions';

class QuestionFeed extends React.Component {

    
    render(){
       
        const user_id = localStorage.getItem('user_id')
        const user_messages = this.props.userQuestions.filter(question =>  {
            return question.user_id == user_id
            })
   
        return(
            <div className="question-feed">
                <button onClick={this.props.grabFeed}>Feed</button>
                {user_messages.map(question => (
                    <div key ={question.id}>
                    <h4>{question.title}</h4>
                    </div>
                ))}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        user: state.user,
        userQuestions: state.userQuestions
    }
}


export default connect(mapStateToProps, { grabFeed })(RequiresAuth(QuestionFeed));