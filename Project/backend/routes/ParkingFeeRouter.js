const express = require("express");
const getRequests = require("../controller/ParkingFeeController");
const createRequest = require("../controller/ParkingFeeController");
const updateRequest = require("../controller/ParkingFeeController");
const getOneRequest = require("../controller/ParkingFeeController");

//To create an instance of express.router
const router = express.Router();

router.get("/", getRequests.getRequests);
router.post("/", createRequest.createRequest);
router.post("/update/:id", updateRequest.updateRequest);
router.get("/get/:id", getOneRequest.getOneRequest);

module.exports = router;
