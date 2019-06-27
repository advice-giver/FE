import React from 'react';
class QuestionFeed extends React.Component {
    render(){
        return(
            <div className="question-feed">
                <button onClick={this.getFeed}>Feed</button>
                {this.props.userQuestions.map(question => (
                    <div key ={question.id}>
                    <h4>{question.title}</h4>
                    </div>
                ))}
            </div>
        )
    }
}

export default QuestionFeed;