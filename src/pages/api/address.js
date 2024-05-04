import { AddressModel } from "@/db/models/AddressModel"

const { createRoute } = require("@/api/createRoute")
const handle = createRoute(async (req, res) => {
  if (req.method === "POST") {
    const {
      title,
      street,
      city,
      postalCode,
      country,
      restaurantDetails,
      museumDetails,
      barDetails,
      parcDetails,
    } = req.body
    const newAddress = new AddressModel({
      title,
      street,
      city,
      postalCode,
      country,
      restaurantDetails,
      museumDetails,
      barDetails,
      parcDetails,
    })
    await newAddress.save()
    res.send(newAddress)

    return
  }

  if (req.method === "GET") {
    const address = await AddressModel.find()
    res.send(address)

    return
  }

  res.status(404).send({ error: "Not a valid Method" })
})
export default handle
