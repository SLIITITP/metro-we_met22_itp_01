const CustomerComplaint = require("../models/CustomerComplaint");

//To get All Complaints
const getComplaints = async (req, res) => {
  try {
    const allReqs = await CustomerComplaint.find(); //now this will find all students and save it in allStudents

    res.status(200).json(allReqs);
  } catch (error) {
    // console.log(error);
    res.status(500).json({ message: error.message });
  }
};

//To create a new Complaint
const createComplaint = async (req, res) => {
  const request = req.body;
  const newComplaint = new CustomerComplaint(request); // It is exported in routes so dont need to export it here

  try {
    await newComplaint.save();
    res.status(200).json(newComplaint);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Delete an existing Complaint based on _id
const deleteComplaint = async (req, res) => {
  const id = req.params.id;

  try {
    await CustomerComplaint.findByIdAndDelete(id); //exec to make it a executable function
    res.status(200).send("Successfully Deleted");
  } catch (error) {
    console.log(error.messsage);
  }
};

//Update an existing request based on _id
const updateComplaint = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    await CustomerComplaint.findByIdAndUpdate(id, body);
    res.status(200).send("Successfully Updated");
  } catch {
    (err) => {
      res.status(500).send(err.message);
    };
  }
};

//To get a particular Complaint based on _id
const getOneComplaint = async (req, res) => {
  let id = req.params.id;

  const Complaint = await CustomerComplaint.findById(id)
    .then((reqs) => {
      let object = { status: "Fetched Customer Complaint" };
      res.status(200).json(reqs);
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Cannot Fetch Complaint", error: err.message });
    });
};

module.exports.getComplaints = getComplaints;
module.exports.createComplaint = createComplaint;
module.exports.deleteComplaint = deleteComplaint;
module.exports.updateComplaint = updateComplaint;
module.exports.getOneComplaint = getOneComplaint;
