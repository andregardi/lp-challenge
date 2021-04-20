const importData = require('../../src/database/importData');
const jsonData = require('../../src/database/data.json');
const Property = require('../../src/models/Property');

jest.mock('../../src/models/Property');

describe('startServer', () => {
  it('should create one property for each register jsonData', async () => {
    const expectdCalledTimes = jsonData.length;

    await importData();

    expect(Property.create).toHaveBeenCalledTimes(expectdCalledTimes);
  });
});

