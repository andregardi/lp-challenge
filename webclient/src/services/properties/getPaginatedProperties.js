import { gql } from "@apollo/client";
import apolloClient from "../apolloClient";

const query = gql`
  query GetProperties($page: Int) {
    paginatedProperties(page: $page) {
      pages
      properties {
        id
        homeImage
        images
        overview {
          price
          beds
          baths
          neighborhood
          address
          city
          zipcode
          available
        }
      }
    }
  }
`;

const mapData = (data) => data.paginatedProperties;

const usePaginatedProperties = (page) =>
  apolloClient.useQuery(query, { variables: { page }, mapData });

export default usePaginatedProperties;
