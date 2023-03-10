const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Supplier (supplierID, type, availability, email, address, name, contactNo)

const SupplierSchema = new Schema({
  supplierID: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    required: true,
  },

  availability: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  contactNo: {
    type: String,
    required: true,
  },
});

const Supplier = mongoose.model("Supplier", SupplierSchema);
module.exports = Supplier;
