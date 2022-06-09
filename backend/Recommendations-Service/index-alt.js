const express = require('express');
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const eurekaHelper = require('./eurekaHelper');
const recommendationRoute = require('./Routes/Recommendations');

const app = express();

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
});

app.use(cors());
app.use(express.json());
app.use("/api/recommendations", recommendationRoute);

 app.listen(process.env.PORT || 5004, () => {
   console.log("User-Service is running on port 5004");
 });
 
 eurekaHelper.registerWithEureka('recommendations-Service', process.env.PORT);