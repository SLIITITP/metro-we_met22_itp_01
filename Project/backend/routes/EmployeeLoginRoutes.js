const router = require ("express").Router();
let EmployeeLogin = require("../models/EmployeeLogin");

//http://localhost:8080/employeelogin/create
//Add a record to the database
router.route("/create").post((req, res) => {

    const username = req.body.username;
    const password = req.body.password;
    const empID = req.body.empID;
   
    const newEmployeeLogin = new EmployeeLogin({
        username,
        password,
        empID,
    })

    newEmployeeLogin.save().then(() => {
        res.json("New Employee Login Added");
    }).catch((err) => {
        console.log(err);
    })
})

//http://localhost:8080/employeelogin/read
//Read data from the database
//Display records of all logins
router.route("/read").get((req, res) => {

    EmployeeLogin.find().then((logins) => {
        res.json(logins);
    }).catch((err) => {
        console.log(err);
    })
})

//http://localhost:8080/employeelogin/read/id
//Read data from the database
//Display recoords of one login 
router.route("/read/:id").get(async (req, res) => {

    let userId = req.params.id;

    const userLogin = await EmployeeLogin.findById(userId)
    .then((login) => {
        res.status(200).send({status: "User Login Details Fetched", login});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with fetching user login details", error: err.message});
    })
})

//http://localhost:8080/employeelogin/update/id
//Update one record
router.route("/update/:id").put(async (req, res) => {
    
    let userId = req.params.id;
    const {username, password, empID} = req.body;

    const updateEmployeeLogin = {
        username,
        password,
        empID,
    }

    const update = await EmployeeLogin.findByIdAndUpdate(userId, updateEmployeeLogin)
    .then(() => {
        res.status(200).send({status: "User Login Details Updated"});
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating login details", error: err.message});
    }) 
})

//http://localhost:8080/employeelogin/delete/id
//Delete one record
router.route("/delete/:id").delete(async (req, res) => {
    
    let userId = req.params.id;

    await EmployeeLogin.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "User Login  Details Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with deleting login details", error: err.message});
    })
})

module.exports = router;