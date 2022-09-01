const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// AttendComplaint (complaintID, empID, status, action, resolved_date)
const AttendComplaintSchema = new Schema({
  compId: { type: String, require: true },
  empId: { type: String, require: true },
  status: { type: String, require: true, default: "Ongoing" },
  action: { type: String, default: "None", require: true },
  resolvedDate: { type: Date, default: Date() },
});

const Request = mongoose.model("Request", AttendComplaintSchema);
module.exports = Request;
