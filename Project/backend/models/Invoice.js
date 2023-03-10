const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Invoice (invoiceID, workingHours, date, amount, managerID, empID)
const invoiceSchema = new Schema({
  invoiceID: {
    type: String,
    required: true,
  },
  empID: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
    // default: Date(),
  },
  workingHours: {
    type: Number,
    default: 0,
    //required: true,
  },
  shiftHours: {
    type: Number,
    default: 0,
    //required: true,
  },
  otHours: {
    type: Number,
    default: 0,
    //required: true,
  },
  amount: {
    type: Number,
    default: 0,
    // required: true,
  },
  dedAmount: {
    type: Number,
    default: 0,
    // required: true,
  },
  dedReason: {
    type: String,
    default: 0,
    // required: true,
  },
  allowance: {
    type: Number,
    default: 0,
    // required: true,
  },
  netSalary: {
    type: Number,
    default: 0,
    // required: true,
  },
  // managerID: {
  //   type: String,
  //   required: true,
  // },
});

//model(tableName, schemaName)
const Invoice = mongoose.model("Invoice", invoiceSchema);
module.exports = Invoice;
