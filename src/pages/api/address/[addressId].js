const { createRoute } = require("@/api/createRoute")
const { AddressModel } = require("@/db/models/AddressModel")
const handle = createRoute(async (req, res) => {
  const { addressId } = req.query
  const address = await AddressModel.findById(addressId)

  if (req.method === "GET") {
    res.send(address)

    return
  }

  if (req.method === "PATCH") {
    const {
      title,
      city,
      postalCode,
      country,
      restaurantDetails,
      museumDetails,
      barDetails,
      parcDetails,
    } = req.body
    address.title = title || address.title
    address.city = city || address.city
    address.postalCode = postalCode || address.postalCode
    address.country = country || address.country

    address.restaurantDetails = restaurantDetails || address.restaurantDetails
    address.museumDetails = museumDetails || address.museumDetails
    address.barDetails = barDetails || address.barDetails
    address.parcDetails = parcDetails || address.parcDetails

    await address.save()
    res.send(address)

    return
  }

  if (req.method === "DELETE") {
    await AddressModel.deleteOne({ _id: addressId })
    res.send(address)

    return
  }

  res.status(404).send({ error: "Not a valid Method" })
})
export default handle
