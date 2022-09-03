const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//Complaints (complaintID, custID, description, type, date, time)

const complaintSchema = new Schema({
  complaintId: { type: String, required: true, unique: true },
  custId: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  type: { type: String, required: true }, //service related or restaurant related?
  date: { type: Date, default: Date() },
  time: { type: String, default: "00:00" },
});

const Complaint = mongoose.model("Complaint", complaintSchema);
module.exports = Complaint;
