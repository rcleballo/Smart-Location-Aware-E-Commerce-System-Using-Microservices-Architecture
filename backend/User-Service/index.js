const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const eurekaHelper = require('./eurekaHelper');
const userRoute = require('./Routes/user');
const authRoute = require('./Routes/auth');

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(process.env.PORT || 5003, () => {
  console.log("User-Service is running on port 5003");
});

eurekaHelper.registerWithEureka('user-Service', 5003);