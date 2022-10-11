const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Shift (shiftID, type, startTime, endTime)
const shiftSchema = new Schema({
  shiftID: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    required: true,
  },
  startTime: {
    type: Number, 
    required: true, 
  },
  endTime: {
    type: Number,
    required: true,
  },
});

//model(tableName, schemaName)
const Shift = mongoose.model("Shift", shiftSchema);
module.exports = Shift;
