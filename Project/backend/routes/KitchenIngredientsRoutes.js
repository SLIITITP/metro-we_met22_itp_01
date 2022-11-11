const router = require("express").Router();
let KitchenIngredients = require("../models/KitchenIngredients");

router.route("/add").post((req, res) => {
  const kitIngID = req.body.kitIngID;
  const quantity = req.body.quantity;
  const category = req.body.category;
  const name = req.body.name;
  const description = req.body.description;
  const date = req.body.date;

  const newKitchenIngredients = new KitchenIngredients({
    kitIngID,
    quantity,
    category,
    name,
    description,
    date,
  });

  //exception handling catching the error
  newKitchenIngredients
    .save()
    .then(() => {
      res.json("kitchen ingredients added");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/").get((req, res) => {
  KitchenIngredients.find()
    .then((KitchenIngredients) => {
      res.json(KitchenIngredients);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/update/:id").put(async (req, res) => {
  let id = req.params.id;
  const { kitIngID, quantity, category, name, description, date, status } =
    req.body;

  const updateIngredients = {
    kitIngID,
    quantity,
    category,
    name,
    description,
    date,
    status,
  };

  const update = await KitchenIngredients.findByIdAndUpdate(
    id,
    updateIngredients
  )
    .then(() => {
      res.status(200).send({ status: "Ingredients updated successfully" });
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

  await KitchenIngredients.findByIdAndDelete(id)
    .then(() => {
      res
        .status(200)
        .send({ status: "Kitchen ingredients deleted successfully" });
    })
    .catch((err) => {
      res.status(500).send({
        status: "Error with deleting ingredients",
        error: err.message,
      });
    });
});

router.route("/get/:id").get(async (req, res) => {
  let id = req.params.id;
  const ingredients = await KitchenIngredients.findById(id)
    .then((ingredients) => {
      res.status(200).send({ status: "Ingredients fetched", ingredients });
    })
    .catch(() => {
      console.log(err.message);
      res.status(500).send({
        status: "Error with fetching ingredients",
        error: err.message,
      });
    });
});

module.exports = router;
