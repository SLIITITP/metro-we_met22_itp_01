const express = require("express");
const getCustomers = require("../controller/Customer");
const createCustomer = require("../controller/Customer");
const deleteCustomer = require("../controller/Customer");
const updateCustomer = require("../controller/Customer");
const getOneCustomer = require("../controller/Customer");

//To create an instance of express.router
const router = express.Router();

router.get("/", getCustomers.getCustomers);
router.post("/", createCustomer.createCustomer);
router.delete("/:id", deleteCustomer.deleteCustomer);
router.post("/update/:id", updateCustomer.updateCustomer);

router.get("/get/:id", getOneCustomer.getOneCustomer);

module.exports = router;
