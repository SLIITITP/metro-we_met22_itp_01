const express = require("express");
const getCustomers = require("../controller/LoyalCustomer");
const createCustomer = require("../controller/LoyalCustomer");
const deleteCustomer = require("../controller/LoyalCustomer");
const updateCustomer = require("../controller/LoyalCustomer");
const getOneCustomer = require("../controller/LoyalCustomer");

//To create an instance of express.router
const router = express.Router();

router.get("/", getCustomers.getCustomers);
router.post("/", createCustomer.createCustomer);
router.delete("/:id", deleteCustomer.deleteCustomer);
router.post("/update/:id", updateCustomer.updateCustomer);
router.get("/get/:id", getOneCustomer.getOneCustomer);

module.exports = router;
