const router = require("express").Router();
let Invoice = require("../models/Invoice");

//http://localhost:8070/invoice/create
//Add a record to the database
router.route("/create").post((req, res) => {
  const invoiceID = req.body.invoiceID;
  const empID = req.body.empID;
  const date = req.body.date;
  const workingHours = req.body.workingHours;
  const shiftHours = req.body.shiftHours;
  const otHours = req.body.otHours;
  const amount = req.body.amount;
  const dedAmount = req.body.dedAmount;
  const dedReason = req.body.dedReason;
  const allowance = req.body.allowance;
  const netSalary = req.body.netSalary;
  //const managerID = req.body.managerID;

  const newInvoice = new Invoice({
    invoiceID,
    empID,
    date,
    workingHours,
    shiftHours,
    otHours,
    amount,
    dedAmount,
    dedReason,
    allowance,
    netSalary,
    //managerID,
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
// router.route("/read").get((req, res) => {
//   Invoice.find()
//     .then((invoices) => {
//       res.json(invoices);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

router.route("/read").get(async (req, res) => {
  try {
    const invoice = await Invoice.find();
    res.status(200).json(invoice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
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
// router.route("/update/:id").put(async (req, res) => {
//   let invoiceId = req.params.id;
//   const { invoiceID, workingHours, date, amount, managerID, empID } = req.body;

//   const updateInvoice = {
//     invoiceID,
//     workingHours,
//     date,
//     amount,
//     managerID,
//     empID,
//   };

//   const update = await Invoice.findByIdAndUpdate(invoiceId, updateInvoice)
//     .then(() => {
//       res.status(200).send({ status: "Invoice Updated" });
//     })
//     .catch((err) => {
//       console.log(err);
//       res
//         .status(500)
//         .send({ status: "Error with updating invoice", error: err.message });
//     });
// });

router.route("/update/:id").put(async (req, res) => {
  const invoiceId = req.params.id;
  const body = req.body;
  try {
    await Invoice.findByIdAndUpdate(invoiceId, body);
    res.status(200).send("Successfully Updated");
  } catch {
    (err) => {
      res.status(500).send(err.message);
    };
  }
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
