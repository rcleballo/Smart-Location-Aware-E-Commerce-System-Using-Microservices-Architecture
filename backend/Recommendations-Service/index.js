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
   app.get('/api/recommendations', (req, res) => {
      console.log(req.body.item);
      let item = req.body.item;
      
      const options = {
         args: req.body.item
      }

      PythonShell.run('recommendation.py', options, function(err, results) {
         if (err) throw err;
         let finalRes = [];
         for (let i = 1; i <= 5; i++) {
            finalRes[i-1] = results[i].replace(/[.0-9]/g, '').trim();
         }
         console.log("1");
         console.log("2");
         console.log(finalRes);
         console.log(results[1].replace(/[.0-9]/g, '').trim());
         res.status(200).json(finalRes);
      });
   });
 } catch (err) {
    console.log(err);
 }
 
 app.listen(process.env.PORT || 5004, () => {
   console.log("User-Service is running on port 5004");
 });
 
 eurekaHelper.registerWithEureka('recommendations-Service', process.env.PORT);