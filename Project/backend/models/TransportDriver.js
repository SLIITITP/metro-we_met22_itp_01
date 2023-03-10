const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// AttendsRequest (empID, reqID, status, action)
const TransportDriverSchema = new Schema({
  driverID: { type: String, required: true },
  route: { type: String },
  busNo: { type: String },
});

const TransportDriver = mongoose.model(
  "TransportDriver",
  TransportDriverSchema
);
module.exports = TransportDriver;
