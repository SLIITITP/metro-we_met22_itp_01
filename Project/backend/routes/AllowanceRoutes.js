const router = require("express").Router();
let Allowance = require("../models/Allowance");

//http://localhost:8070/allowance/create
//Add a record to the database
router.route("/create").post((req, res) => {
  const allowanceID = req.body.allowanceID;
  const amount = Number(req.body.amount);
  const type = req.body.type;
  const year = Number(req.body.year);
  const adminID = req.body.adminID;
  const empID = req.body.empID;

  const newAllowance = new Allowance({
    allowanceID,
    amount,
    type,
    year,
    adminID,
    empID,
  });

  newAllowance
    .save()
    .then(() => {
      res.json("New Allowance Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

//http://localhost:8070/allowance/read
//Read data from the database
//Display recoords of all the allowance
router.route("/read").get((req, res) => {
  Allowance.find()
    .then((allowances) => {
      res.json(allowances);
    })
    .catch((err) => {
      console.log(err);
    });
});

//http://localhost:8070/allowance/read/id
//Read data from the database
//Display records of one allowance
router.route("/read/:id").get(async (req, res) => {
  let allowanceId = req.params.id;

  const allowance = await Allowance.findById(allowanceId)
    .then((allowance) => {
      res.status(200).send({ status: "Allowance Fetched", allowance });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with fetching allowance", error: err.message });
    });
});

//http://localhost:8070/allowance/update/id
//Update one record
router.route("/update/:id").put(async (req, res) => {
  let allowanceId = req.params.id;
  const { allowanceID, amount, type, year, adminID, empID } = req.body;

  const updateAllowance = {
    allowanceID,
    amount,
    type,
    year,
    adminID,
    empID,
  };

  const update = await Allowance.findByIdAndUpdate(allowanceId, updateAllowance)
    .then(() => {
      res.status(200).send({ status: "Allowance Updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating allowance", error: err.message });
    });
});

//http://localhost:8070/allowance/delete/id
//Delete one record
router.route("/delete/:id").delete(async (req, res) => {
  let allowanceId = req.params.id;

  await Allowance.findByIdAndDelete(allowanceId)
    .then(() => {
      res.status(200).send({ status: "Allowance Deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with deleting allowance", error: err.message });
    });
});

module.exports = router;
