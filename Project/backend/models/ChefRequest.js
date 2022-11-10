const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Chef_Request (reqID, empID, date, status, kID, managerID)
const ChefRequestSchema = new Schema({
  reqID: {
    type: String,
    required: true,
    unique: true,
  },

  kitIngID: {
    type: String,
    required: true,
    unique: true,
  },

  //status- accepted/pending
  status: {
    type: String,
    required: true,
    default: "Pending",
  },
  date: {
    type: String,
    required: true,
  },
  reqType: {
    type: String,
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

//the first parameter in speech marks is the table name of the database
const ChefRequest = mongoose.model("ChefRequest", ChefRequestSchema);
module.exports = ChefRequest;
