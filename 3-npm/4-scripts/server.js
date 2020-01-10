const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send('Hello Express! haos');
});

server.listen(8000, () => {
  console.log('Server is running...Uga buga buga');
});
