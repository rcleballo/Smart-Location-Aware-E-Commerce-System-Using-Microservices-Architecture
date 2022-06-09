const { Parser } = require('json2csv');
const { PythonShell } = require('python-shell');
const Recommendation = require('../Models/Recommendation');
const router = require("express").Router();

router.get('/', async (req, res) => {
    console.log(req.body.item);
    
    const fields = [
        'InvoiceNo',
        'StockCode',
        'Description',
        'Quantity',
        'InvoiceDate',
        'UnitPrice',
        'CustomerID',
        'Country'
    ];
    const opts = { fields };

    try {
        let data = await Recommendation.find().limit(10);
        console.log("1");
        console.log(data);
        console.log("2");
        const parser = new Parser(opts);
        const csv = parser.parse(data);

        console.log(csv);
        
        
    } catch (err) {
        console.log(err);
    } 
});

module.exports = router;
