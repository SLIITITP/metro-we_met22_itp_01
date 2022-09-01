const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//Transport_request (reqID, route, seatNo, noOfSeats)

const RoomNecessitySchema = new Schema({
  reqId: { type: String, require: true, unique: true },
  notes: String,
});

const RoomNecessityRequest = mongoose.model(
  "RoomNecessityRequest",
  RoomNecessitySchema
);
module.exports = RoomNecessityRequest;
