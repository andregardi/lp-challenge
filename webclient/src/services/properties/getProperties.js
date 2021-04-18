import { gql } from "@apollo/client";
import { queryData } from "../apollo";

const query = gql`
query GetProperties {
  properties {
    homeImage
  }
}`;

function getProperties() {
  return queryData(query);
}

export default getProperties;