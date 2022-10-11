const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

//Assets (invenID, availability_status)  status: assigned/available

const AssetSchema = new Schema ({
    invenID: {
        type: String,
        required: true,
        unique:true
    },

    availibilityStatus: {
        type: String,
        required: true
    },
    roomID: {
        type: String,
        
    },
    category: {
        type: String,
        
    }

});

const Assets = mongoose.model (
    "Assets",
    AssetSchema 
);

module.exports = Assets;


