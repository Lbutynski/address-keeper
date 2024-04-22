import { addressModel } from "@/db/models/addressModel";

const { createRoute } = require("@/api/createRoute");

const handle = createRoute(async (req, res) => {
  if (req.method === "POST") {
    const { title, street, city, postalCode, country, restaurantDetails } =
      req.body;
    const newAddress = new addressModel({
      title,
      street,
      city,
      postalCode,
      country,
      restaurantDetails,
    });
    await newAddress.save();
    res.send(newAddress);
    return;
  }

  if (req.method === "GET") {
    const address = await addressModel.find();
    res.send(address);
    return;
  }
  res.status(404).send({ error: "Not a valid Method" });
});
export default handle;
