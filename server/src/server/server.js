const express = require('express');
const cors = require('cors');
const asyncSetup = require('./asyncSetup');
const graphql = require('../graphql/index');

const server = express();

// Allow the react app access from any origin
server.use(cors());

// Serve the images from the public folder
server.use(express.static('public'));

// Setup the GraphQL
server.use('/graphql', graphql);

server.ready = asyncSetup(server);

module.exports = server;
