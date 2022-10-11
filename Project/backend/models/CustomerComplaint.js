const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//Complaints (complaintID, custID, description, type, date, time)

const complaintSchema = new Schema({
  complaintId: { type: String },
  custId: { type: String },
  description: { type: String },
  type: { type: String }, //service related or restaurant related?
  date: { type: String },
  time: { type: String },
  status: { type: String },
  for: { type: String },
});

const Complaint = mongoose.model("Complaint", complaintSchema);
module.exports = Complaint;
