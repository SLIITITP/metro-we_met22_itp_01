const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Kitchen_Stock (invenID, quantity, description)
const KitchenStockSchema = new Schema({
  invenID: {
    type: String,
    required: true,
    unique: true,
  },

  quantity: {
    type: String,
    required: true,
  },

  category: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  date: {
    type: String,
    required: true,
  },
});

const KitchenStock = mongoose.model("KitchenStock", KitchenStockSchema);

module.exports = KitchenStock;
