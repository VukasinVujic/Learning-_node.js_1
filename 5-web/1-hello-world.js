const http = require('http');


const requestListener = (req, res) => {
  console.dir(res , {depth: 0});
  // console.log(req.url);
  res.end('Hello node\n');
}

const server = http.createServer(requestListener);
server.on('request', requestListener); 

server.listen(4242, () => {
  console.log('Server is running...');
});
