const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

//Maintenance (maintID, invenID, amount, type, description, status, date)
const MaintenanceSchema = new Schema ({
     mainID: {
        type: String,
        required: true,
        unique:true
     },

     invenID: {
        type: String,
        required: true
     },

     amount: {
        type: Number,
        required: true
    },

    maintenanceType: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },
    //status- pending/damaged/amended
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

const Maintenance = mongoose.model(
    "Maintenance",
    MaintenanceSchema
  );
  module.exports = Maintenance;