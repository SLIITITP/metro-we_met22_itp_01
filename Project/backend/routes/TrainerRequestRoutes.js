const express = require("express");
const getRequests = require("../controller/TrainerRequest");
const createRequest = require("../controller/TrainerRequest");
const deleteRequest = require("../controller/TrainerRequest");
const updateRequest = require("../controller/TrainerRequest");
const getOneRequest = require("../controller/TrainerRequest");

//To create an instance of express.router
const router = express.Router();

router.get("/", getRequests.getRequests);
router.post("/", createRequest.createRequest);
router.delete("/:id", deleteRequest.deleteRequest);
router.post("/update/:id", updateRequest.updateRequest);

router.get("/get/:id", getOneRequest.getOneRequest);

module.exports = router;
