import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import App from './app';
import Links from './components/Links';
// import PressKit from './components/PressKit';
import Tour from './components/Tour';
import 'styles/index.scss';

// <Route path="/:route" render={(route) => {
//   return (<App route={route.match.params.route} />);
// }} />

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/linkinbio" component={Links} />
      <Route exact path="/tour" component={Tour} />
    </div>
  </Router>
);

export default Routes;
