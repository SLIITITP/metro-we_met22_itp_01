const router = require("express").Router();
let Review = require("../models/Review");

//TO CREATE A RECORD  Review
router.route("/add").post((req, res) => {
  //reviewID, empID, supplierID, ratings, review, date
  const reviewID = req.body.reviewID;

  const supplierID = req.body.supplierID;
  const ratings = req.body.ratings;
  const review = req.body.review;
  const date = req.body.date;

  const newReview = new Review({
    reviewID,

    supplierID,
    ratings,
    review,
    date,
  });
  newReview
    .save()
    .then(() => {
      res.json("Review Added");
    })
    .catch((err) => {
      console.log(err);
    });
});
// TO SHOW ALL THE RECORD Review  reviews
router.route("/").get((req, res) => {
  Review.find()
    .then((reviews) => {
      res.json(reviews);
    })
    .catch((err) => {
      console.log(err);
    });
});
// TO UPDATE A RECORD Review  reviews

router.route("/update/:id").put(async (req, res) => {
  let revId = req.params.id;
  //const {reviewID, empID, supplierID, ratings, review, date}= req.body;
  const { reviewID, supplierID, ratings, review, date } = req.body;

  const updateReview = {
    reviewID,

    supplierID,
    ratings,
    review,
    date,
  };

  ///Review  reviews
  const update = await Review.findByIdAndUpdate(revId, updateReview)
    .then(() => {
      res.status(200).send({ status: "Review Update" });
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
  let revId = req.params.id;

  await Review.findByIdAndDelete(revId)
    .then(() => {
      res.status(200).send({ status: "Review Deleted" });
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
  let revId = req.params.id;

  const user = await Review.findById(revId)
    .then((review) => {
      res.status(200).send({ status: "Review Fetched", review });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        status: "Error occurred while getting a Review record",
        error: err.message,
      });
    });
});
module.exports = router;
