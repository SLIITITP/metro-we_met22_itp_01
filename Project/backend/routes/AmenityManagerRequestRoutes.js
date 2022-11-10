const router = require("express").Router();
let AmenityManagerRequest = require("../models/AmenityManagerRequest");

router.route("/add").post((req, res) => {
  const reqID = req.body.reqID;
  const reqType = req.body.reqType;
  const invenID = req.body.invenID;
  // const managerID = req.body.managerID;
  // const status = req.body.status;
  const date = req.body.date;
  //const name = req.body.name;
  const quantity = req.body.quantity;
  const description = req.body.description;

  const newAmenityManagerRequest = new AmenityManagerRequest({
    reqID,
    reqType,
    invenID,
    // managerID,
    //status,
    date,
    //name,
    quantity,
    description,
  });

  newAmenityManagerRequest
    .save()
    .then(() => {
      res.json("Manager request added");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/").get((req, res) => {
  AmenityManagerRequest.find()
    .then((AmenityManagerRequest) => {
      res.json(AmenityManagerRequest);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/update/:id").put(async (req, res) => {
  let reqId = req.params.id;
  const {
    reqID,
    reqType,
    invenID,
    status,
    // managerID,
    date,
    //name,
    quantity,
    description,
  } = req.body;

  const updateRequest = {
    reqID,
    reqType,
    invenID,
    // managerID,
    status,
    date,
    //name,
    quantity,
    description,
  };

  const update = await AmenityManagerRequest.findByIdAndUpdate(
    reqId,
    updateRequest
  )
    .then(() => {
      res.status(200).send({ status: "Manager request updated successfully" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating data", error: err.message });
    });
});

router.route("/delete/:id").delete(async (req, res) => {
  let reqId = req.params.id;

  await ManagerRequest.findByIdAndDelete(reqId)
    .then(() => {
      res.status(200).send({ status: "Manager request deleted successfully" });
    })
    .catch((err) => {
      res
        .status(500)
        .send({ status: "Error with deleting request", error: err.message });
    });
});

router.route("/get/:id").get(async (req, res) => {
  let reqId = req.params.id;
  const request = await AmenityManagerRequest.findById(reqId)
    .then((request) => {
      res.status(200).send({ status: "request fetched", request });
    })
    .catch(() => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with fetching requests", error: err.message });
    });
});

module.exports = router;
