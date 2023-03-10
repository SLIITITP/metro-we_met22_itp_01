const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Has (empID, shiftID, day)
const hasSchema = new Schema({
  empID: {
    type: String,
    required: true,
  },
  shiftID: {
    type: String,
    required: true,
  },
  day: {
    type: String, 
    required: true, 
  },
});

//model(tableName, schemaName)
const Has = mongoose.model("Has", hasSchema);
module.exports = Has;
