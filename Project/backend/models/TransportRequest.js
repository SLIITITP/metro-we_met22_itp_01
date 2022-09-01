const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//Transport_request (reqID, route, seatNo, noOfSeats)

const TransportRequestSchema = new Schema({
  reqId: { type: String, require: true, unique: true },
  route: { type: String, require: true },
  seatNo: { type: Number, require: true },
  noOfSeats: { type: Number, require: true },
});

const TransportRequest = mongoose.model(
  "TransportRequest",
  TransportRequestSchema
);
module.exports = TransportRequest;
