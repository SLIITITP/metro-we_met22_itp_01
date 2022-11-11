const router = require("express").Router();
let Supplier = require("../models/Supplier");

//TO CREATE A RECORD
router.route("/add").post((req, res) => {
  const supplierID = req.body.supplierID;
  const type = req.body.type;
  const availability = req.body.availability;
  const email = req.body.email;
  const address = req.body.address;
  const name = req.body.name;
  const contactNo = req.body.contactNo;

  const newSupplier = new Supplier({
    supplierID,
    type,
    availability,
    email,
    address,
    name,
    contactNo,
  });
  newSupplier
    .save()
    .then(() => {
      res.json("Supplier Added");
    })
    .catch((err) => {
      console.log(err);
    });
});
// TO SHOW ALL THE RECORD
router.route("/").get((req, res) => {
  Supplier.find()
    .then((suppliers) => {
      res.json(suppliers);
    })
    .catch((err) => {
      console.log(err);
    });
});
// TO UPDATE A RECORD
/*
router.route("/update/:id").put(async (req, res) => {
  let supId = req.params.id;
  const { supplierID, type, availability, email, address, name, contactNo } =
    req.body;

  const updateSupplier = {
    supplierID,
    type,
    availability,
    email,
    address,
    name,
    contactNo,
  };

  const update = await Supplier.findByIdAndUpdate(supId, updateSupplier)
    .then(() => {
      res.status(200).send({ status: "Supplier Update" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error occurred while updating", error: err.message });
    });
});
*/
//TO DELETE A RECORD
router.route("/delete/:id").delete(async (req, res) => {
  let supId = req.params.id;

  await Supplier.findByIdAndDelete(supId)
    .then(() => {
      res.status(200).send({ status: "Supplier Deleted" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error occurred while deleting", error: err.mess });
    });
});
///////////////////////////////////////////********** */
router.route("/update/:id").put(async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    await Supplier.findByIdAndUpdate(id, body);
    res.status(200).send("Successfully Updated");
  } catch {
    (err) => {
      res.status(500).send(err.message);
    };
  }
});

///////////////////////////////////////////********** */

//TO SHOW ONE RECORD (for supplier - search by the name)

router.route("/get/:id").get(async (req, res) => {
  let supId = req.params.id;

  const user = await Supplier.findOne(this.name)
    .then((supplier) => {
      res.status(200).send({ status: "Supplier Fetched", supplier });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        status: "Error occurred while getting a Supplier record",
        error: err.message,
      });
    });
});
module.exports = router;
