const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Kitchen_Ingredients (kID, empID, status, managerID)
const KitchenIngredientSchema = new Schema({
  kitIngID: {
    type: String,
    required: true,
    unique: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
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

  //status: high,medium,low
  status: {
    type: String,
    required: true,
    default: "High",
  },
});

//the first parameter in speech marks is the table name of the database
const KitchenIngredients = mongoose.model(
  "KitchenIngredients",
  KitchenIngredientSchema
);
module.exports = KitchenIngredients;
