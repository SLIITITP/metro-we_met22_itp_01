const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//Transport_request (reqID, route, seatNo, noOfSeats)

const RoomNecessitySchema = new Schema({
  reqId: { type: String, required: true, unique: true },
  status: String,
  requestedItem: String,
  note: String,
});

const RoomNecessityRequest = mongoose.model(
  "RoomNecessityRequest",
  RoomNecessitySchema
);
module.exports = RoomNecessityRequest;
