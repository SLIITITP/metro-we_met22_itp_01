const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// AttendsRequest (empID, reqID, status, action)
const AttendsRequestSchema = new Schema({
  empId: { type: String, required: true },
  reqId: { type: String },
  status: { type: String, default: "Ongoing" },
  action: { type: String, default: "Null" },
  cancellationReason: { type: String, default: "Null" },
  updatedDate: { type: String },
  updatedTime: { type: String },
});

const AttendRequest = mongoose.model("AttendRequest", AttendsRequestSchema);
module.exports = AttendRequest;
