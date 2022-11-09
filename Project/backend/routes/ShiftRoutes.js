const router = require("express").Router();
let Shift = require("../models/Shift");

//http://localhost:8070/shift/create
//Add a record to the database
router.route("/create").post((req, res) => {
  const shiftID = req.body.shiftID;
  const type = req.body.type;
  const startTime = Number(req.body.startTime);
  const endTime = Number(req.body.endTime);

  const newShift = new Shift({
    shiftID,
    type,
    startTime,
    endTime,
  });

  newShift
    .save()
    .then(() => {
      res.json("New Shift Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

//http://localhost:8070/shift/read
//Read data from the database
//Display records of all shifts
router.route("/read").get((req, res) => {
  Shift.find()
    .then((shifts) => {
      res.json(shifts);
    })
    .catch((err) => {
      console.log(err);
    });
});

//http://localhost:8070/shift/read/id
//Read data from the database
//Display recoords of one shift
router.route("/read/:id").get(async (req, res) => {
  let shiftId = req.params.id;

  const shift = await Shift.findById(shiftId)
    .then((shift) => {
      res.status(200).send({ status: "Shift Fetched", shift });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with fetching shift", error: err.message });
    });
});

//http://localhost:8070/shift/update/id
//Update one record
router.route("/update/:id").put(async (req, res) => {
  let shiftId = req.params.id;
  const { shiftID, type, startTime, endTime } = req.body;

  const updateShift = {
    shiftID,
    type,
    startTime,
    endTime,
  };

  const update = await Shift.findByIdAndUpdate(shiftId, updateShift)
    .then(() => {
      res.status(200).send({ status: "Shift Updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating shift", error: err.message });
    });
});

//http://localhost:8070/shift/delete/id
//Delete one record
router.route("/delete/:id").delete(async (req, res) => {
  let shiftId = req.params.id;

  await Shift.findByIdAndDelete(shiftId)
    .then(() => {
      res.status(200).send({ status: "Shift Deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with deleting shift", error: err.message });
    });
});

module.exports = router;
