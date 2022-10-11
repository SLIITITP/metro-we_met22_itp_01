const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

//Inventory (invenID, name, purchase_date, managerID)
const InventorySchema = new Schema ({
     invenID: {
        type: String,
        required: true,
        unique:true
     },

     name: {
        type: String,
        required: true
     },

     purchaseDate: {
        type: Date,
        default: Date()
     },

     managerID: {
        type: String,
        required: true
     },
    
});

const Inventory = mongoose.model (
    "Inventory",
    InventorySchema
);

module.exports = Inventory;