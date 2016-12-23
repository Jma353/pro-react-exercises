import React from 'react';
import { render } from 'react-dom';
import ContactsApp from './app/components/ContactsApp';

/* Grab the data from the tag */
let initialData = document.getElementById ('initial-data').textContent;
if (initialData.length > 0) {
  initialData = JSON.parse (initialData);
}

/* Render our top-level component */
render (<ContactsApp initialData={initialData} />, document.getElementById ('root'));
