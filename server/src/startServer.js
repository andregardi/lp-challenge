const connection = require('./database/connection');
const importData = require('./database/importData');

async function startServer(server) {
  await connection.sync({});
  console.info('INFO - Database sync complete.');

  await importData();

  server.listen(4000);
}

module.exports = startServer;
