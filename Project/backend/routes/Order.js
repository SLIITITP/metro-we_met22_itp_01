const router = require("express").Router();
let Order = require("../models/Order");

//TO CREATE A RECORD  Order
router.route("/add").post((req, res) => {
  //(orderID, reqID, supplierID, deliveryDate, amount, status, orderDate
  const orderID = req.body.orderID;
  const reqID = req.body.reqID;
  const supplierID = req.body.supplierID;
  const deliveryDate = req.body.deliveryDate;
  const amount = req.body.amount;
  const status = req.body.status;
  const orderDate = req.body.orderDate;

  const newOrder = new Order({
    orderID,
    reqID,
    supplierID,
    deliveryDate,
    amount,
    status,
    orderDate,
  });
  newOrder
    .save()
    .then(() => {
      res.json("Order Added");
    })
    .catch((err) => {
      console.log(err);
    });
});
// TO SHOW ALL THE RECORD
router.route("/").get((req, res) => {
  Order.find()
    .then((orders) => {
      res.json(orders);
    })
    .catch((err) => {
      console.log(err);
    });
});
// TO UPDATE A RECORD

router.route("/update/:id").put(async (req, res) => {
  let ordId = req.params.id;
  const {
    orderID,
    reqID,
    supplierID,
    deliveryDate,
    amount,
    status,
    orderDate,
  } = req.body;

  const updateOrder = {
    orderID,
    reqID,
    supplierID,
    deliveryDate,
    amount,
    status,
    orderDate,
  };

  const update = await Order.findByIdAndUpdate(ordId, updateOrder)
    .then(() => {
      res.status(200).send({ status: "Order Update" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error occurred while updating", error: err.message });
    });
});

//TO DELETE A RECORD
router.route("/delete/:id").delete(async (req, res) => {
  let ordId = req.params.id;

  await Order.findByIdAndDelete(ordId)
    .then(() => {
      res.status(200).send({ status: "Order Deleted" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error occurred while deleting", error: err.mess });
    });
});
//TO SHOW ONE RECORD

router.route("/get/:id").get(async (req, res) => {
  let ordId = req.params.id;

  const user = await Order.findOne(this.name)
    .then((order) => {
      res.status(200).send({ status: "Order Fetched", order });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        status: "Error occurred while getting a Order record",
        error: err.message,
      });
    });
});
module.exports = router;
