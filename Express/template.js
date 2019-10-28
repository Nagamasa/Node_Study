const express = require('express');
const app = express();

// jade
// app.set('view engine', 'jade');

// app.get('/', (req, res) => {
//   res.status(200).render('index.jade', { title: 'Node study' })
// });

// ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.status(200).render('index.ejs', { title: 'Node study' })
});


app.listen(3000);