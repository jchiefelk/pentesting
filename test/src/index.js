import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/routes';
import {browserHistory} from 'react-router';




ReactDOM.render(
  <Routes history={browserHistory}/>,
  document.getElementById('root')
);
