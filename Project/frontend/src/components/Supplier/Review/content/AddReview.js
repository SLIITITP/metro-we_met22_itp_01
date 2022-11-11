import React, { useState } from "react";
import axios from "axios";
import GetReview from "./GetReview";
import GetSupplier from "./GetSupplier";
import { useParams } from "react-router-dom";

export default function AddReview() {
  //To add review
  const id = useParams();
  var z = id.id;
  var supplier = GetSupplier();
  var i;
  var details = {};

  for (i = 0; i < supplier.length; i++) {
    if (supplier[i]._id === z) {
      details = supplier[i];
      break;
    }
  }

  const [reviewe, setReviewe] = useState({
    reviewID: " ",
    empID: " ",
    supplierID: " ",
    ratings: " ",
    review: " ",
    date: " ",
  });

  const [reviewID, setreviewID] = useState("");
  const [empID, setempID] = useState("");
  const [supplierID, setsupplierID] = useState("");
  const [ratings, setratings] = useState("");
  const [review, setreview] = useState("");
  const [date, setdate] = useState("");

  var cdate = new Date();
  var year = cdate.getFullYear();
  var month = cdate.getMonth() + 1;
  var dat = cdate.getDate();

  const tDate = year + "-" + month + "-" + dat;

  const reviList = GetReview();
  let j = reviList.length;
  let reqIdString;
  console.log(reviList);
  j--;

  if (j >= 0) {
    let reqId = parseInt(reviList[j].reviewID);
    reqId++;
    reqIdString = reqId.toString();
  } else {
    reqIdString = "1";
  }

  function sendData(e) {
    e.preventDefault();
    const newReview = {
      reviewID,
      empID,
      supplierID,
      ratings,
      review,
      date,
    };

    newReview.reviewID = reqIdString;
    newReview.supplierID = details.supplierID;
    newReview.date = tDate;
    let port = window.location.port;
    axios
      .post("http://localhost:8070/review/add", newReview)
      .then(() => {
        window.location.replace(`http://localhost:${port}/Manager/Review`);
        alert("New Review Added Successfully");
        //window.location.reload(false);
      })
      .catch((err) => {
        alert(err.message);
        console.log(err);
      });
  }

  return (
    <div
      className="container"
      style={{
        width: "50%",
        position: "sticky",
      }}
    >
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <div class="col-md-12"></div>
            <form
              role="form"
              style={{ marginTop: "100px", marginLeft: "80px", width: "100%" }}
              onSubmit={sendData}
            >
              <h1 className="display-6" style={{ marginBottom: "20px" }}>
                Supplier Review
              </h1>
              <h1
                className="display-6"
                style={{
                  marginBottom: "20px",
                  backgroundColor: "#0d6efd",
                  color: "white",
                  border: "none",
                }}
              >
                {details.name}
              </h1>

              <div class="form-group">
                <label for="supplierID">Supplier ID</label>
                <input
                  type="text"
                  class="form-control"
                  id="supplierID"
                  value={details.supplierID}
                />
              </div>

              <div class="form-group">
                <label for="ratings ">Ratings</label>
                <select
                  className="form-select"
                  id="ratings"
                  aria-label="Default select example"
                  required
                  onChange={(event) => {
                    setratings(event.target.value);
                  }}
                >
                  <option value="">Select from 1-5</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>

              <div class="form-group">
                <label for="review">Review (Description)</label>
                <input
                  type="text"
                  class="form-control"
                  id="review"
                  onChange={(event) => {
                    setreview(event.target.value);
                  }}
                />
              </div>

              <div class="container">
                <div class="row">
                  <div class="col text-center">
                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
