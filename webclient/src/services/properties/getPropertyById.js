import { gql } from "@apollo/client";
import apolloClient from "../apolloClient";

const query = gql`
  query ByPropertyId($propertyId: Int) {
    property(id: $propertyId) {
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
      facts {
        type
        yearBuilt
        heating
        parking
        lot
        stories
      }
    }
  }
`;

const mapData = (data) => data.property;

const useGetPropertyById = (propertyId) =>
  apolloClient.useQuery(query, { variables: { propertyId }, mapData });

export default useGetPropertyById;
