const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const eurekaHelper = require('./eurekaHelper');
const cartRoute = require('./Routes/cart');

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/cart", cartRoute);

app.listen(process.env.PORT || 5001, () => {
  console.log("Product-Service is running on port 5001");
});

eurekaHelper.registerWithEureka('Cart-Service', 5001);