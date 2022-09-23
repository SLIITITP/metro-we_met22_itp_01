const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Employee_Login (username, password, empID)
const employeeLoginSchema = new Schema({
      username: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      empID: {
        type: String,
        required: true,
        unique: true,
      },
});

//model(tableName, schemaName)
const EmployeeLogin = mongoose.model("EmployeeLogin", employeeLoginSchema);
module.exports = EmployeeLogin;