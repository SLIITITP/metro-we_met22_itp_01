const router = require("express").Router();
let Has = require("../models/Has");

//http://localhost:8070/has/create
//Add a record to the database
router.route("/create").post((req, res) => {
  const empID = req.body.empID;
  const shiftID = req.body.shiftID;
  const day = req.body.day;

  const newHas = new Has({
    empID,
    shiftID,
    day,
  });

  newHas
    .save()
    .then(() => {
      res.json("New Record Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

//http://localhost:8070/has/read
//Read data from the database
//Display records of all the shifts of employees
router.route("/read").get((req, res) => {
  Has.find()
    .then((has) => {
      res.json(has);
    })
    .catch((err) => {
      console.log(err);
    });
});

//http://localhost:8070/has/read/id
//Read data from the database
//Display recoords of one shift of an employee
router.route("/read/:id").get(async (req, res) => {
  let hasId = req.params.id;

  const has = await Has.findById(hasId)
    .then((has) => {
      res.status(200).send({ status: "Record Fetched", has });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with fetching record", error: err.message });
    });
});

//http://localhost:8070/has/update/id
//Update one record
router.route("/update/:id").put(async (req, res) => {
  let hasId = req.params.id;
  const { empID, shiftID, day } = req.body;

  const updateHas = {
    empID,
    shiftID,
    day,
  };

  const update = await Has.findByIdAndUpdate(hasId, updateHas)
    .then(() => {
      res.status(200).send({ status: "Record Updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating record", error: err.message });
    });
});

//http://localhost:8070/has/delete/id
//Delete one record
router.route("/delete/:id").delete(async (req, res) => {
  let hasId = req.params.id;

  await Has.findByIdAndDelete(hasId)
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
