import { gql, useQuery } from "@apollo/client";
import apolloClient from "../apollo";

const query = gql`
  query GetProperties {
    mostVisitedProperties {
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

const useMostVisitedProperties = () =>
  useQuery(query, { client: apolloClient });

export default useMostVisitedProperties;
