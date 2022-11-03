const router = require("express").Router();
let Employee = require("../models/Employee");

//http://localhost:8080/employee/create
//Add a record to the database
router.route("/create").post((req, res) => {
  const empID = req.body.empID;
  const name = req.body.empName;
  const designation = req.body.desig;
  const deptName = req.body.deptName;
  const hourlyPay = Number(req.body.hourlyPay);
  const otRate = Number(req.body.otRate);
  const NIC = req.body.NIC;
  const DOB = req.body.DOB;
  const gender = req.body.gender;
  const address = req.body.address;
  const email = req.body.email;
  const phone = req.body.phone;

  const newEmployee = new Employee({
    empID,
    name,
    designation,
    deptName,
    hourlyPay,
    otRate,
    NIC,
    DOB,
    gender,
    address,
    email,
    phone,
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
router.route("/read").get(async (req, res) => {
  try {
    const allEmp = await Employee.find();
    res.status(200).json(allEmp);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//http://localhost:8080/employee/read/id
//Read data from the database
//Display recoords of one employee
//router.get("/read/:id", (req, res) =>
router.route("/read/:id").get(async (req, res) => {
  let userId = req.params.id;

  await Employee.findById(userId, (err, employee) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }

    return res.status(200).json({
      success: true,
      employee,
    });
  });
});

router.post("/findbyid", async (req, res) => {
  const empID = req.body.empID;

  try {
    const user = await Employee.findOne({ empID: empID });

    if (user) {
      const temp = user;
      res.send(temp);
      // console.log(temp);
    } else {
      res.send({ message: "Login failed" });
      console.log("failed");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//http://localhost:8080/employee/update/id
//Update one record
router.route("/update/:id").put(async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    await Employee.findByIdAndUpdate(id, body);
    res.status(200).send("Successfully Updated");
  } catch {
    (err) => {
      res.status(500).send(err.message);
    };
  }
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
