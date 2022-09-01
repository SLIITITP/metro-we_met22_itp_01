const TrainerRequest = require("../models/TrainerRequest");

//To get All Trainer Request
const getRequests = async (req, res) => {
  try {
    const allReqs = await TrainerRequest.find(); //now this will find all students and save it in allStudents

    res.status(200).json(allReqs);
  } catch (error) {
    // console.log(error);
    res.status(500).json({ message: error.message });
  }
};

//To create a new Trainer Request
const createRequest = async (req, res) => {
  const reqs = req.body;
  const Request = new TrainerRequest(reqs); // It is exported in routes so dont need to export it here

  try {
    await Request.save();
    res.status(200).json(Request);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Delete an existing Trainer Request based on _id
const deleteRequest = async (req, res) => {
  const id = req.params.id;

  try {
    await TrainerRequest.findByIdAndDelete(id); //exec to make it a executable function
    res.status(200).send("Successfully Deleted");
  } catch (error) {
    console.log(error.messsage);
  }
};

//Update an existing Trainer Request based on _id
const updateRequest = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    await TrainerRequest.findByIdAndUpdate(id, body);
    res.status(200).send("Successfully Updated");
  } catch {
    (err) => {
      res.status(500).send(err.message);
    };
  }
};

//To get a particular Trainer Request based on _id
const getOneRequest = async (req, res) => {
  let id = req.params.id;

  const request = await TrainerRequest.findById(id)
    .then((reqs) => {
      let object = { status: "Fetched Request" };
      res.status(200).send(object.status);
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Cannot fetch Request", error: err.message });
    });
};

module.exports.getRequests = getRequests;
module.exports.createRequest = createRequest;
module.exports.deleteRequest = deleteRequest;
module.exports.updateRequest = updateRequest;
module.exports.getOneRequest = getOneRequest;
