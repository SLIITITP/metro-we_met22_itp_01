const router = require ("express").Router();
let Receive = require("../models/Receive");

//http://localhost:8080/receive/create
//Add a record to the database
router.route("/create").post((req, res) => {

    const allowanceID = req.body.allowanceID;
    const empID = req.body.empID;
    const year = req.body.year;
   
    const newReceive = new Receive({
        allowanceID,
        empID,
        year,
    })

    newReceive.save().then(() => {
        res.json("New Employee Allowance Added");
    }).catch((err) => {
        console.log(err);
    })
})

//http://localhost:8080/receive/read
//Read data from the database
//Display recoords of all the employee allowances
router.route("/read").get((req, res) => {

    Receive.find().then((allowances) => {
        res.json(allowances);
    }).catch((err) => {
        console.log(err);
    })
})

//http://localhost:8080/receive/read/id
//Read data from the database
//Display records of one employee allowance
router.route("/read/:id").get(async (req, res) => {

    let allowanceId = req.params.id;

    const allowance = await Receive.findById(allowanceId)
    .then((allowance) => {
        res.status(200).send({status: "Allowance Fetched", allowance});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with fetching allowance", error: err.message});
    })
})

//http://localhost:8080/receive/update/id
//Update one record
router.route("/update/:id").put(async (req, res) => {
    
    let allowanceId = req.params.id;
    const {allowanceID, empID, year} = req.body;

    const updateReceive = {
        allowanceID,
        empID,
        year,
    }

    const update = await Receive.findByIdAndUpdate(allowanceId, updateReceive)
    .then(() => {
        res.status(200).send({status: "Allowance Updated"});
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating allowance", error: err.message});
    }) 
})

//http://localhost:8080/allowance/delete/id
//Delete one record
router.route("/delete/:id").delete(async (req, res) => {
    
    let allowanceId = req.params.id;

    await Receive.findByIdAndDelete(allowanceId)
    .then(() => {
        res.status(200).send({status: "Allowance Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with deleting allowance", error: err.message});
    })
})

module.exports = router;