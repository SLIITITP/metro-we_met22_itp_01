const router = require("express").Router();
let Student = require("../models/Student.js");

//To add data passed through front-end http://localhost:8070/student/add
router.route("/add").post((req, res) => {
  const name = req.body.name;
  const age = Number(req.body.age);
  const gender = req.body.gender;

  const newStudent = new Student({
    name,
    age,
    gender,
  });

  newStudent
    .save()
    .then(() => {
      res.json("Student added successfully");
    })
    .catch((err) => {
      console.log(err);
      res.json(err.message);
    });
});

//To see the added data
router.route("/").get((req, res) => {
  Student.find()
    .then((stud) => {
      res.json(stud);
    })
    .catch((err) => {
      console.log(err.message);
    });
});

//To update
router.route("/update/:id").put(async (req, res) => {
  let userId = req.params.id;

  const { name, age, gender } = req.body;

  const updateStudent = {
    name,
    age,
    gender,
  };

  const update = await Student.findByIdAndUpdate(userId, updateStudent)
    .then(() => {
      res.status(200).send({ status: "User Updated" });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({ status: "Error updating data", err: err.message });
    });
});

//To delete
router.route("/delete/:id").delete(async (req, res) => {
  let userId = req.params.id;

  await Student.findByIdAndDelete(userId)
    .then(() => {
      res.status(200).send({ status: "User deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({
        status: "Error while deleting userID : " + userId,
        err: err.message,
      });
    });
});

//To get only one user
router.route("/get/:id").get(async (req, res) => {
  let userId = req.params.id;

  const user = await Student.findById(userId)
    .then((student) => {
      //let studentName = student.name;
      let object = { status: "Fetched User", studentName: student.name };
      res.status(200).send(object.status + "\nName : " + object.studentName);
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({ status: "Cannot fetch User", error: err.message });
    });
});

//To export in server.js
module.exports = router;
