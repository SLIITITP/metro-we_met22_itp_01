const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Inventory (invenID, name, purchase_date, managerID)
const InventorySchema = new Schema({
  invenID: {
    type: String,
  },

  name: {
    type: String,
  },

  date: {
    type: String,
  },
});

const Inventory = mongoose.model("Inventory", InventorySchema);

module.exports = Inventory;
