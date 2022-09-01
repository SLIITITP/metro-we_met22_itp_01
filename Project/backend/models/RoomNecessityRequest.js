const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//Transport_request (reqID, route, seatNo, noOfSeats)

const RoomNecessitySchema = new Schema({
  reqId: { type: String, require: true, unique: true },
  notes: String,
});

const Request = mongoose.model("Request", RoomNecessitySchema);
module.exports = Request;
