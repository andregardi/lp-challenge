const connection = require('./database/connection');
const importData = require('./database/importData');

async function asyncSetup() {
  await connection.sync({});
  await importData();
}

module.exports = asyncSetup;
