const express = require('express');

const server = express();

server.get('/' , (reg, res) => {
   res.send('Hello expres from Vule  ');
})
server.get('/about' , (reg, res) => {
  res.send('About...');
})


server.listen(4242, () => {
  console.log('Express Server is running NOW...');
});
