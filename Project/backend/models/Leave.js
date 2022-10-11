const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Leave (leaveID, empID, managerID, adminID, status, type, startDate, endDate, description, requestFor, startTime, endTime, date)
const leaveSchema = new Schema({
  leaveID: {
    type: String,
    required: true,
    unique: true,
  },
  empID: {
    type: String,
    required: true,
  },
  managerID: {
    type: String,
    required: true,
  },
  adminID: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "Pending",
  },
  type: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date, 
    required: true, 
  },
  endDate: {
    type: Date, 
    required: true, 
  },
  description: {
    type: String,
    required: true,
  },
  requestFor: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  date: {
    type: Date, 
    required: true, 
  },
});

//model(tableName, schemaName)
const Leave = mongoose.model("Leave", leaveSchema);
module.exports = Leave;
