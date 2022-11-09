const router = require("express").Router();
let Attendance = require("../models/Attendance");

//http://localhost:8070/attendance/create
//Add a record to the database
router.route("/create").post((req, res) => {
  const attenID = req.body.attenID;
  const empID = req.body.empID;
  const date = req.body.date;
  const checkIn = req.body.checkIn;
  const checkOut = req.body.checkOut;
  const hours = req.body.hours;
  const minutes = req.body.minutes;
  const hourlyPay = req.body.hourlyPay;
  const otRate = req.body.otRate;
  const pay = req.body.pay;

  const newAttendance = new Attendance({
    attenID,
    empID,
    date,
    checkIn,
    checkOut,
    hours,
    minutes,
    hourlyPay,
    otRate,
    pay,
  });

  newAttendance
    .save()
    .then(() => {
      res.json("New Record Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

//http://localhost:8070/attendance/read
//Read data from the database
//Display records of all attendance
// router.route("/read").get((req, res) => {
//   Attendance.find()
//     .then((attendance) => {
//       res.json(attendance);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

router.route("/read").get(async (req, res) => {
  try {
    const attendance = await Attendance.find();
    res.status(200).json(attendance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//http://localhost:8070/attendance/read/id
//Read data from the database
//Display records of one
router.route("/read/:id").get(async (req, res) => {
  let attenId = req.params.id;

  const user = await Attendance.findById(attenId)
    .then((attendance) => {
      res.status(200).send({ status: "Record Fetched", attendance });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with fetching record", error: err.message });
    });
});

//http://localhost:8070/attendance/update/id
//Update one record
// router.route("/update/:id").put(async (req, res) => {
//   let attenId = req.params.id;
//   const { attenID, empID, date, checkIn, checkOut, hours, minutes } = req.body;

//   const updateAttendance = {
//     attenID,
//     empID,
//     date,
//     checkIn,
//     checkOut,
//     hours,
//     minutes,
//   };

//   const update = await Attendance.findByIdAndUpdate(attenId, updateAttendance)
//     .then(() => {
//       res.status(200).send({ status: "Record Updated" });
//     })
//     .catch((err) => {
//       console.log(err);
//       res
//         .status(500)
//         .send({ status: "Error with updating record", error: err.message });
//     });
// });

router.route("/update/:id").put(async (req, res) => {
  const attenId = req.params.id;
  const body = req.body;
  try {
    await Attendance.findByIdAndUpdate(attenId, body);
    res.status(200).send("Successfully Updated");
  } catch {
    (err) => {
      res.status(500).send(err.message);
    };
  }
});

//http://localhost:8070/attendance/delete/id
//Delete one record
router.route("/delete/:id").delete(async (req, res) => {
  let attenId = req.params.id;

  await Attendance.findByIdAndDelete(attenId)
    .then(() => {
      res.status(200).send({ status: "Record Deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with deleting record", error: err.message });
    });
});

module.exports = router;
