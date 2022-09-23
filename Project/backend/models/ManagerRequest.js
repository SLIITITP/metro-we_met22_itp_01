const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

//Manager_Request (reqID, date, req_type, invenID, status, managerID)

const ManagerRequestSchema = new Schema ({
    reqID: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date()
    },

    reqType: {
        type: String,
        required: true
    },

    invenID: {
        type: String,
        required:true
    },
    //accepted/rejected/pending status
    status: {
        type: String,
        required: true,
        default: "pending"
    },
    managerID: {
        type: String,
        required: true
    },
    
   
});

const ManagerRequest = mongoose.model (
        "ManagerRequest",
        ManagerRequestSchema
    );

    module.exports = ManagerRequest;