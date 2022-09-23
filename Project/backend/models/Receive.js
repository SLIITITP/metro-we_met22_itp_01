const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Receive(allowanceID, empID, year)
const receiveSchema = new Schema({
  allowanceID: {
    type: String,
    required: true,
  },
  empID: {
    type: String,
    required: true,
  },
  year: {
    type: Number, 
    required: true, 
  },
});

//model(tableName, schemaName)
const Receive = mongoose.model("Receive", receiveSchema);
module.exports = Receive;