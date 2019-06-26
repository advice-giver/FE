import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import User from './components/User';
import Navigation from './components/Navigation';

class App extends React.Component {
  render(){

    return (
      <div className="App">
        <Navigation/>
        <User/>
      </div>
    );
  }
}

export default App;
