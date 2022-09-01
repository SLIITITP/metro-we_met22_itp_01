const AttendComplaint = require("../models/AttendComplaint");

//To get All Attended Complaints
const getRequests = async (req, res) => {
  try {
    const allComps = await AttendComplaint.find(); //now this will find all students and save it in allStudents

    res.status(200).json(allComps);
  } catch (error) {
    // console.log(error);
    res.status(500).json({ message: error.message });
  }
};

//To create a new Attended Complaints
const createRequest = async (req, res) => {
  const comps = req.body;
  const Complaints = new AttendComplaint(comps); // It is exported in routes so dont need to export it here

  try {
    await Complaints.save();
    res.status(200).json(Complaints);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Delete an existing Attended Complaints based on _id
const deleteRequest = async (req, res) => {
  const id = req.params.id;

  try {
    await AttendComplaint.findByIdAndDelete(id); //exec to make it a executable function
    res.status(200).send("Successfully Deleted");
  } catch (error) {
    console.log(error.messsage);
  }
};

//Update an existing Attended Complaints based on _id
const updateRequest = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    await AttendComplaint.findByIdAndUpdate(id, body);
    res.status(200).send("Successfully Updated");
  } catch {
    (err) => {
      res.status(500).send(err.message);
    };
  }
};

//To get a particular Attended Complaints based on _id
const getOneRequest = async (req, res) => {
  let id = req.params.id;

  const request = await AttendComplaint.findById(id)
    .then((comps) => {
      let object = { status: "Fetched Complaints" };
      res.status(200).send(object.status);
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Cannot fetch Complaints", error: err.message });
    });
};

module.exports.getRequests = getRequests;
module.exports.createRequest = createRequest;
module.exports.deleteRequest = deleteRequest;
module.exports.updateRequest = updateRequest;
module.exports.getOneRequest = getOneRequest;
