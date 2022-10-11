const router = require ("express").Router();
let Admin = require("../models/Admin");

//http://localhost:8080/admin/create
//Add a record to the database
router.route("/create").post((req, res) => {
   
    const adminID = req.body.adminID;
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
   
    const newAdmin = new Admin({
        adminID,
        username,
        password,
        name,
    })

    newAdmin.save().then(() => {
        res.json("New Admin Added");
    }).catch((err) => {
        console.log(err);
    })
})

//http://localhost:8080/admin/read
//Read data from the database
//Display records of all admins
router.route("/read").get((req, res) => {

    Admin.find().then((admins) => {
        res.json(admins);
    }).catch((err) => {
        console.log(err);
    })
})

//http://localhost:8080/admin/read/id
//Read data from the database
//Display recoords of one admin 
router.route("/read/:id").get(async (req, res) => {

    let adminId = req.params.id;

    const admin = await Admin.findById(adminId)
    .then((admin) => {
        res.status(200).send({status: "Admin Details Fetched", admin});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with fetching admin details", error: err.message});
    })
})

//http://localhost:8080/admin/update/id
//Update one record
router.route("/update/:id").put(async (req, res) => {
    
    let adminId = req.params.id;
    const {adminID, username, password, name} = req.body;

    const updateAdmin = {
        adminID,
        username,
        password,
        name,
    }

    const update = await Admin.findByIdAndUpdate(adminId, updateAdmin)
    .then(() => {
        res.status(200).send({status: "Admin Details Updated"});
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating admin details", error: err.message});
    }) 
})

//http://localhost:8080/admin/delete/id
//Delete one record
router.route("/delete/:id").delete(async (req, res) => {
    
    let adminId = req.params.id;

    await Admin.findByIdAndDelete(adminId)
    .then(() => {
        res.status(200).send({status: "Admin  Details Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with deleting admin details", error: err.message});
    })
})

module.exports = router;