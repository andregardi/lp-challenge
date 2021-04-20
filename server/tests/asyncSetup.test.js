const connection = require('../src/database/connection');
const importData = require('../src/database/importData');
const asyncSetup = require('../src/asyncSetup');

jest.mock('../src/database/importData', () => jest.fn());
jest.mock('../src/database/connection');

describe('startServer', () => {
  it('should setup async tasks before starting the server', async () => {
    // const mockServer = { listen: jest.fn() };

    await asyncSetup();

    // expect(mockServer.listen).toHaveBeenCalled();
    expect(connection.sync).toHaveBeenCalled();
    expect(importData).toHaveBeenCalled();
  });
});

// https://dzone.com/articles/testing-graphql-server-in-nodejs
