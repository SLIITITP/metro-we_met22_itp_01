const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// (reviewID, empID, supplierID, ratings, review, date)

const ReviewSchema = new Schema({
  reviewID: {
    type: String,
    required: true,
  },

  supplierID: {
    type: String,
    required: true,
  },

  ratings: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },

  review: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },
});

const Review = mongoose.model("Review", ReviewSchema);
module.exports = Review;
