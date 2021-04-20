const supertest = require('supertest');
const server = require('../../src/server');
const propertyQuery = require('./queries/property.js');
const paginatedPropertiesQuery = require('./queries/paginatedProperties.js');
const mostVisitedPropertiesQuery = require('./queries/mostVisitedProperties.js');
const mostRecentPropertiesQuery = require('./queries/mostRecentProperties.js');
const searchPropertiesQuery = require('./queries/searchProperties.js');

const request = supertest(server);

describe('GraphQL', () => {
  beforeAll(async () => {
    await server.ready;
  });

  describe('property query', () => {
    it('it should throw error on requesting for invalid id', async () => {
      const invalidId = 11;
      const query = `{
        property(id: ${invalidId}){
          homeImage
        }
      }`;
      const expectedError = `Property ID ${invalidId} could not be found.`;

      const response = await request.post('/graphql').send({ query });
      const { errors, data } = response.body;

      expect(response.status).toBe(200);
      expect(data.property).toEqual(null);
      expect(errors[0].message).toEqual(expectedError);
    });

    it('it should query the property', async () => {
      const response = await request
        .post('/graphql')
        .send({ query: propertyQuery });

      const { property } = response.body.data;

      expect(property.id).toEqual(expect.any(Number));
      expect(property.overview).toEqual(expect.any(Object));
      expect(property.facts).toEqual(expect.any(Object));
      expect(property.others).toEqual(expect.any(Object));
      expect(property.visits).toEqual(expect.any(Object));
      expect(property.images).toEqual(expect.any(Array));
    });
  });

  it('should query paginatedProperties', async () => {
    const response = await request
      .post('/graphql')
      .send({ query: paginatedPropertiesQuery });

    const { paginatedProperties } = response.body.data;

    expect(paginatedProperties.pages).toEqual(expect.any(Number));
    expect(paginatedProperties.properties).toEqual(expect.any(Array));
  });

  it('should query mostVisitedProperties', async () => {
    const response = await request
      .post('/graphql')
      .send({ query: mostVisitedPropertiesQuery });

    const { mostVisitedProperties } = response.body.data;

    expect(mostVisitedProperties).toEqual(expect.any(Array));
  });

  it('should query mostRecentProperties', async () => {
    const response = await request
      .post('/graphql')
      .send({ query: mostRecentPropertiesQuery });

    const { mostRecentProperties } = response.body.data;

    expect(mostRecentProperties).toEqual(expect.any(Array));
  });

  it('should query searchProperties', async () => {
    const response = await request
      .post('/graphql')
      .send({ query: searchPropertiesQuery });

    const { searchProperties } = response.body.data;

    expect(searchProperties.pages).toEqual(expect.any(Number));
    expect(searchProperties.properties).toEqual(expect.any(Array));
  });
});
