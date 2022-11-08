import React, { Component, useState, useEffect } from "react";
import axios from "axios";

import GetAmenityRequests from "./getAllRequests";

export default function FetchRoomNecessityRequests() {
  var reqDetails = GetAmenityRequests();

  const [search, setSearch] = useState("");

  let i = 0;

  const OnSubmit = (event, id) => {
    for (i = 0; i < reqDetails.length; i++) {
      if (reqDetails[i]._id == id) {
        break;
      }
    }
  };
  //   function Delete(id) {
  //     axios
  //       .delete("http://localhost:8070/kitchenStock/delete/" + id)
  //       .then((res) => {
  //         alert("Deleted successfully");
  //         window.location.reload(false);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }

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
            placeholder="Search Requests"
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
        {/* <h1>All Ingredients</h1>
      <br></br>
      <br></br> */}

        <h1
          className="display-6"
          style={{ marginBottom: "80px", zIndex: "200" }}
        >
          All Room Necessity Requests
        </h1>
        <table className="table">
          <thead>
            <tr style={{ backgroundColor: "#0d6efd", color: "white" }}>
              <th scope="col">Request ID</th>
              <th scope="col">Requested List</th>
              <th scope="col">Notes</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {reqDetails
              ? reqDetails
                  .filter((val) => {
                    if (search === "") return val;
                    else if (
                      val.reqId.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return val;
                    }
                  })

                  .map((val) => (
                    <tr key={val._id}>
                      <td>
                        <a
                          href={`http://localhost:8070/customerService/get/${val._id}`}
                          style={{ textDecoration: "none" }}
                        >
                          {val.reqId}
                        </a>
                      </td>

                      <td>{val.requestedItems}</td>
                      <td>{val.note}</td>

                      <td>
                        <a
                        //className="btn btn-warning"
                        // href={`ingredientsLog/editIngredient/${val._id}`}
                        >
                          {/* <i className="fas fa-edit"></i>&nbsp;Edit */}
                        </a>
                        &nbsp;
                        <a
                        //className="btn btn-danger"
                        //   onClick={(e) => Delete(val._id)}
                        >
                          {/* <i className="far fa-trash-alt"></i>&nbsp;Delete */}
                        </a>
                        &nbsp;
                        <a
                        // className="btn btn-alert"
                        // href={`/inventoryManagement/ingredientsLog/createRequest/${val._id}`}
                        // style={{
                        //   border: "none",
                        //   backgroundColor: "#34495E",
                        //   color: "white ",
                        // }}
                        >
                          {/* fa-solid fa-triangle-exclamation */}
                          {/* <i className="fa-regular fa-salad"></i>
                          &nbsp;Request for Supplies */}
                        </a>
                      </td>
                    </tr>
                  ))
              : reqDetails}
          </tbody>
        </table>
        <br></br>
        {/* <button className="btn btn-success">
          <a
            href="/inventoryManagement/ingredientsLog/createIngredient"
            style={{ textDecoration: "none", color: "white" }}
          >
            Add New Ingredient
          </a>
        </button> */}
      </div>
    </>
  );
}
