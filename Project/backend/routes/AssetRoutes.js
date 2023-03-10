const router = require("express").Router();
let Assets = require("../models/Assets");

router.route("/add").post((req, res) => {
  const invenID = req.body.invenID;
  // const availibilityStatus = req.body.availibilityStatus;
  const roomID = req.body.roomID;
  const category = req.body.category;
  const name = req.body.name;
  const description = req.body.description;
  const date = req.body.purchaseDate;

  const newAsset = new Assets({
    invenID,
    //availibilityStatus,
    roomID,
    category,
    name,
    description,
    date,
  });

  //exception handling catching the error
  newAsset
    .save()
    .then(() => {
      res.json("assets added");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/").get((req, res) => {
  Assets.find()
    .then((Assets) => {
      res.json(Assets);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/update/:id").put(async (req, res) => {
  let id = req.params.id;
  const {
    invenID,
    availibilityStatus,
    roomId,
    category,
    name,
    description,
    date,
  } = req.body;

  const updateAssets = {
    invenID,
    availibilityStatus,
    roomId,
    category,
    name,
    description,
    date,
  };

  const update = await Assets.findByIdAndUpdate(id, updateAssets)
    .then(() => {
      res.status(200).send({ status: "Assets updated successfully" });
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

  await Assets.findByIdAndDelete(id)
    .then(() => {
      res.status(200).send({ status: "Assets deleted successfully" });
    })
    .catch((err) => {
      res
        .status(500)
        .send({ status: "Error with deleting assets", error: err.message });
    });
});

router.route("/get/:id").get(async (req, res) => {
  let id = req.params.id;
  const asset = await Assets.findById(id)
    .then((asset) => {
      res.status(200).send({ status: "assets fetched", asset });
    })
    .catch(() => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with fetching data", error: err.message });
    });
});
module.exports = router;
