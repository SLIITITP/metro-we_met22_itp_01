const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Loyal_Customer(loyaltyID, custID, loyaltyPoints);
const loyalCustomerSchema = new Schema({
  loyaltyID: {
    type: String,
    required: true,
    unique: true,
  },
  custId: {
    type: String,
    required: true,
    unique: true,
  },
  loyaltyPoints: {
    type: Number,
  },
});

const LoyalCustomer = mongoose.model("LoyalCustomer", loyalCustomerSchema);
module.exports = LoyalCustomer;
