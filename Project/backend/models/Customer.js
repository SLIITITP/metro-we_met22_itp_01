const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Customer (custID, empID, NIC, email, type)
const customerSchema = new Schema({
  custId: {
    type: String,
    required: true,
    unique: true,
  },
  empId: {
    type: String,
    required: true,
  },
  nic: {
    type: String,
    required: true,
    unique: true,
  },
  email: String,

  type: {
    type: String,
    required: true,
  },
});

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
