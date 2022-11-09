const router = require("express").Router();
let Leave = require("../models/Leave");

//http://localhost:8070/leave/create
//Add a record to the database
router.route("/create").post((req, res) => {
  const leaveID = req.body.leaveID;
  const empID = req.body.empID;
  //const empName = req.body.empName;
  // const managerID = req.body.managerID;
  // const adminID = req.body.adminID;
  const status = req.body.status;
  const type = req.body.type;
  const startDate = req.body.startDate;
  const endDate = req.body.endDate;
  const noOfDays = req.body.noOfDays;
  const description = req.body.description;
  const reasonOfStat = req.body.reasonOfStat;
  // const requestFor = req.body.requestFor;
  // const startTime = req.body.startTime;
  // const endTime= req.body.endTime;
  // const date = req.body.date;

  const newLeave = new Leave({
    leaveID,
    empID,
    //empName,
    // managerID,
    // adminID,
    status,
    type,
    startDate,
    endDate,
    noOfDays,
    description,
    reasonOfStat,
    // requestFor,
    // startTime,
    // endTime,
    // date,
  });

  newLeave
    .save()
    .then(() => {
      res.json("New Leave Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

//http://localhost:8070/leave/read
//Read data from the database
//Display records of all the leaves
router.route("/read").get(async (req, res) => {
  try {
    const allReq = await Leave.find();
    res.status(200).json(allReq);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  //   Leave.find()
  //     .then((leaves) => {
  //       res.json(leaves);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
});

//http://localhost:8070/leave/read/id
//Read data from the database
//Display recoords of one leave
router.route("/read/:id").get(async (req, res) => {
  let leaveId = req.params.id;

  const leave = await Leave.findById(leaveId)
    .then((leave) => {
      res.status(200).send({ status: "Leave Fetched", leave });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with fetching leave", error: err.message });
    });
});

//http://localhost:8070/leave/update/id
//Update one record
router.route("/update/:id").put(async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    await Leave.findByIdAndUpdate(id, body);
    res.status(200).send("Successfully Updated");
  } catch {
    (err) => {
      res.status(500).send(err.message);
    };
  }
});

// router.route("/update/:id").put(async (req, res) => {
//   let leaveId = req.params.id;
//   const {
//     leaveID,
//     empID,
//     managerID,
//     adminID,
//     status,
//     type,
//     startDate,
//     endDate,
//     description,
//     requestFor,
//     startTime,
//     endTime,
//     date,
//   } = req.body;

//   const updateLeave = {
//     leaveID,
//     empID,
//     managerID,
//     adminID,
//     status,
//     type,
//     startDate,
//     endDate,
//     description,
//     requestFor,
//     startTime,
//     endTime,
//     date,
//   };

//   const update = await Leave.findByIdAndUpdate(leaveId, updateLeave)
//     .then(() => {
//       res.status(200).send({ status: "Leave Updated" });
//     })
//     .catch((err) => {
//       console.log(err);
//       res
//         .status(500)
//         .send({ status: "Error with updating leave", error: err.message });
//     });
// });

//http://localhost:8070/leave/delete/id
//Delete one record
router.route("/delete/:id").delete(async (req, res) => {
  let leaveId = req.params.id;

  await Leave.findByIdAndDelete(leaveId)
    .then(() => {
      res.status(200).send({ status: "Leave Deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with deleting leave", error: err.message });
    });
});

module.exports = router;
