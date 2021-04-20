const server = require('./server');

server.ready.then(() => {
  server.listen(4000);
});
