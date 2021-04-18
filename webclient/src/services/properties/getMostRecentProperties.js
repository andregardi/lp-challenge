import { gql } from "@apollo/client";
import apolloClient from "../apolloClient";

const query = gql`
  query GetProperties {
    mostRecentProperties {
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

const mapData = (data) => data.mostRecentProperties;

const useMostRecentProperties = () => apolloClient.useQuery(query, { mapData });

export default useMostRecentProperties;
