import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import App from './app';
import About from './components/About';
import 'styles/index.scss';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/:route" render={(route) => {
        return (<App route={route.match.params.route} />);
      }} />

    </div>
  </Router>
);

export default Routes;
