const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Manager_Request (reqID, date, req_type, invenID, status, managerID)

const AmenityManagerRequestSchema = new Schema({
  reqID: {
    type: String,
    
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
  // managerID: {
  //   type: String,
  //
  // },

  // name: {
  //   type: String,
  //   //
  // },

  quantity: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
});

const AmenityManagerRequest = mongoose.model(
  "AmenityManagerRequest",
  AmenityManagerRequestSchema
);

module.exports = AmenityManagerRequest;
