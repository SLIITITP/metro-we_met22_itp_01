import React, { useEffect, useState } from "react";
import axios from "axios";
import GetReview from "./GetReview";
import "../../../../index.css";
import GetOneReview from "./GetOneReview";

export default function ShowallReview() {
  var color = "black";
  const [reviewList, setReviewList] = useState([]);
  const [search, setSearch] = useState("");

  function DeleteReview(id) {
    axios.delete("http://localhost:8070/review/delete/" + id).then(() => {
      window.location.reload(false);
      alert("Review Record Deleted Successfully");
    });
  }

  useEffect(() => {
    axios.get("http://localhost:8070/review/").then((allReview) => {
      setReviewList(allReview.data);
    });
  }, []);

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
        Review Details
      </h1>
      <div
        className="container"
        style={{
          marginBottom: "12px",
          float: "Right",
          width: "40%",
          marginRight: "-300px",
          position: "sticky",
        }}
      >
        <form
          className="form-inline my-2 my-lg-0"
          onSubmit={(e) => {
            setSearch(e.target.search.value);
            e.preventDefault();
            // window.location.reload(false);
          }}
        >
          <input
            className="form-control mr-sm-2"
            type="search"
            id="search"
            placeholder="Search Supplier's Review "
            aria-label="Search"
            style={{
              backgroundColor: "#ededed",
              color: "black",
              borderColor: "black",
            }}
          />

          <button className="btn btn-primary my-2 my-sm-0" type="submit">
            <i className="bi bi-search"></i>
          </button>
        </form>
      </div>

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
                  else if (
                    val.review.toLowerCase().includes(search.toLowerCase())
                  ) {
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
