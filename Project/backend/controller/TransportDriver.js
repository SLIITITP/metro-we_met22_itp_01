const TransportDriver = require("../models/TransportDriver");

const getRequests = async (req, res) => {
  try {
    const allReqs = await TransportDriver.find();

    res.status(200).json(allReqs);
  } catch (error) {
    // console.log(error);
    res.status(500).json({ message: error.message });
  }
};

//To create a new Attended Request
const createRequest = async (req, res) => {
  const reqs = req.body;
  const Request = new TransportDriver(reqs);
  try {
    await Request.save();
    res.status(200).json(Request);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteRequest = async (req, res) => {
  const id = req.params.id;

  try {
    await TransportDriver.findByIdAndDelete(id);
    res.status(200).send("Successfully Deleted");
  } catch (error) {
    console.log(error.messsage);
  }
};

const updateRequest = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    await TransportDriver.findByIdAndUpdate(id, body);
    res.status(200).send("Successfully Updated");
  } catch {
    (err) => {
      res.status(500).send(err.message);
    };
  }
};

const getOneRequest = async (req, res) => {
  let id = req.params.id;

  const request = await TransportDriver.findById(id)
    .then((reqs) => {
      let object = { status: "Fetched Request" };
      res.status(200).send(request);
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
