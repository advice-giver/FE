import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Login from './components/Login';
import Register from './components/Register';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            messages: []
        }
    }

    render() {
        return (
            <div className="App">
                <Route exact path="/" render={props =>
                        <Login {...props} />
                    }>
                </Route>

                <Route exact path="/register" render={props => 
                        <Register {...props} />
                    }>
                </Route>
            </div>
        )
    }
}

export default App;