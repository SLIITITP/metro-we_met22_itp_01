const router = require("express").Router();
let ChefRequest = require("../models/ChefRequest");

router.route("/add").post((req, res) => {
  const reqID = req.body.reqID;

  const kitIngID = req.body.kitIngID;
  const reqType = req.body.reqType;
  const date = req.body.date;
  const name = req.body.name;
  const quantity = req.body.quantity;
  const description = req.body.description;

  const newChefRequest = new ChefRequest({
    reqID,
    kitIngID,
    reqType,
    date,
    name,
    quantity,
    description,
  });

  //exception handling catching the error
  newChefRequest
    .save()
    .then(() => {
      res.json("chef request added");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/").get((req, res) => {
  ChefRequest.find()
    .then((ChefRequest) => {
      res.json(ChefRequest);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/getApproved").get((req, res) => {
  ChefRequest.find({ status: "Approved" })
    .then((ChefRequest) => {
      res.json(ChefRequest);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/update/:id").put(async (req, res) => {
  let id = req.params.id;
  const {
    reqID,
    kitIngID,
    reqType,
    date,
    name,
    quantity,
    description,
    status,
  } = req.body;

  const updateRequest = {
    reqID,
    kitIngID,
    reqType,
    date,
    name,
    quantity,
    description,
    status,
  };

  const update = await ChefRequest.findByIdAndUpdate(id, updateRequest)
    .then(() => {
      res.status(200).send({ status: "Chef request updated successfully" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating data", error: err.message });
    });
});

router.route("/delete/:id").delete(async (req, res) => {
  let id = req.params.id;

  await ChefRequest.findByIdAndDelete(id)
    .then(() => {
      res.status(200).send({ status: "Chef request deleted successfully" });
    })
    .catch((err) => {
      res
        .status(500)
        .send({ status: "Error with deleting request", error: err.message });
    });
});

router.route("/get/:id").get(async (req, res) => {
  let id = req.params.id;
  const reques = await ChefRequest.findById(id)
    .then((ChefRequest) => {
      res.status(200).send({ status: "request fetched", ChefRequest });
    })
    .catch(() => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with fetching requests", error: err.message });
    });
});

module.exports = router;
