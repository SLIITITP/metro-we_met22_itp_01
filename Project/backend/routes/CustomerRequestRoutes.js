const express = require("express");
const getRequests = require("../controller/CustomerRequest");
const createRequest = require("../controller/CustomerRequest");
const deleteRequest = require("../controller/CustomerRequest");
const updateRequest = require("../controller/CustomerRequest");
const getOneRequest = require("../controller/CustomerRequest");

//To create an instance of express.router
const router = express.Router();

router.get("/", getRequests.getRequests);
router.post("/", createRequest.createRequest);
router.delete("/:id", deleteRequest.deleteRequest);
router.post("/update/:id", updateRequest.updateRequest);
router.get("/get/:id", getOneRequest.getOneRequest);

module.exports = router;
