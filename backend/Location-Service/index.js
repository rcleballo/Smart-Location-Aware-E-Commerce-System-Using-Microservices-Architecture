const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const eurekaHelper = require('./eurekaHelper');
const productRoute = require('./Routes/location');

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
});

app.use(cors());
app.use(express.json());
app.use("/api/location", productRoute);

app.listen(process.env.PORT || 5005, () => {
  console.log("Location-Service is running on port 5006");
});

eurekaHelper.registerWithEureka('Location-Service', 5006);