module.exports = `{
  searchProperties(searchParam: "malibu") {
    pages
    properties {
      id
      homeImage
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
