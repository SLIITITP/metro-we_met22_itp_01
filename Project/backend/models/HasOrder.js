const mongoose = require("mongoose");

const Schema = mongoose.Schema;


// HasOrder (orderID, reqID)

const HasOrderSchema = new Schema({
    orderID: { 
        type: String, 
        required: true 
    },


    reqID: { 
        type: String,
         required: true 
        
        },
     },
  );
  
  const HasOrder = mongoose.model("HasOrder",HasOrderSchema);
  module.exports = HasOrder;