const CustomerRequest = require("../models/CustomerRequest");

//To get All Requests
const getRequests = async (req, res) => {
  try {
    const allReqs = await CustomerRequest.find(); //now this will find all students and save it in allStudents

    res.status(200).json(allReqs);
  } catch (error) {
    // console.log(error);
    res.status(500).json({ message: error.message });
  }
};

//To create a new Request
const createRequest = async (req, res) => {
  const request = req.body;
  const newRequest = new CustomerRequest(request); // It is exported in routes so dont need to export it here

  try {
    await newRequest.save();
    res.status(200).json(newRequest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Delete an existing Request based on _id
const deleteRequest = async (req, res) => {
  const id = req.params.id;

  try {
    await CustomerRequest.findByIdAndDelete(id); //exec to make it a executable function
    res.status(200).send("Successfully Deleted");
  } catch (error) {
    console.log(error.messsage);
  }
};

//Update an existing request based on _id
const updateRequest = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    await CustomerRequest.findByIdAndUpdate(id, body);
    res.status(200).send("Successfully Updated");
  } catch {
    (err) => {
      res.status(500).send(err.message);
    };
  }
};

//To get a particular Request based on _id
const getOneRequest = async (req, res) => {
  let id = req.params.id;

  const Request = await CustomerRequest.findById(id)
    .then((reqs) => {
      let object = { status: "Fetched Customer Request" };
      res.status(200).json(reqs);
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Cannot Fetch Request", error: err.message });
    });
};

module.exports.getRequests = getRequests;
module.exports.createRequest = createRequest;
module.exports.deleteRequest = deleteRequest;
module.exports.updateRequest = updateRequest;
module.exports.getOneRequest = getOneRequest;
