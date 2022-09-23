const router = require ("express").Router();
let Manager = require("../models/Manager");

//http://localhost:8080/manager/create
//Add a record to the database
router.route("/create").post((req, res) => {

    const managerID = req.body.managerID;
    
    const newManager = new Manager({
        managerID,
    })

    newManager.save().then(() => {
        res.json("New Manager Added");
    }).catch((err) => {
        console.log(err);
    })
})

//http://localhost:8080/manager/read
//Read data from the database
//Display records of all the managers
router.route("/read").get((req, res) => {

    Manager.find().then((managers) => {
        res.json(managers);
    }).catch((err) => {
        console.log(err);
    })
})

//http://localhost:8080/manager/read/id
//Read data from the database
//Display recoords of one manager
router.route("/read/:id").get(async (req, res) => {

    let userId = req.params.id;

    const user = await Manager.findById(userId)
    .then((manager) => {
        res.status(200).send({status: "User Fetched", manager});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with fetching user", error: err.message});
    })
})

//http://localhost:8080/manager/update/id
//Update one record
router.route("/update/:id").put(async (req, res) => {
    
    let userId = req.params.id;
    const {managerID} = req.body;

    const updateManager = {
        managerID,
    }

    const update = await Manager.findByIdAndUpdate(userId, updateManager)
    .then(() => {
        res.status(200).send({status: "User Updated"});
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    }) 
})

//http://localhost:8080/manager/delete/id
//Delete one record
router.route("/delete/:id").delete(async (req, res) => {
    
    let userId = req.params.id;

    await Manager.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "User Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with deleting user", error: err.message});
    })
})

module.exports = router;