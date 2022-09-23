const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Attendance (empID, date, checkIn, checkOut) 
const attendanceSchema = new Schema({
  empID: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date(),
  },
  checkIn: {
    type: Date, 
    required: true, 
    default: Date(),
  },
  checkOut: {
    type: Date, 
    required: true, 
    default: Date(),
  },
});

//model(tableName, schemaName)
const Attendance = mongoose.model("Attendance", attendanceSchema);
module.exports = Attendance;
