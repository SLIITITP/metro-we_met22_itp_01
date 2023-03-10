const Customer = require("../models/Customer");

//To get All Customers
const getCustomers = async (req, res) => {
  try {
    const allCustomers = await Customer.find(); //now this will find all students and save it in allStudents

    res.status(200).json(allCustomers);
  } catch (error) {
    // console.log(error);
    res.status(500).json({ message: error.message });
  }
};

//To create a new Customer
const createCustomer = async (req, res) => {
  const customer = req.body;
  const newCustomer = new Customer(customer); // It is exported in routes so dont need to export it here

  try {
    await newCustomer.save();
    res.status(200).json(newCustomer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Delete an existing customer based on _id
const deleteCustomer = async (req, res) => {
  const id = req.params.id;

  try {
    await Customer.findByIdAndDelete(id); //exec to make it a executable function
    res.status(200).send("Successfully Deleted");
  } catch (error) {
    console.log(error.messsage);
  }
};

//Update an existing customer based on _id
const updateCustomer = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    await Customer.findByIdAndUpdate(id, body);
    res.status(200).send("Successfully Updated");
  } catch {
    (err) => {
      res.status(500).send(err.message);
    };
  }
};

//To get a particular customer based on _id
const getOneCustomer = async (req, res) => {
  let userId = req.params.id;

  const user = await Customer.findById(userId)
    .then((customer) => {
      let object = { status: "Fetched Customer", custName: customer.name };
      res.status(200).send(object.status + "\nName : " + object.custName);
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Cannot fetch Customer", error: err.message });
    });
};

module.exports.getCustomers = getCustomers;
module.exports.createCustomer = createCustomer;
module.exports.deleteCustomer = deleteCustomer;
module.exports.updateCustomer = updateCustomer;
module.exports.getOneCustomer = getOneCustomer;
