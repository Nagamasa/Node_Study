const express = require('express');
const app = express();
const router = require('./router.js');

app.get('/home/index', (req, res) => {
  res.status(200).send('OK');
});

app.use('/user', router);

app.listen(3000);