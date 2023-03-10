const express = require("express");
const getRequests = require("../controller/TransportDriver");
const createRequest = require("../controller/TransportDriver");
const deleteRequest = require("../controller/TransportDriver");
const updateRequest = require("../controller/TransportDriver");
const getOneRequest = require("../controller/TransportDriver");

//To create an instance of express.router
const router = express.Router();

router.get("/", getRequests.getRequests);
router.post("/", createRequest.createRequest);
router.delete("/:id", deleteRequest.deleteRequest);
router.post("/update/:id", updateRequest.updateRequest);

router.get("/get/:id", getOneRequest.getOneRequest);

module.exports = router;
