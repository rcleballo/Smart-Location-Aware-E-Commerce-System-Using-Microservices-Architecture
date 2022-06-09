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

      const images = [
         "https://firebasestorage.googleapis.com/v0/b/smart-location-aware-ecommerce.appspot.com/o/1654803475561il_fullxfull.3581965582_54uq.webp?alt=media&token=99a405b8-da71-4f5b-8b7f-046948d5958a",
         "https://firebasestorage.googleapis.com/v0/b/smart-location-aware-ecommerce.appspot.com/o/1654803475561il_fullxfull.3581965582_54uq.webp?alt=media&token=99a405b8-da71-4f5b-8b7f-046948d5958a",
         "https://firebasestorage.googleapis.com/v0/b/smart-location-aware-ecommerce.appspot.com/o/e0dc9dda8c919d13d9c51fd65a21e523--vintage-cupcake-fairy-cakes.jpg?alt=media&token=5f4221e1-1c09-46a8-a68f-2ae3770aa10d",
         "https://firebasestorage.googleapis.com/v0/b/smart-location-aware-ecommerce.appspot.com/o/download.jpg?alt=media&token=4ad0d96c-b921-4ed7-887a-19b544139bb6"
      ];

      PythonShell.run('recommendation.py', options, function(err, results) {
         if (err) throw err;
         let finalRes = [];
         let recObjects = [];
         for (let i = 2; i <= 5; i++) {
            finalRes[i-2] = results[i].replace(/[.0-9]/g, '').trim();
         }
         
         for (let i = 0; i < 4; i++) {
            let recObject = new Object();
            recObject.inStock = true,
            recObject._id = "62719bb67f87c78dfdfbb7ca",
            recObject.title = finalRes[i];
            recObject.desc = "Recommendation";
            recObject.img = images[Math.floor(Math.random() * images.length)];
            recObject.categories = ["recommended"];
            recObject.size = ["S"];
            recObject.color = "White";
            recObject.price = 1000;
            console.log(recObject);
            recObjects[i] = recObject;
         }

         console.log(recObjects);

         res.status(200).json(recObjects);
      });
   });
 } catch (err) {
    console.log(err);
 }
 
 app.listen(process.env.PORT || 5004, () => {
   console.log("Recommendations-Service is running on port 5004");
 });
 
 eurekaHelper.registerWithEureka('recommendations-Service', process.env.PORT);