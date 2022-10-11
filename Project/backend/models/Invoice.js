const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Invoice (invoiceID, workingHours, date, amount, managerID, empID)
const invoiceSchema = new Schema({
  invoiceID: {
    type: String,
    required: true,
    unique: true,
  },
  workingHours: {
    type: Number,
    required: true,
  },
  date: {
    type: Date, 
    required: true, 
    default: Date(),
  },
  amount: {
    type: Number,
    required: true,
  },
  managerID: {
    type: String,
    required: true,
  },
  empID: {
    type: String,
    required: true,
  },
});

//model(tableName, schemaName)
const Invoice = mongoose.model("Invoice", invoiceSchema);
module.exports = Invoice;