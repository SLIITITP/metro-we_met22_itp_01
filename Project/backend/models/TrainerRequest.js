const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//Requests (reqID, custID, serviceType, date, time)

const TrainerRequestSchema = new Schema({
  reqId: { type: String, require: true, unique: true },
  trainerType: { type: String, require: true },
  note: String,
  requestForDate: {
    type: Date,
    required: true,
    min: "2022-09-10",
    max: "2022-09-20",
    default: Date(),
  },
  requestForTime: { type: String, required: true },
});

const TrainerRequest = mongoose.model("TrainerRequest", TrainerRequestSchema);
module.exports = TrainerRequest;
