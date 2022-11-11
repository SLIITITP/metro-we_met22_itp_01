import React, { useEffect, useState } from "react";
import axios from "axios";
import GetReview from "./GetReview";
import "../../../../index.css";
import GetOneReview from "./GetOneReview";
import GetSupplier from "./GetSupplier";
import { useParams } from "react-router-dom";

export default function SuggestSupplier() {
  let allReview = GetReview();
  const [search, setSearch] = useState("");

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

  let reviewList = [];

  function display() {
    for (let k = 0; k < allReview.length; k++) {
      if (allReview[k].supplierID === details.supplierID) {
        reviewList.push(allReview[k]);
      }
    }
  }

  function displayAVG() {
    var avg = 0;
    for (let d = 0; d < reviewList.length; d++) {
      avg = parseInt(reviewList[d].ratings) + avg;
    }
    return parseFloat(avg / reviewList.length).toFixed(2);
  }

  display();
  var avgg = displayAVG();

  function DeleteReview(id) {
    axios.delete("http://localhost:8070/review/delete/" + id).then(() => {
      window.location.reload(false);
      alert("Review Record Deleted Successfully");
    });
  }

  return (
    <div
      className="container"
      style={{
        width: "65%",
        float: "right",
        marginTop: "50px",
        marginRight: "300px",
        position: "sticky",
      }}
    >
      <h1 className="display-6" style={{ marginBottom: "20px" }}>
        Past Review Details
      </h1>

      <h1
        className="display-6"
        style={{
          marginBottom: "20px",
          backgroundColor: "yellowgreen",
          color: "black",
        }}
      >
        <i class="bi bi-caret-left-fill"></i>
        <i class="bi bi-caret-left"></i>
        <i class="bi bi-caret-left-fill"></i>
        <i class="bi bi-caret-left"></i>
        <i class="bi bi-caret-left-fill"></i>
        {details.name}
        <i class="bi bi-caret-right-fill"></i>
        <i class="bi bi-caret-right"></i>
        <i class="bi bi-caret-right-fill"></i>
        <i class="bi bi-caret-right"></i>
        <i class="bi bi-caret-right-fill"></i>
      </h1>
      <h5 className="display-10" style={{ marginBottom: "20px" }}>
        <small class="text-muted">Supplier ID : </small> {details.supplierID}
      </h5>
      <h1 className="mb-0" style={{ marginBottom: "20px" }}>
        Average Ratings :<b> {avgg}</b>
      </h1>
      <table className="table" style={{ width: "100%" }}>
        <thead>
          <tr style={{ backgroundColor: "#0d6efd", color: "white" }}>
            <th scope="col">Review ID</th>

            <th scope="col">Supplier ID</th>
            <th scope="col">Ratings</th>
            <th scope="col">Review</th>
            <th scope="col">Date</th>
            <th scope="col">&nbsp;&nbsp;&nbsp;&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {reviewList
            ? reviewList
                .filter((val) => {
                  if (search === "") return val;
                  else if (val.supplierID.includes(details.supplierID)) {
                    return val;
                  }
                })

                .map((val) => (
                  <tr>
                    <td scope="row">{val.reviewID}</td>
                    <td>{val.supplierID}</td>
                    <td>{val.ratings}</td>
                    <td>{val.review}</td>
                    <td>{val.date}</td>

                    <td>
                      <button
                        type="button"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Delete Review"
                        style={{
                          border: "none",
                          backgroundColor: "white",
                        }}
                        onClick={() => {
                          DeleteReview(val._id);
                        }}
                      >
                        <i className="bi bi-trash-fill"></i>
                      </button>
                    </td>
                  </tr>
                ))
            : reviewList}
        </tbody>
      </table>
    </div>
  );
}
