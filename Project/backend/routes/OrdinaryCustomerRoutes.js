const express = require("express");
const getCustomers = require("../controller/OrdinaryCustomer");
const createCustomer = require("../controller/OrdinaryCustomer");
const deleteCustomer = require("../controller/OrdinaryCustomer");
const updateCustomer = require("../controller/OrdinaryCustomer");
const getOneCustomer = require("../controller/OrdinaryCustomer");

//To create an instance of express.router
const router = express.Router();

router.get("/", getCustomers.getCustomers);
router.post("/", createCustomer.createCustomer);
router.delete("/:id", deleteCustomer.deleteCustomer);
router.post("/update/:id", updateCustomer.updateCustomer);
router.get("/get/:id", getOneCustomer.getOneCustomer);

module.exports = router;
