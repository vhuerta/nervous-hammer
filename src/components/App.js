import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createReactClass from 'create-react-class';
import Auth from './auth';

const App = createReactClass({
  render() {
    return (
      <Router>
        <Route path="/auth" component={Auth} />
      </Router>
    );
  },
});

export default App;
