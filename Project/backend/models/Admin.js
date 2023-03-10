const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Admin (adminID, username, password, name)
const adminSchema = new Schema({
      adminID: {
        type: String,
        required: true,
        unique: true,
      },
      username: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
});

//model(tableName, schemaName)
const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;