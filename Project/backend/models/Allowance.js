const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Allowance (allowanceID, amount, type, year, adminID, empID)
const allowanceSchema = new Schema({
  allowanceID: {
    type: String,
    required: true,
    unique: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  type: {
    type: String, 
    required: true, 
  },
  year: {
    type: Number, 
    required: true, 
  },
  adminID: {
    type: String,
    required: true,
  },
  empID: {
    type: String,
    required: true,
  },
});

//model(tableName, schemaName)
const Allowance = mongoose.model("Allowance", allowanceSchema);
module.exports = Allowance;