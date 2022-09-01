const express = require("express");
const getRequests = require("../controller/AttendComplaint");
const createRequest = require("../controller/AttendComplaint");
const deleteRequest = require("../controller/AttendComplaint");
const updateRequest = require("../controller/AttendComplaint");
const getOneRequest = require("../controller/AttendComplaint");

//To create an instance of express.router
const router = express.Router();

router.get("/", getRequests.getRequests);
router.post("/", createRequest.createRequest);
router.delete("/:id", deleteRequest.deleteRequest);
router.post("/update/:id", updateRequest.updateRequest);

router.get("/get/:id", getOneRequest.getOneRequest);

module.exports = router;
