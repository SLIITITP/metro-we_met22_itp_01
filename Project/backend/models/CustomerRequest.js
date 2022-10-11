const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//Requests (reqID, custID, serviceType, date, time)

// const currentTime =
//   today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

const requestSchema = new Schema({
  reqId: { type: String, require: true },
  custId: { type: String, required: true },
  serviceType: { type: String, required: true },
  requestedOn: { type: String, required: true },
  requestedtime: { type: String, required: true },
  roomId: { type: Number, required: true },
  notes: { type: String, default: "" },
  status: String,
});

const Request = mongoose.model("Request", requestSchema);
module.exports = Request;
