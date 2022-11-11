const router = require("express").Router();
//const KitchenStock = require("../models/KitchenStock");
let kitchenStock = require("../models/KitchenStock");

router.route("/add").post((req, res) => {
  const invenID = req.body.invenID;
  const quantity = req.body.quantity;
  const category = req.body.category;
  const name = req.body.name;
  const description = req.body.description;
  const date = req.body.purchaseDate;

  const newKitchenStock = new kitchenStock({
    invenID,
    quantity,
    category,
    name,
    description,
    date,
  });

  //exception handling catching the error
  newKitchenStock
    .save()
    .then(() => {
      res.json("Kitchen stock added");
    })
    .catch((err) => {
      console.log(err);
    });
});

//Read data from the database
//Display records of all the ingredients
router.route("/").get(async (req, res) => {
  try {
    const allReq = await kitchenStock.find();
    res.status(200).json(allReq);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.route("/update/:id").put(async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    await kitchenStock.findByIdAndUpdate(id, body);

    res.status(200).send("Successfully Updated");
  } catch {
    (err) => {
      res.status(500).send(err.message);
    };
  }
});

router.route("/delete/:id").delete(async (req, res) => {
  let id = req.params.id;

  await kitchenStock
    .findByIdAndDelete(id)
    .then(() => {
      res.status(200).send({ status: "Kitchen Stock deleted successfully" });
    })
    .catch((err) => {
      res.status(500).send({
        status: "Error with deleting Kitchen Stock",
        error: err.message,
      });
    });
});
//display records of one ingredient
router.route("/get/:id").get(async (req, res) => {
  let userId = req.params.id;

  kitchenStock.findById(userId, (err, kitchenStock) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }

    return res.status(200).json({
      success: true,
      kitchenStock,
    });
  });
});
module.exports = router;
