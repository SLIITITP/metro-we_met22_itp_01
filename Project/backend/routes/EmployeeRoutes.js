const router = require("express").Router();
let Employee = require("../models/Employee");
const { findOne } = require("../models/RoomNecessityRequest");

//http://localhost:8080/employee/create
//Add a record to the database
router.route("/create").post((req, res) => {
  const empID = req.body.empID;
  const name = req.body.empName;
  const DOB = req.body.DOB;
  const gender = req.body.gender;
  const NIC = req.body.NIC;
  const designation = req.body.desig;
  const phone = req.body.phone;
  const email = req.body.email;
  const address = req.body.address;
  const hourlyPay = Number(req.body.hourlyPay);
  const otRate = Number(req.body.otRate);

  const newEmployee = new Employee({
    empID,
    name,
    DOB,
    gender,
    NIC,
    designation,
    phone,
    email,
    address,
    hourlyPay,
    otRate,
  });

  newEmployee
    .save()
    .then(() => {
      res.json("New Employee Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

//http://localhost:8080/employee/read
//Read data from the database
//Display records of all the employees
router.route("/read").get((req, res) => {
  Employee.find().exec((err, employees) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingEmployees: employees,
    });
  });
});

//http://localhost:8080/employee/read/id
//Read data from the database
//Display recoords of one employee
router.route("/read/:id").get(async (req, res) => {
  let userId = req.params.id;

  const user = await Employee.findById(userId)
    .then((employee) => {
      res.status(200).send({ status: "User Fetched", employee });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with fetching user", error: err.message });
    });
});

//http://localhost:8080/employee/update/id
//Update one record
router.route("/update/:id").put(async (req, res) => {
  let userId = req.params.id;
  const {
    empID,
    name,
    designation,
    hourlyPay,
    otRate,
    NIC,
    DOB,
    gender,
    address,
    email,
    phone,
  } = req.body;

  const updateEmployee = {
    empID,
    name,
    DOB,
    gender,
    NIC,
    designation,
    phone,
    email,
    address,
    hourlyPay,
    otRate,
  };

  const update = await Employee.findByIdAndUpdate(userId, updateEmployee)
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

//http://localhost:8080/employee/delete/id
//Delete one record
router.route("/delete/:id").delete(async (req, res) => {
  let userId = req.params.id;

  await Employee.findByIdAndDelete(userId)
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
