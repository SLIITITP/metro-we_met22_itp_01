const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//Requests (reqID, custID, serviceType, date, time)

const TrainerRequestSchema = new Schema({
  reqId: { type: String, require: true, unique: true },
  trainerType: { type: String, require: true },
  note: String,
});

const TrainerRequest = mongoose.model("TrainerRequest", TrainerRequestSchema);
module.exports = TrainerRequest;
