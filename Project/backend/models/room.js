const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RoomSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    maxcount:{
        type:Number,
        required:true,
    },
    facilities:{ 
        type:String,
        required:true,
    },
    rentperday:{
        type:Number,
        required:true,
    },
    imageurls : [],
    currentbookings : [],
    type : {
        type:String,
        required:true,
    },
    description : {
        type:String,
        required:true,
    }
},{
    timestamps :true
})

// 1st parameter is table name & 2nd parameter is schema name given in line 6
const roomModel =mongoose.model("Rooms",RoomSchema);

module.exports = roomModel;