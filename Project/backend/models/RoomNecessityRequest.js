const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//Transport_request (reqID, route, seatNo, noOfSeats)

const RoomNecessitySchema = new Schema({
  reqId: { type: String, required: true, unique: true },
  custID: { type: String, required: true },
  status: String,
  requestedItems: { type: String },
  note: String,
});

const RoomNecessityRequest = mongoose.model(
  "RoomNecessityRequest",
  RoomNecessitySchema
);
module.exports = RoomNecessityRequest;
