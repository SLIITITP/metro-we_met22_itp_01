const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

//Chef_Request (reqID, empID, date, status, kID, managerID)
const ChefRequestSchema = new Schema ({
    reqID: {
        type: String,
        required: true,
        unique:true
    },
    empID: {
        type: String,
        required: true

    },
    kitIngID: {
        type: String,
        required: true
    },

    managerID: {
        type: String,
        required: true
    },
    //status- accepted/pending
    status: {
        type: String,
        required: true,
        default: "pending"
    },
    date: {
        type: Date,
        default: Date()
    },
});

//the first parameter in speech marks is the table name of the database
const ChefRequest = mongoose.model(
    "ChefRequest",
    ChefRequestSchema
  );
  module.exports = ChefRequest;