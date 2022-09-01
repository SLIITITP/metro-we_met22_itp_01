const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//Requests (reqID, custID, serviceType, date, time)

const TrainerRequest = new Schema({
  reqId: { type: String, require: true, unique: true },
  trainerType: { type: String, require: true },
  note: String,
});

const Request = mongoose.model("Request", TrainerRequest);
module.exports = Request;
