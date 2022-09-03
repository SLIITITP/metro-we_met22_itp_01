const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//Requests (reqID, custID, serviceType, date, time)

//Food_beverage (reqID, amount, foodItemID, description)
const FoodRequest = new Schema({
  reqId: { type: String, required: true },
  amount: { type: Number, required: true },

  foodItemId: { type: String, required: true },
  requestForDate: {
    type: String,
    required: true,
    min: "2022-09-10",
    max: "2022-09-20",
  },
  requestForTime: { type: String, required: true },
  notes: String,
  status: { type: String, default: "Ongoing" },
});

const FoodAndBeverageRequest = mongoose.model(
  "FoodAndBeverageRequest",
  FoodRequest
);
module.exports = FoodAndBeverageRequest;
