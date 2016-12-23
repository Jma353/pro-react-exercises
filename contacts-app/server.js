import express from 'express';
import contacts from './public/contacts.json';

/* App object */
const app = express ();

/* Static file configurations */
app.set ('views', './');
app.set ('view engine', 'ejs');
app.use (express.static(__dirname + '/public'));

/* Single page we want access to */
app.get('/', (request, response) => {
  response.render('index', { content: "Hello" });
});

/* Listen on port */
app.listen (3000, () => {
  console.log ('App listening on port 3000');
});
