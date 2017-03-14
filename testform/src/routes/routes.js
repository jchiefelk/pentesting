import React from 'react';
import { Router, Route } from 'react-router';
import App from '../components/App';
import About from '../components/about';
import Publishing from '../components/publishing';
import ArticlePage from '../components/articlepage';
import TableView from '../components/tableview';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="/tableview/:secret" component={TableView} />
    <Route path="/publishing/:secret" component={Publishing} />
  </Router>
);
export default Routes;