const router = require("express").Router();
let OrdinaryEmployee = require("../models/OrdinaryEmployee");

//http://localhost:8070/ordinaryemployee/create
//Add a record to the database
router.route("/create").post((req, res) => {
  const empID = req.body.empID;
  const depID = req.body.depID;
  const uID = req.body.uID;

  const newOrdnaryEmployee = new OrdinaryEmployee({
    empID,
    depID,
    uID,
  });

  newOrdnaryEmployee
    .save()
    .then(() => {
      res.json("New Ordinary Employee Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

//http://localhost:8070/ordinaryemployee/read
//Read data from the database
//Display records of all ordinaryemployees
router.route("/read").get((req, res) => {
  OrdinaryEmployee.find()
    .then((ordinaryemployees) => {
      res.json(ordinaryemployees);
    })
    .catch((err) => {
      console.log(err);
    });
});

//http://localhost:8070/ordinaryemployee/read/id
//Read data from the database
//Display recoords of one ordinaryemployee
router.route("/read/:id").get(async (req, res) => {
  let userId = req.params.id;

  const user = await OrdinaryEmployee.findById(userId)
    .then((ordinaryemployee) => {
      res.status(200).send({ status: "User Fetched", ordinaryemployee });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with fetching user", error: err.message });
    });
});

//http://localhost:8070/ordinaryemployee/update/id
//Update one record
router.route("/update/:id").put(async (req, res) => {
  let userId = req.params.id;
  const { empID, depID, uID } = req.body;

  const updateOrdinaryEmployee = {
    empID,
    depID,
    uID,
  };

  const update = await OrdinaryEmployee.findByIdAndUpdate(
    userId,
    updateOrdinaryEmployee
  )
    .then(() => {
      res.status(200).send({ status: "User Updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating data", error: err.message });
    });
});

//http://localhost:8070/ordinaryemployee/delete/id
//Delete one record
router.route("/delete/:id").delete(async (req, res) => {
  let userId = req.params.id;

  await OrdinaryEmployee.findByIdAndDelete(userId)
    .then(() => {
      res.status(200).send({ status: "User Deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with deleting user", error: err.message });
    });
});

module.exports = router;
