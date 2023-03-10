const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Manager (managerID)
const managerSchema = new Schema({
  managerID: {
    type: String,
    required: true,
    unique: true,
  },
});

//model(tableName, schemaName)
const Manager = mongoose.model("Manager", managerSchema);
module.exports = Manager;
