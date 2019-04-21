import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import { connect } from 'react-redux';
// import * as actions from '../actions';

import Login from './Login';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default App;

//export default connect(null, actions)(App);