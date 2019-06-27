import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import User from './components/User';
import Navigation from './components/Navigation';
import QuestionForm from '../src/components/QuestionForm';
import QuestionFeed from './components/QuestionFeed';
import { grabFeed, postQ } from "./actions";
import { Route } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';

class App extends React.Component {

  getFeed = e => {
    e.preventDefault();
    this.props.grabFeed();
  }

  render(){
    return (
      <div className="App">
        <Route path={`/user`} render={props =>
              <>
                  <Navigation />
                  <User {...props} />
              </>
          }>
        </Route>

        <Route exact path='/questionform' render={props =>
              <QuestionForm {...props} />
          }>
        </Route>

        <Route exact path='/questionfeed' render={props =>
              <QuestionFeed {...props} getFeed={this.getFeed} userQuestions={props.userQuestions} />
          }>
        </Route>

        <Route exact path="/" render={props =>
              <Login {...props} />
          }>
        </Route>

        <Route exact path="/register" render={props => 
              <Register {...props} />
          }>
        </Route>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userQuestions: state.userQuestions,
  user_id: state.user.id,
  user: state.user
})

export default connect(
    mapStateToProps,
    { grabFeed,
      postQ
    }
)(App);