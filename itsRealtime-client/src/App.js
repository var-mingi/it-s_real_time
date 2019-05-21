import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/App.css';
// import { connect } from 'react-redux';
// import * as actions from '../actions';

import Login from './screens/Login/Login';
import Home from './screens/Home/Home';
import Swipe from './screens/Swipe/Swipe';
import Match from './screens/Match/Match';
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/swipe" component={Swipe} />
          <Route exact path="/match" component={Match} />
        </Switch>
      </Router>
    );
  }
}

export default App;

//export default connect(null, actions)(App);