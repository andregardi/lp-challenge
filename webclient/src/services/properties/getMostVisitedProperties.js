import { gql } from "@apollo/client";
import apolloClient from "../apolloClient";

const query = gql`
  query GetProperties {
    mostVisitedProperties {
      id
      homeImage
      overview {
        price
      }
      visits {
        total
      }
    }
  }
`;

const mapData = (data) => data.mostVisitedProperties;

const useMostVisitedProperties = () =>
  apolloClient.useQuery(query, { mapData });

export default useMostVisitedProperties;
