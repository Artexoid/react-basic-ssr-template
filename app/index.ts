import express from 'express';

import { make } from 'lib/bundle';

import { render } from 'entry/Server';

const bundle = await make(import.meta.dirname, '/entry/Client');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/assets/bundle.js', (req, res) => {
  res.status(200).header('content-type', 'application/javascript').send(bundle);
});

app.get('*', (req, res) => {
  res.status(200).send(render());
});

app.listen(4000, '127.0.0.1', () => {
  console.log('server running on port 4000');
});
