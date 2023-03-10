const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{ 
        type:String,
        required:true,
    },
    isAdmin :{
        type:Boolean,
        default:false,
    }
},{
    timestamps :true
})

// 1st parameter is table name & 2nd parameter is schema name given in line 6
const userModel =mongoose.model("Users",UserSchema);

module.exports = userModel;
