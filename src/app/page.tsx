import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Registration from './components/Registration';
import Login from './components/Login';
import ProjectSubmissionForm from './components/ProjectSubmissionForm';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" component={Registration} />
        <Route path="/login" component={Login} />
        <Route path="/submit" component={ProjectSubmissionForm} />
      </Switch>
    </Router>
  );
}

export default App;
