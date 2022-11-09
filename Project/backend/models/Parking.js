// --> parkling
// numberplateID
// Hrs
// type
// Date
// PayableAmount

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ParkingSchema = new Schema({
  NumberPlateID: { type: String, required: true },
  Hrs: { type: Number, required: true },
  Type: { type: String, required: true },
  Date: { type: Date, required: true, default: Date() },
  payableAmount: Number,
});

const parking = mongoose.model("parking", ParkingSchema);
module.exports = parking;
