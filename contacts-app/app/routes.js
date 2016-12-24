import React from 'react';
import { Route, IndexRoute, Router } from 'react-router';
import App from './routes/App';
import Home from './routes/Home';
import ContactsApp from './components/ContactsApp';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path="contacts" component={ContactsApp} />
  </Route>
);
