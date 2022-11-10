const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Attendance (attenID, empID, date, checkIn, checkOut, hours, minutes)
const attendanceSchema = new Schema({
  attenID: {
    type: String,
    required: true,
  },
  empID: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
    // default: Date(),
  },
  checkIn: {
    type: String,
    required: true,
    //default: Date(),
  },
  checkOut: {
    type: String,
    //required: true,
    //default: Date(),
    default: "Log checkout time",
  },
  hours: {
    type: Number,
    //required: true,
    default: 0,
  },
  minutes: {
    type: Number,
    //required: true,
    default: 0,
  },
  shiftHours: {
    type: Number,
    //required: true,
    default: 0,
  },
  otHours: {
    type: Number,
    //required: true,
    default: 0,
  },
  hourlyPay: {
    type: Number,
    //required: true,
    default: 0,
  },
  otRate: {
    type: Number,
    //required: true,
    default: 0,
  },
  pay: {
    type: Number,
    //required: true,
    default: 0,
  },
});

//model(tableName, schemaName)
const Attendance = mongoose.model("Attendance", attendanceSchema);
module.exports = Attendance;
