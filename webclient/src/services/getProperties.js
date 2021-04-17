import { gql } from "@apollo/client";
import apolloClient from "./apollo";

async function getProperties() {
   return apolloClient.query({
    query: gql`
      query GetProperties {
        {
          properties {
            homeImage,
            overview{
              price
            }
            visits{
              total
            }
            facts{ 
              type
            }
          }
        }
      }
    `,
  });
}

export default getProperties;