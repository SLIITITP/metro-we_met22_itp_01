const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//Requests (reqID, custID, serviceType, date, time)

// const currentTime =
//   today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

const requestSchema = new Schema({
  reqId: { type: String, require: true, default: "Null" },
  custId: { type: String, required: true, default: "Null" },
  serviceType: { type: String, required: true },
  requestedOn: { type: String, required: true, default: "Null" },
  requestedtime: { type: String, required: true, default: "Null" },
  roomId: { type: Number, required: true, default: "Null" },
  notes: { type: String, default: "Null" },
  status: { type: String, default: "Null" },
  busNo: { type: String, default: "Null" },
  route: { type: String, default: "Null" },
  bookingDate: { type: String, default: "Null" },
});

const Request = mongoose.model("Request", requestSchema);
module.exports = Request;
