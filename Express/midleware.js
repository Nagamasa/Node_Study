const express = require('express');
const app = express();
const logger = require('./logger.js');

app.use(logger);

app.get('/', (req, res) => {
  res.status(200).send('Hello world');
});

app.listen(3000);