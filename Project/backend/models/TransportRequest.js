const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//Transport_request (reqID, route, seatNo, noOfSeats)

const TransportRequestSchema = new Schema({
  reqId: { type: String, required: true },
  custID: { type: String, required: true },
  route: { type: String, required: true },
  noOfSeats: { type: Number },
  requestForDate: {
    type: String,
    required: true,
  },
  departureTime: { type: String, required: true },
  status: { type: String, required: true }, //Booked, Cancelled or complete
  busNo: String,
  message: { type: String },
});

const TransportRequest = mongoose.model(
  "TransportRequest",
  TransportRequestSchema
);
module.exports = TransportRequest;
