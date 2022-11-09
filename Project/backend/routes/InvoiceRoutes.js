const router = require("express").Router();
let Invoice = require("../models/Invoice");

//http://localhost:8070/invoice/create
//Add a record to the database
router.route("/create").post((req, res) => {
  const invoiceID = req.body.invoiceID;
  const workingHours = Number(req.body.workingHours);
  const date = req.body.date;
  const amount = Number(req.body.amount);
  const managerID = req.body.managerID;
  const empID = req.body.empID;

  const newInvoice = new Invoice({
    invoiceID,
    workingHours,
    date,
    amount,
    managerID,
    empID,
  });

  newInvoice
    .save()
    .then(() => {
      res.json("New Invoice Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

//http://localhost:8070/invoice/read
//Read data from the database
//Display records of all the invoices
router.route("/read").get((req, res) => {
  Invoice.find()
    .then((invoices) => {
      res.json(invoices);
    })
    .catch((err) => {
      console.log(err);
    });
});

//http://localhost:8070/invoice/read/id
//Read data from the database
//Display recoords of one invoice
router.route("/read/:id").get(async (req, res) => {
  let invoiceId = req.params.id;

  const invoice = await Invoice.findById(invoiceId)
    .then((invoice) => {
      res.status(200).send({ status: "Invoice Fetched", invoice });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with fetching invoice", error: err.message });
    });
});

//http://localhost:8070/invoice/update/id
//Update one record
router.route("/update/:id").put(async (req, res) => {
  let invoiceId = req.params.id;
  const { invoiceID, workingHours, date, amount, managerID, empID } = req.body;

  const updateInvoice = {
    invoiceID,
    workingHours,
    date,
    amount,
    managerID,
    empID,
  };

  const update = await Invoice.findByIdAndUpdate(invoiceId, updateInvoice)
    .then(() => {
      res.status(200).send({ status: "Invoice Updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating invoice", error: err.message });
    });
});

//http://localhost:8070/invoice/delete/id
//Delete one record
router.route("/delete/:id").delete(async (req, res) => {
  let invoiceId = req.params.id;

  await Invoice.findByIdAndDelete(invoiceId)
    .then(() => {
      res.status(200).send({ status: "Invoice Deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with deleting invoice", error: err.message });
    });
});

module.exports = router;
