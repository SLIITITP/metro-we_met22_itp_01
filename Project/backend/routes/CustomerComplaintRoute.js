const express = require("express");
const getComplaints = require("../controller/CustomerComplaint");
const createComplaint = require("../controller/CustomerComplaint");
const deleteComplaint = require("../controller/CustomerComplaint");
const updateComplaint = require("../controller/CustomerComplaint");
const getOneComplaint = require("../controller/CustomerComplaint");

//To create an instance of express.router
const router = express.Router();

router.get("/", getComplaints.getComplaints);
router.post("/", createComplaint.createComplaint);
router.delete("/:id", deleteComplaint.deleteComplaint);
router.post("/update/:id", updateComplaint.updateComplaint);
router.get("/get/:id", getOneComplaint.getOneComplaint);

module.exports = router;
