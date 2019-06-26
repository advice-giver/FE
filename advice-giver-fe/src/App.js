import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import User from './components/User';
import Navigation from './components/Navigation';
import QuestionForm from '../src/components/QuestionForm';
// import QuestionFeed from './components/QuestionFeed';
import { grabFeed, postQ } from "./actions";


class App extends React.Component {
  state = {
    question:{
      user_id:1,
      type:'select',
      title:'',
      message:'',
      private:false,
      isAnswered:false,
    }
  }

  getFeed = e => {
    e.preventDefault();
    this.props.grabFeed();
  }

  postQ = (e,question) => {
    e.preventDefault();
    this.props.postQ(question)
  }
  
  changeHandler = e => {
    e.preventDefault();
    e.persist();
    this.setState( prevState =>({
      question:{
        ...prevState.question,
        [e.target.name]: e.target.value
      }
    }));
  }



  render(){


    return (
      <div className="App">
        <Navigation/>
        <User/>
        <QuestionForm changeHandler={this.changeHandler} postQ={this.postQ} question={this.state.question}/>
        <div className="question-feed">
          <button onClick={this.getFeed}>Feed</button>
          {this.props.userQuestions.map(question => (
            <div key ={question.id}>
              <h4>{question.title}</h4>
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
    { grabFeed,
      postQ
    }
)(App);
