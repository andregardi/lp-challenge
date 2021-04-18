const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');
const startServer = require('./startServer');

const server = express();

// Allow the react app access from any origin
server.use(cors());

// Serve the images from the public folder
server.use(express.static('public'));

// Setup the GraphQL
server.use(
  '/graphql',
  graphqlHTTP(() => ({
    schema,
    graphiql: true,
    pretty: true,
  }))
);

// Setup async tasks before starting the server
startServer(server);
