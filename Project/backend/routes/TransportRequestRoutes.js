const express = require("express");
const getRequests = require("../controller/TransportRequest");
const createRequest = require("../controller/TransportRequest");
const deleteRequest = require("../controller/TransportRequest");
const updateRequest = require("../controller/TransportRequest");
const getOneRequest = require("../controller/TransportRequest");

//To create an instance of express.router
const router = express.Router();

router.get("/", getRequests.getRequests);
router.post("/", createRequest.createRequest);
router.delete("/:id", deleteRequest.deleteRequest);
router.post("/update/:id", updateRequest.updateRequest);
router.get("/get/:id", getOneRequest.getOneRequest);

module.exports = router;
