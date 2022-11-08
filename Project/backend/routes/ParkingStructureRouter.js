const express = require("express");
const getRequests = require("../controller/ParkingStructureController");
const createRequest = require("../controller/ParkingStructureController");
const deleteRequest = require("../controller/ParkingStructureController");
const updateRequest = require("../controller/ParkingStructureController");

//To create an instance of express.router
const router = express.Router();

router.get("/", getRequests.getRequests);
router.post("/", createRequest.createRequest);
router.delete("/:id", deleteRequest.deleteRequest);
router.post("/update/:id", updateRequest.updateRequest);

module.exports = router;
