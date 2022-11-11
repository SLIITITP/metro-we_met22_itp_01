const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Toiletries (invenID, quantity)
const ToiletriesSchema = new Schema({
  invenID: {
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
  },
  // name: {
  //   type: String,
  //   required: true,
  // },
  description: {
    type: String,
  },
  date: {
    type: String,
    required: true,
  },
});

const Toiletries = mongoose.model("Toiletries", ToiletriesSchema);

module.exports = Toiletries;
