// -->Fee
// CarVal
// bikeVal
// vanVal

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ParkingFeeSchema = new Schema({
  feeId: { type: String, required: true },
  CarVal: Number,
  VanVal: Number,
  BikeVal: Number,
});

const parkingFee = mongoose.model("parkingFee", ParkingFeeSchema);
module.exports = parkingFee;
