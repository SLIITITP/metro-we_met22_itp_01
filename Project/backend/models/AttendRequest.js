const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// AttendsRequest (empID, reqID, status, action)
const AttendsRequestSchema = new Schema({
  empId: { type: String, require: true },
  reqId: { type: String, require: true, unique: true },
  status: { type: String, require: true, default: "Ongoing" },
  action: { type: String, default: "None", require: true },
});

const Request = mongoose.model("Request", AttendsRequestSchema);
module.exports = Request;
