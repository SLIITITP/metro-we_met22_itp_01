const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Department (depID, name, managerID)
const departmentSchema = new Schema({
  depID: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  managerID: {
    type: String,
    required: true,
    unique: true,
  },
});

//model(tableName, schemaName)
const Department = mongoose.model("Department", departmentSchema);
module.exports = Department;
