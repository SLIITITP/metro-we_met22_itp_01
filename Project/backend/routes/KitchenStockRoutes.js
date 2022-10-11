const router = require("express").Router();
const KitchenStock = require("../models/KitchenStock");
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

//http://localhost:8080/employee/read
//Read data from the database
//Display records of all the employees
router.route("/").get((req, res) => {
  kitchenStock.find().exec((err, kitchenStock) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingKitchenStocks: kitchenStock,
    });
  });
});

router.route("/update/:id").put(async (req, res) => {
  let id = req.params.id;
  const { invenID, quantity, category, name, description, date } = req.body;

  const updateKitchenStock = {
    invenID,
    quantity,
    category,
    name,
    description,
    date,
  };

  const update = await KitchenStock.findByIdAndUpdate(id, updateKitchenStock)
    .then(() => {
      res.status(200).send({ status: "Kitchen Stock updated successfully" });
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

  await KitchenStock.findByIdAndDelete(id)
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

router.route("/get/:id").get(async (req, res) => {
  let id = req.params.id;
  const kitchenStock = await KitchenStock.findById(id)
    .then((kitchenStock) => {
      res.status(200).send({ status: "kitchen stock fetched", kitchenStock });
    })
    .catch(() => {
      console.log(err.message);
      res.status(500).send({
        status: "Error with fetching kitchen stock",
        error: err.message,
      });
    });
});

module.exports = router;
