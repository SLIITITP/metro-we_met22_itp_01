const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//Complaints (complaintID, custID, description, type, date, time)

const complaintSchema = new Schema({
  complaintId: { type: String, required: true },
  custId: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String }, //service related or restaurant related?
  date: { type: String, default: Date() },
  time: { type: String, default: "00:00" },
  status: { type: String },
  for: { type: String },
});

const Complaint = mongoose.model("Complaint", complaintSchema);
module.exports = Complaint;
