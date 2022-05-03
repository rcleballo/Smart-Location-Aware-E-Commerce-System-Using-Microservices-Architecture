const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const eurekaHelper = require('./eurekaHelper');
const orderRoute = require('./Routes/order');

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/orders", orderRoute);

app.listen(process.env.PORT || 5002, () => {
  console.log("Order-Service is running on port 5002");
});

eurekaHelper.registerWithEureka('order-Service', 5002);