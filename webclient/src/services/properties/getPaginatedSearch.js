import { gql } from "@apollo/client";
import apolloClient from "../apolloClient";

const query = gql`
  query GetProperties($page: Int, $searchParam: String) {
    searchProperties(page: $page, searchParam: $searchParam) {
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

const mapData = (data) => data.searchProperties;

const usePaginatedSearch = (page, searchParam) =>
  apolloClient.useQuery(query, { variables: { page, searchParam }, mapData });

export default usePaginatedSearch;
