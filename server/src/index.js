const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/index');
const startServer = require('./startServer');

const server = express();

server.use('/graphql', graphqlHTTP(() => ({
  schema,
  graphiql: true,
  pretty: true,
})));

startServer(server);
