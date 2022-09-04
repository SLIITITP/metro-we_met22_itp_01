const FoodAndBeverage = require("../models/FoodAndBeverageRequest");

//To get All F&B Request
const getRequests = async (req, res) => {
  try {
    const allReqs = await FoodAndBeverage.find(); //now this will find all students and save it in allStudents

    res.status(200).json(allReqs);
  } catch (error) {
    // console.log(error);
    res.status(500).json({ message: error.message });
  }
};

//To create a new F&B Request
const createRequest = async (req, res) => {
  const reqs = req.body;
  const Request = new FoodAndBeverage(reqs); // It is exported in routes so dont need to export it here

  try {
    await Request.save();
    res.json("Request Added");
  } catch (error) {
    console.log(error);
  }
};

//Delete an existing F&B Request based on _id
const deleteRequest = async (req, res) => {
  const id = req.params.id;

  try {
    await FoodAndBeverage.findByIdAndDelete(id); //exec to make it a executable function
    res.status(200).send("Successfully Deleted");
  } catch (error) {
    console.log(error.messsage);
  }
};

//Update an existing F&B Request based on _id
const updateRequest = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    await FoodAndBeverage.findByIdAndUpdate(id, body);
    res.status(200).send("Successfully Updated");
  } catch {
    (err) => {
      res.status(500).send(err.message);
    };
  }
};

//To get a particular F&B Request based on _id
const getOneRequest = async (req, res) => {
  let id = req.params.id;

  const request = await FoodAndBeverage.findById(id)
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
