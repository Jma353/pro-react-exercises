import React from 'react';
import { render } from 'react-dom';
import createBrowserHistory from 'react-router/node_modules/history/lib/createBrowserHistory'; 
import { Router } from 'react-router';
import routes from './app/routes';

/* History */
const history = createBrowserHistory()

/* Render the router */
render (
  <Router history={history} routes={routes} />,
  document.getElementById ('root')
);
