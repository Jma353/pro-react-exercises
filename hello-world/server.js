import express from 'express';
const app = express ();

/* Base route */
app.get ('/', (request, response) => {
  response.send ('<html><body><p>Hello World!</p></body></html>');
});

/* Run app on port */
app.listen (3000, () => {
  console.log('App listening on port 3000');
});
