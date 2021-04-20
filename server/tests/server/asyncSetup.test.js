const connection = require('../../src/database/connection');
const importData = require('../../src/database/importData');
const asyncSetup = require('../../src/server/asyncSetup');

jest.mock('../../src/database/importData', () => jest.fn());
jest.mock('../../src/database/connection');

describe('startServer', () => {
  it('should setup async tasks before starting the server', async () => {
    await asyncSetup();

    expect(connection.sync).toHaveBeenCalled();
    expect(importData).toHaveBeenCalled();
  });
});
