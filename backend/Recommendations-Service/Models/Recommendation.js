const mongoose = require("mongoose");

const RecommendationSchema = new mongoose.Schema(
  {
    InvoiceNo: { type: Number, required: true, unique: true },
    StockCode: { type: Number, required: true, },
    Description: { type: String, required: true },
    Quantity: { type: Number, required: true },
    InvoiceDate: { type: Date, required: true },
    UnitPrice: { type: Number, required: true },
    CustomerID: { type: Number, required: true },
    Country: { type: String, required: true},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Recommendation", RecommendationSchema);