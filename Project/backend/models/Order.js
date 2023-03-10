const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Order (orderID, reqID, supplierID, deliveryDate, amount, status, orderDate

const OrderSchema = new Schema({
  orderID: {
    type: String,
    required: true,
  },

  reqID: {
    type: String,
    required: true,
  },

  supplierID: {
    type: String,
    required: true,
  },

  deliveryDate: {
    type: String,
    required: false,
  },

  amount: {
    type: String,
    required: false,
  },

  status: {
    type: String,
    required: true,
  },

  orderDate: {
    type: String,
    required: false,
  },
});

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
