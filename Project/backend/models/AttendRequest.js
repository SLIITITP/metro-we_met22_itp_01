const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// AttendsRequest (empID, reqID, status, action)
const AttendsRequestSchema = new Schema({
  empId: { type: String, required: true },
  reqId: { type: String, required: true, unique: true },
  status: { type: String, required: true, default: "Ongoing" },
  action: { type: String, default: "None", require: true },
  updatedDate: { type: String },
  updatedTime: { type: String },
});

const AttendRequest = mongoose.model("AttendRequest", AttendsRequestSchema);
module.exports = AttendRequest;
