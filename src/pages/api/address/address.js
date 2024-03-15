import { addressModel } from "@/db/models/addressModel";

const { createRoute } = require("@/api/createRoute");

const handle = createRoute(async (req, res) => {
  if (req.method === "GET") {
    const address = addressModel.find();
    res.send(address);
  }
});
export default handle;
