const express = require("express");
const getRequests = require("../controller/RoomNecessityRequest");
const createRequest = require("../controller/RoomNecessityRequest");
const deleteRequest = require("../controller/RoomNecessityRequest");
const updateRequest = require("../controller/RoomNecessityRequest");
const getOneRequest = require("../controller/RoomNecessityRequest");

//To create an instance of express.router
const router = express.Router();

router.get("/", getRequests.getRequests);
router.post("/", createRequest.createRequest);
router.delete("/:id", deleteRequest.deleteRequest);
router.post("/update/:id", updateRequest.updateRequest);

router.get("/get/:id", getOneRequest.getOneRequest);

module.exports = router;
