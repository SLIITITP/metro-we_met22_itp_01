const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Assets (invenID, availability_status)  status: assigned/available

const AssetSchema = new Schema({
  invenID: {
    type: String,
    required: true,
    unique: true,
  },

  availibilityStatus: {
    type: String,
    default: "Available",
  },
  roomID: {
    type: String,
    //required: true,
    //unique: true,
  },
  category: {
    type: String,
    //required: true,
  },
  name: {
    type: String,
    //required: true,
  },
  description: {
    type: String,
    // required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const Assets = mongoose.model("Assets", AssetSchema);

module.exports = Assets;
