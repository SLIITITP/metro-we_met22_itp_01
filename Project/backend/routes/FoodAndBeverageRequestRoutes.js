const express = require("express");
const getRequests = require("../controller/FoodAndBeverageRequest");
const createRequest = require("../controller/FoodAndBeverageRequest");
const deleteRequest = require("../controller/FoodAndBeverageRequest");
const updateRequest = require("../controller/FoodAndBeverageRequest");
const getOneRequest = require("../controller/FoodAndBeverageRequest");

//To create an instance of express.router
const router = express.Router();

router.get("/", getRequests.getRequests);
router.post("/", createRequest.createRequest);
router.delete("/:id", deleteRequest.deleteRequest);
router.post("/update/:id", updateRequest.updateRequest);

router.get("/get/:id", getOneRequest.getOneRequest);

module.exports = router;
