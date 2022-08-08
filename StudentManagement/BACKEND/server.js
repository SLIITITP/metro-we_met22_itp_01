//here we are importing packages and assigning them to constants
//Const dont change in value
const express = require('express'); 
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv").config();
const app = express(); //used to create express appication
app.use(cors());
app.use(bodyParser.json());

const studentRouter = require('./routes/students.js');
app.use('/student', studentRouter);  //https://localhost:8070:student will load student.js

//pricess.env.PORT will allow us to choose the available port that is availabe once hosted
    const PORT = process.env.PORT || 8070; 

const URL = process.env.MONGODB_URL;

mongoose.connect(URL);

const connection = mongoose.connection;
connection.once("open",()=>{
    console.log('Connection to MongoDB successful');
});

app.listen(PORT, ()=>{
    console.log("Server is up and running on port : " + PORT);
});