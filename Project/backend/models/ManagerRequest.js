const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Manager_Request (reqID, date, req_type, invenID, status, managerID)

const ManagerRequestSchema = new Schema({
  reqID: {
    type: String,
    required: true,
    unique: true,
  },

  date: {
    type: String,
    required: true,
  },

  reqType: {
    type: String,
  },

  invenID: {
    type: String,
  },
  //accepted/rejected/pending status
  status: {
    type: String,
    default: "Pending",
  },

  name: {
    type: String,
  },

  quantity: {
    type: Number,
  },
  description: {
    type: String,
  },
});

const ManagerRequest = mongoose.model("ManagerRequest", ManagerRequestSchema);

module.exports = ManagerRequest;
