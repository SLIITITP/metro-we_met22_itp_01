const express = require("express");
const getRequests = require("../controller/AttendRequest");
const createRequest = require("../controller/AttendRequest");
const deleteRequest = require("../controller/AttendRequest");
const updateRequest = require("../controller/AttendRequest");
const getOneRequest = require("../controller/AttendRequest");

//To create an instance of express.router
const router = express.Router();

router.get("/", getRequests.getRequests);
router.post("/", createRequest.createRequest);
router.delete("/:id", deleteRequest.deleteRequest);
router.post("/update/:id", updateRequest.updateRequest);

router.get("/get/:id", getOneRequest.getOneRequest);

module.exports = router;
