module.exports = `{
  mostVisitedProperties {
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
    facts {
      type
      yearBuilt
      heating
      parking
      lot
      stories
    }
    others {
      anualTax
      hasGarage
      pool
      virtualTourLink
      parcelNumber
      lastSold
    }
    visits {
      total
      lastVisited
    }
    images
  }
}`;
