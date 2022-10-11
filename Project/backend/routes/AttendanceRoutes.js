const router = require ("express").Router();
let Attendance = require("../models/Attendance");

//http://localhost:8080/attendance/create
//Add a record to the database
router.route("/create").post((req, res) => {

    const empID = req.body.empID;
    const date = req.body.date;
    const checkIn = req.body.checkIn;
    const checkOut = req.body.checkOut;

    const newAttendance = new Attendance({
        empID,
        date,
        checkIn,
        checkOut,
    })

    newAttendance.save().then(() => {
        res.json("New Record Added");
    }).catch((err) => {
        console.log(err);
    })
})

//http://localhost:8080/attendance/read
//Read data from the database
//Display records of all attendance
router.route("/read").get((req, res) => {

    Attendance.find().then((attendance) => {
        res.json(attendance);
    }).catch((err) => {
        console.log(err);
    })
})

//http://localhost:8080/attendance/read/id
//Read data from the database
//Display records of one 
router.route("/read/:id").get(async (req, res) => {

    let attenId = req.params.id;

    const user = await Attendance.findById(attenId)
    .then((attendance) => {
        res.status(200).send({status: "Record Fetched", attendance});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with fetching record", error: err.message});
    })
})

//http://localhost:8080/attendance/update/id
//Update one record
router.route("/update/:id").put(async (req, res) => {
    
    let attenId = req.params.id;
    const {empID, date, checkIn, checkOut} = req.body;

    const updateAttendance = {
        empID,
        date,
        checkIn,
        checkOut,
    }

    const update = await Attendance.findByIdAndUpdate(attenId, updateAttendance)
    .then(() => {
        res.status(200).send({status: "Record Updated"});
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating record", error: err.message});
    }) 
})

//http://localhost:8080/attendance/delete/id
//Delete one record
router.route("/delete/:id").delete(async (req, res) => {
    
    let attenId = req.params.id;

    await Attendance.findByIdAndDelete(attenId)
    .then(() => {
        res.status(200).send({status: "Record Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with deleting record", error: err.message});
    })
})

module.exports = router;