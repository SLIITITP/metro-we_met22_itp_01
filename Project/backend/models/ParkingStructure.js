// --> porking location
// id
// x
// y

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ParkingStructureSchema = new Schema({
  id: { type: String, require: true },
  x: { type: Number, require: true },
  y: { type: Number, require: true },
});

const parkingStruct = mongoose.model("parkingStruct", ParkingStructureSchema);
module.exports = parkingStruct;
