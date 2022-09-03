const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// AttendComplaint (complaintID, empID, status, action, resolved_date)
const AttendComplaintSchema = new Schema({
  compId: { type: String, required: true },
  empId: { type: String, required: true },
  status: { type: String, required: true, default: "Ongoing" },
  action: { type: String, default: "None", require: true },
  resolvedDate: { type: Date, default: Date() },
});

const AttendComplaint = mongoose.model(
  "AttendComplaint",
  AttendComplaintSchema
);
module.exports = AttendComplaint;
