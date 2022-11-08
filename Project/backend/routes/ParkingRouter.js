const express = require("express");
const getRequests = require("../controller/ParkingController");
const createRequest = require("../controller/ParkingController");
const updateRequest = require("../controller/ParkingController");
const getOneRequest = require("../controller/ParkingController");

//To create an instance of express.router
const router = express.Router();

router.get("/", getRequests.getRequests);
router.post("/", createRequest.createRequest);
router.post("/update/:id", updateRequest.updateRequest);

router.get("/get/:id", getOneRequest.getOneRequest);
module.exports = router;
