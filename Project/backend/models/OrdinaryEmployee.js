const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//OrdinaryEmployee (empID, depID, uID)
const ordinaryEmployeeSchema = new Schema({
  empID: {
    type: String,
    required: true,
    unique: true,
  },
  depID: {
    type: String,
    required: true,
  },
  uID: {
    type: String, 
    required: true, 
    unique: true,
  },
});

//model(tableName, schemaName)
const OrdinaryEmployee = mongoose.model("OrdinaryEmployee", ordinaryEmployeeSchema);
module.exports = OrdinaryEmployee;
