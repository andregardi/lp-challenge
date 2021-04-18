import { gql, useQuery } from "@apollo/client";
import apolloClient from "../apollo";

const query = gql`
  query GetProperties {
    mostRecentProperties {
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

const useMostRecentProperties = () =>
  useQuery(query, { client: apolloClient });

export default useMostRecentProperties;
