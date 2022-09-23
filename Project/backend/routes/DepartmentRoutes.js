const router = require ("express").Router();
let Department = require("../models/Department");

//http://localhost:8080/department/create
//Add a record to the database
router.route("/create").post((req, res) => {

    const depID = req.body.depID;
    const name = req.body.name;
    const managerID = req.body.managerID;

    const newDepartment = new Department({
        depID,
        name,
        managerID,
    })

    newDepartment.save().then(() => {
        res.json("New Department Added");
    }).catch((err) => {
        console.log(err);
    })
})

//http://localhost:8080/department/read
//Read data from the database
//Display records of all the departments
router.route("/read").get((req, res) => {

    Department.find().then((departments) => {
        res.json(departments);
    }).catch((err) => {
        console.log(err);
    })
})

//http://localhost:8080/department/read/id
//Read data from the database
//Display recoords of one department
router.route("/read/:id").get(async (req, res) => {

    let depId = req.params.id;

    const department = await Department.findById(depId)
    .then((department) => {
        res.status(200).send({status: "Department Fetched", department});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with fetching department", error: err.message});
    })
})

//http://localhost:8080/department/update/id
//Update one record
router.route("/update/:id").put(async (req, res) => {
    
    let depId = req.params.id;
    const {depID, name, managerID} = req.body;

    const updateDepartment = {
        depID,
        name,
        managerID,
    }

    const update = await Department.findByIdAndUpdate(depId, updateDepartment)
    .then(() => {
        res.status(200).send({status: "Department Updated"});
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating department", error: err.message});
    }) 
})

//http://localhost:8080/department/delete/id
//Delete one record
router.route("/delete/:id").delete(async (req, res) => {
    
    let depId = req.params.id;

    await Department.findByIdAndDelete(depId)
    .then(() => {
        res.status(200).send({status: "Department Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with deleting department", error: err.message});
    })
})

module.exports = router;