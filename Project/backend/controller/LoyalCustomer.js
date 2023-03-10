const LoyalCustomer = require("../models/LoyalCustomer");

//To get All Loyal Customers
const getCustomers = async (req, res) => {
  try {
    const allLoyalCustomers = await LoyalCustomer.find(); //now this will find all students and save it in allStudents

    res.status(200).json(allLoyalCustomers);
  } catch (error) {
    // console.log(error);
    res.status(500).json({ message: error.message });
  }
};

//To create a new Loyal Customer
const createCustomer = async (req, res) => {
  const customer = req.body;
  const newCustomer = new LoyalCustomer(customer); // It is exported in routes so dont need to export it here

  try {
    await newCustomer.save();
    res.status(200).json(newCustomer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Delete an existing Loyal customer based on _id
const deleteCustomer = async (req, res) => {
  const id = req.params.id;

  try {
    await LoyalCustomer.findByIdAndDelete(id); //exec to make it a executable function
    res.status(200).send("Successfully Deleted");
  } catch (error) {
    console.log(error.messsage);
  }
};

//Update an existing Loyal customer based on _id
const updateCustomer = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    await LoyalCustomer.findByIdAndUpdate(id, body);
    res.status(200).send("Successfully Updated");
  } catch {
    (err) => {
      res.status(500).send(err.message);
    };
  }
};

//To get a particular Loyal customer based on _id
const getOneCustomer = async (req, res) => {
  let userId = req.params.id;

  const user = await LoyalCustomer.findById(userId)
    .then((customer) => {
      let object = { status: "Fetched Customer" };
      res.status(200).send(object.status);
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
