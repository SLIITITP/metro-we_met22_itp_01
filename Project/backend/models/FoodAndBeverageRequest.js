const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//Requests (reqID, custID, serviceType, date, time)

//Food_beverage (reqID, amount, foodItemID, description)
const FoodRequest = new Schema({
  reqId: { type: String, require: true, unique: true },
  amount: { type: Number, require: true },

  foodItemId: { type: String, require: true },
  requestForDate: {
    type: Date,
    required: true,
    min: "2022-09-10",
    max: "2022-09-20",
    default: Date(),
  },
  notes: String,
  requestForDate: {
    type: Date,
    required: true,
    min: "2022-09-10",
    max: "2022-09-20",
    default: Date(),
  },
  requestedForTime: { type: String, required: true },
});

const FoodAndBeverageRequest = mongoose.model(
  "FoodAndBeverageRequest",
  FoodRequest
);
module.exports = FoodAndBeverageRequest;
