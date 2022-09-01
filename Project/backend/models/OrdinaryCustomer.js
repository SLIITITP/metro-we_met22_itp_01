const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Ordinary_Customer(custID);
const ordinaryCustomerSchema = new Schema({
  custId: {
    type: String,
    required: true,
    unique: true,
  },
});

const OrdinaryCustomer = mongoose.model(
  "OrdinaryCustomer",
  ordinaryCustomerSchema
);
module.exports = OrdinaryCustomer;
