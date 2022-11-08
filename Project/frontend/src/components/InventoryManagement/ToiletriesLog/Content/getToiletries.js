import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import GetToiletryDetails from "./getAllToiletries";

export default function FetchToiletries() {
  var toiletryDetails = GetToiletryDetails();
  const [search, setSearch] = useState("");

  let i = 0;

  const OnSubmit = (event, id) => {
    for (i = 0; i < toiletryDetails.length; i++) {
      if (toiletryDetails[i]._id == id) {
        break;
      }
    }
  };
  function Delete(id) {
    axios
      .delete("http://localhost:8070/toiletries/delete/" + id)
      .then((res) => {
        alert("Deleted successfully");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <div
        className="container"
        style={{ float: "right", marginRight: "-700px" }}
      >
        <form
          class="form-inline my-2 my-lg-0"
          onSubmit={(e) => {
            setSearch(e.target.search.value);
            e.preventDefault();
            e.window.location.reload(false);
          }}
        >
          <input
            class="form-control mr-sm-2"
            type="search"
            id="search"
            placeholder="Search amenities"
            aria-label="Search"
          />

          <button class="btn btn-primary my-2 my-sm-0" type="submit">
            <i class="bi bi-search"></i>
          </button>
        </form>
      </div>
      <div
        className="container"
        style={{
          width: "70%",
          float: "center",
          marginTop: "100px",
        }}
      >
        <h1
          className="display-6"
          style={{ marginBottom: "80px", zIndex: "200" }}
        >
          All Amenities
        </h1>
        <table className="table">
          <thead>
            <tr style={{ backgroundColor: "#0d6efd", color: "white" }}>
              <th scope="col">Inventory ID</th>
              <th scope="col">Name</th>

              <th scope="col">Quantity</th>
              <th scope="col">Purchase Date</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {toiletryDetails
              ? toiletryDetails
                  .filter((val) => {
                    if (search === "") return val;
                    else if (
                      val.invenID.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return val;
                    }
                  })

                  .map((val) => (
                    <tr key={val._id}>
                      <td>
                        <a
                          href={`/inventoryManagement/toiletriesLog/getToiletry/${val._id}`}
                          style={{ textDecoration: "none" }}
                        >
                          {val.invenID}
                        </a>
                      </td>

                      <td>{val.category}</td>

                      <td>{val.quantity}</td>
                      <td>{val.date}</td>
                      <td>{val.description}</td>
                      <td>
                        <a
                          className="btn btn-warning"
                          href={`/inventoryManagement/toiletriesLog/editToiletry/${val._id}`}
                        >
                          <i className="fas fa-edit"></i>&nbsp;Edit
                        </a>
                        &nbsp;
                        <a
                          className="btn btn-danger"
                          onClick={(e) => Delete(val._id)}
                        >
                          <i className="far fa-trash-alt"></i>&nbsp;Delete
                        </a>
                        &nbsp;
                        {(() => {
                          if (val.quantity <= 50 && val.category == "Combs") {
                            return (
                              <a
                                className="btn btn-alert"
                                href={`/inventoryManagement/toiletriesLog/createRequest/${val._id}`}
                                style={{
                                  border: "none",
                                  backgroundColor: "#ED3B15",
                                  color: "black ",
                                }}
                              >
                                <i
                                  class="fa fa-exclamation-triangle"
                                  aria-hidden="true"
                                ></i>
                                {/* fa-solid fa-triangle-exclamation */}
                                <i className="fa-regular fa-salad"></i>
                                &nbsp;Request for Supplies
                              </a>
                            );
                          }
                          if (
                            val.quantity <= 50 &&
                            val.category == "Shaving Cream"
                          ) {
                            return (
                              <a
                                className="btn btn-alert"
                                href={`/inventoryManagement/toiletriesLog/createRequest/${val._id}`}
                                style={{
                                  border: "none",
                                  backgroundColor: "#ED3B15",
                                  color: "black ",
                                }}
                              >
                                <i
                                  class="fa fa-exclamation-triangle"
                                  aria-hidden="true"
                                ></i>
                                {/* fa-solid fa-triangle-exclamation */}
                                {/* <i className="fa-regular fa-salad"></i> */}
                                &nbsp;Request for Supplies
                              </a>
                            );
                          }
                          if (val.quantity <= 30 && val.category == "Razor") {
                            return (
                              <a
                                className="btn btn-alert"
                                href={`/inventoryManagement/toiletriesLog/createRequest/${val._id}`}
                                style={{
                                  border: "none",
                                  backgroundColor: "#ED3B15",
                                  color: "black ",
                                }}
                              >
                                <i
                                  class="fa fa-exclamation-triangle"
                                  aria-hidden="true"
                                ></i>
                                {/* fa-solid fa-triangle-exclamation */}
                                {/* <i className="fa-regular fa-salad"></i> */}
                                &nbsp;Request for Supplies
                              </a>
                            );
                          }
                          if (
                            val.quantity <= 20 &&
                            val.category == "Tissue Box"
                          ) {
                            return (
                              <a
                                className="btn btn-alert"
                                href={`/inventoryManagement/toiletriesLog/createRequest/${val._id}`}
                                style={{
                                  border: "none",
                                  backgroundColor: "#ED3B15",
                                  color: "black ",
                                }}
                              >
                                <i
                                  class="fa fa-exclamation-triangle"
                                  aria-hidden="true"
                                ></i>
                                {/* fa-solid fa-triangle-exclamation */}
                                {/* <i className="fa-regular fa-salad"></i> */}
                                &nbsp;Request for Supplies
                              </a>
                            );
                          }
                          if (
                            val.quantity <= 25 &&
                            val.category == "Blankets"
                          ) {
                            return (
                              <a
                                className="btn btn-alert"
                                href={`/inventoryManagement/toiletriesLog/createRequest/${val._id}`}
                                style={{
                                  border: "none",
                                  backgroundColor: "#ED3B15",
                                  color: "black ",
                                }}
                              >
                                <i
                                  class="fa fa-exclamation-triangle"
                                  aria-hidden="true"
                                ></i>
                                {/* fa-solid fa-triangle-exclamation */}
                                {/* <i className="fa-regular fa-salad"></i> */}
                                &nbsp;Request for Supplies
                              </a>
                            );
                          }
                          if (val.quantity <= 40 && val.category == "Soap") {
                            return (
                              <a
                                className="btn btn-alert"
                                href={`/inventoryManagement/toiletriesLog/createRequest/${val._id}`}
                                style={{
                                  border: "none",
                                  backgroundColor: "#ED3B15",
                                  color: "black ",
                                }}
                              >
                                <i
                                  class="fa fa-exclamation-triangle"
                                  aria-hidden="true"
                                ></i>
                                {/* fa-solid fa-triangle-exclamation */}
                                <i className="fa-regular fa-salad"></i>
                                &nbsp;Request for Supplies
                              </a>
                            );
                          }
                          if (
                            val.quantity <= 35 &&
                            val.category == "Dental Kit"
                          ) {
                            return (
                              <a
                                className="btn btn-alert"
                                href={`/inventoryManagement/toiletriesLog/createRequest/${val._id}`}
                                style={{
                                  border: "none",
                                  backgroundColor: "#ED3B15",
                                  color: "black ",
                                }}
                              >
                                <i
                                  class="fa fa-exclamation-triangle"
                                  aria-hidden="true"
                                ></i>
                                {/* fa-solid fa-triangle-exclamation */}
                                <i className="fa-regular fa-salad"></i>
                                &nbsp;Request for Supplies
                              </a>
                            );
                          }
                          if (
                            val.quantity <= 25 &&
                            val.category == "Hair Dryer"
                          ) {
                            return (
                              <a
                                className="btn btn-alert"
                                href={`/inventoryManagement/toiletriesLog/createRequest/${val._id}`}
                                style={{
                                  border: "none",
                                  backgroundColor: "#ED3B15",
                                  color: "black ",
                                }}
                              >
                                <i
                                  class="fa fa-exclamation-triangle"
                                  aria-hidden="true"
                                ></i>
                                {/* fa-solid fa-triangle-exclamation */}
                                <i className="fa-regular fa-salad"></i>
                                &nbsp;Request for Supplies
                              </a>
                            );
                          } else {
                            return (
                              <a
                                className="btn btn-alert"
                                //   href=  {`/inventoryManagement/toiletriesLog/createRequest/${val._id}`}
                                style={{
                                  border: "none",
                                  backgroundColor: "green",
                                  color: "white",
                                  width: "180px",
                                }}
                              >
                                {/* fa-solid fa-triangle-exclamation */}
                                <i className="fa-regular fa-salad"></i>
                                &nbsp;Available
                              </a>
                            );
                          }
                        })()}
                        <a
                        // className="btn btn-alert"
                        // href={`/inventoryManagement/toiletriesLog/createRequest/${val._id}`}
                        // style={{
                        //   border: "none",
                        //   backgroundColor: "#34495E",
                        //   color: "white ",
                        //   //fontWeight: "bold",
                        // }}
                        >
                          {/* fa-solid fa-triangle-exclamation */}
                          {/* <i className="fa-regular fa-salad"></i>
                          &nbsp;Request for Supplies */}
                        </a>
                      </td>
                    </tr>
                  ))
              : toiletryDetails}
          </tbody>
        </table>
        <br></br>
        <button className="btn btn-success">
          <a
            href="/inventoryManagement/toiletriesLog/createToiletry"
            style={{ textDecoration: "none", color: "white" }}
          >
            Add New Amenity
          </a>
        </button>
      </div>
    </>
  );
}
