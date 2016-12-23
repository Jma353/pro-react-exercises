import fs from 'fs';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import ContactsApp from './app/components/ContactsApp';

/* App object */
const app = express ();

/* Static file configurations */
app.set ('views', './');
app.set ('view engine', 'ejs');
app.use (express.static(__dirname + '/public'));

/* Static data (read in synchronously )*/
const contacts = JSON.parse (fs.readFileSync (__dirname + '/public/contacts.json', 'utf8'));


/* Factory for our top-level react component */
const ContactsAppFactory = React.createFactory (ContactsApp);

/* Single page we want access to */
app.get('/', (request, response) => {
  /* Create the component & serve it to the template as string */
  let componentInstance = ContactsAppFactory ({ initialData : contacts });
  response.render ('index', {
    reactInitialData: JSON.stringify(contacts), // dumped to a <script> tag 
    content: renderToString (componentInstance)
  });
});

/* Listen on port */
app.listen (3000, () => {
  console.log ('App listening on port 3000');
});
