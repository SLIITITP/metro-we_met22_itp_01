const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//Complaints (complaintID, custID, description, type, date, time)

// const currentTime =
//   today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

const complaintSchema = new Schema({
  complaintId: { type: String, require: true, unique: true },
  custId: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  type: { type: String, required: true }, //service related or restaurant related?
  date: { type: Date, default: Date() },
  time: { type: String, default: "00:00" },
});

const Complaint = mongoose.model("Complaint", complaintSchema);
module.exports = Complaint;
