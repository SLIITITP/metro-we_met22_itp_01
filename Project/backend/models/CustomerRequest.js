const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//Requests (reqID, custID, serviceType, date, time)

const currentTime =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

const requestSchema = new Schema({
  reqId: { type: String, require: true, unique: true },
  custId: { type: String, required: true, unique: true },
  serviceType: { type: String, required: true },
  requestForDate: {
    type: date,
    required: true,
    min: "2022-09-10",
    max: "2022-09-20",
    default: Date(),
  },
  requestedOn: { type: date, required: true, default: Date() },
  requestedtime: { type: String, required: true, default: currentTime },
  requestedForTime: { type: String, required: true },
  roomId: { type: Number, required: true },
});

const Request = mongoose.model("Request", requestSchema);
module.exports = Request;
