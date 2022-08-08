const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//creating an object using Schema (mongoose.Schema)
const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});

const Student = mongoose.model(
  "Student",
  studentSchema
); /*here is where we name the table students. No capitals and always plurals form shown in mongodb. but we have to use it as student when we refer using http://localhost requests and all*/
module.exports = Student; //or model.export.Student = Student;
