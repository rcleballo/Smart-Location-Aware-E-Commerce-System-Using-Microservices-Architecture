const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const eurekaHelper = require('./eurekaHelper');
const productRoute = require('./Routes/product');

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/products", productRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Product-Service is running on port 5000");
});

eurekaHelper.registerWithEureka('Product-Service', 5000);