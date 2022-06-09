const express = require('express');
const dotenv = require("dotenv");
const cors = require("cors");
const { PythonShell } = require('python-shell');
const eurekaHelper = require('./eurekaHelper');

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

/**
 * TODO
 * Return a proper json
 */

try {
   app.get('/api/recommendations/:prod', (req, res) => {
      console.log(req.params.prod);
      
      const options = {
         args: req.params.prod
      }

      PythonShell.run('recommendation.py', options, function(err, results) {
         if (err) throw err;
         let finalRes = [];
         let recObjects = [];
         let recObject = new Object();
         for (let i = 1; i <= 5; i++) {
            finalRes[i-1] = results[i].replace(/[.0-9]/g, '').trim();
            recObject.inStock = true,
            recObject._id = "62719bb67f87c78dfdfbb7ca"
            recObject.title = finalRes[i-1];
            recObject.desc = "Best shirt";
            recObject.img = "https://firebasestorage.googleapis.com/v0/b/smart-location-aware-ecommerce.appspot.com/o/165170559781122087-11.jpg?alt=media&token=0dee5364-64f1-4d02-844b-4f7c6e27d13d"
            recObject.categories = ["shirt"];
            recObject.size = ["S"];
            recObject.color = "White";
            recObject.price = 1000;
            recObjects.push(recObject);
         }
 
         console.log(recObjects);
         console.log(results[1].replace(/[.0-9]/g, '').trim());
         res.status(200).json(recObjects);
      });
   });
 } catch (err) {
    console.log(err);
 }
 
 app.listen(process.env.PORT || 5004, () => {
   console.log("User-Service is running on port 5004");
 });
 
 eurekaHelper.registerWithEureka('recommendations-Service', process.env.PORT);