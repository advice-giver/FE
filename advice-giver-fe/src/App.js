import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import User from './components/User';
import Navigation from './components/Navigation';
import QuestionForm from '../src/components/QuestionForm';
// import QuestionFeed from './components/QuestionFeed';
import { grabFeed } from "./actions";


class App extends React.Component {
  
  getFeed = e =>{
    e.preventDefault();
    this.props.grabFeed();
  }
  
  render(){


    return (
      <div className="App">
        <Navigation/>
        <User/>
        <QuestionForm/>
        <div className="question-feed">
          <button onClick={this.getFeed}>Feed</button>
          {this.props.userQuestions.map(question => (
            <div key ={question.id}>
              <h1>{question.title}</h1>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userQuestions: state.userQuestions,
  user_id: state.user.id,
})

export default connect(
    mapStateToProps,
    { grabFeed }
)(App);
