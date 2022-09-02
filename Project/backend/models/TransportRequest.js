const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//Transport_request (reqID, route, seatNo, noOfSeats)

const TransportRequestSchema = new Schema({
  reqId: { type: String, require: true, unique: true },
  route: { type: String, require: true },
  seatNo: { type: Number, require: true },
  noOfSeats: { type: Number, require: true },
  requestForDate: {
    type: Date,
    required: true,
    min: "2022-09-10",
    max: "2022-09-20",
    default: Date(),
  },
  requestedForTime: { type: String, required: true },
});

const TransportRequest = mongoose.model(
  "TransportRequest",
  TransportRequestSchema
);
module.exports = TransportRequest;
