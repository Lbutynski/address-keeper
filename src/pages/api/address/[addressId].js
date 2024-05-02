const { createRoute } = require("@/api/createRoute")
const { addressModel } = require("@/db/models/AddressModel")
const handle = createRoute(async (req, res) => {
  const { addressId } = req.query
  const address = await addressModel.findById(addressId)

  if (req.method === "GET") {
    res.send(address)

    return
  }

  if (req.method === "PATCH") {
    const { title, city, postalCode, country, restaurantDetails } = req.body
    address.title = title || address.title
    address.city = city || address.city
    address.postalCode = postalCode || address.postalCode
    address.country = country || address.country

    address.restaurantDetails = restaurantDetails || address.restaurantDetails

    await address.save()
    res.send(address)

    return
  }

  if (req.method === "DELETE") {
    await addressModel.deleteOne({ _id: addressId })
    res.send(address)

    return
  }

  res.status(404).send({ error: "Not a valid Method" })
})
export default handle
