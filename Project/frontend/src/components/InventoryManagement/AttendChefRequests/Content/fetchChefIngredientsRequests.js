import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import GetChefIngredientRequestDetails from "./getAllChefIngredientRequests";
import GetOneChefIngredientRequest from "./getOneChefIngredientRequest";
import GetChefRequestDetails from "../../../KitchenManagement/ChefRequests/Content/getAllChefRequests";
import FetchIngredients from "../../IngredientsLog/Content/fetchIngredients";
export default function FetchChefIngredientRequests() {
  var color = "black";
  var reqDetails = GetChefIngredientRequestDetails();
  var ingredientDetails = GetChefRequestDetails();
  //var ingredientQuantity = FetchIngredients();
  var x = 0;
  var y = 0;
  var details = [];
  const [search, setSearch] = useState("");
  for (x = 0; x < reqDetails.length; x++) {
    for (y = 0; y < ingredientDetails.length; y++) {
      if (ingredientDetails[y].reqID == reqDetails[x].reqID) {
        details.push(reqDetails[x]);
        details.push(ingredientDetails[y].name);
      }
    }
  }
  var final = [];
  var j = 0;
  for (j = 0; j < details.length; j++) {
    if (
      details[j].status === "Pending" ||
      details[j].status === "Approved" ||
      details[j].status === "Rejected"
    ) {
      final.push(details[j]);
    }
  }

  const [cancelRequest, setCancelRequest] = useState({});
  // const [reduceAmount, setReduceAmount] = useState({});
  let i = 0;

  var requestID;
  const OnSubmit = (event, id) => {
    for (i = 0; i < reqDetails.length; i++) {
      if (reqDetails[i]._id == id) {
        break;
      }
    }
  };

  // to reject a pending request
  function rejectRequest(id) {
    for (i = 0; i < reqDetails.length; i++) {
      if (reqDetails[i]._id == id) {
        break;
      }
    }

    requestID = reqDetails[i].requestID;

    <GetOneChefIngredientRequest id={id} />;
    setCancelRequest(GetOneChefIngredientRequest);
    cancelRequest.status = "Rejected";
    axios
      .put(
        "http://localhost:8070/inventory/chefRequest/update/" + id,
        cancelRequest
      )
      .then((Info) => {
        //  alert("Request for ingredients cancelled!");
        console.log(Info);
        // window.location.replace(
        //   `http://localhost:${port}/inventoryManagement/requestLog`
        // );
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  //to approve a pending request
  function approveRequest(id) {
    for (i = 0; i < reqDetails.length; i++) {
      if (reqDetails[i]._id == id) {
        break;
      }
    }

    requestID = reqDetails[i].requestID;

    <GetOneChefIngredientRequest id={id} />;
    setCancelRequest(GetOneChefIngredientRequest);
    // setReduceAmount(GetOneChefIngredientRequest);
    cancelRequest.status = "Approved";
    // reduceAmount.quantity =
    //   ingredientDetails[y].quantity - requestID[x].quantity;
    axios
      .put(
        "http://localhost:8070/inventory/chefRequest/update/" + id,
        cancelRequest
      )
      // .post("http://localhost:8070/kitchenIngredients/add" + id, cancelRequest)
      .then((Info) => {
        //  alert("Request for ingredients cancelled!");
        console.log(Info);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function changeColor(data) {
    if (data === "Cancelled") color = "red";
    else if (data === "Approved") color = "green";
    else if (data === "Rejected") color = "red";
    else if (data === "Pending") color = "#0d6efd";
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
        <h1
          className="display-6"
          style={{ marginBottom: "80px", zIndex: "200" }}
        >
          Manage All Ingredient Requests
        </h1>
        <table className="table">
          <thead>
            <tr style={{ backgroundColor: "#0d6efd", color: "white" }}>
              <th scope="col">Kitchen Ingredient ID</th>

              <th scope="col">Request ID</th>

              <th scope="col">Category</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Requested On</th>
              <th scope="col">Description</th>
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
                      // val.name.toLowerCase().includes(search.toLowerCase())
                      val.status.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return val;
                    }
                  })

                  .map((val) => (
                    <tr key={val._id} onChange={changeColor(val.status)}>
                      {/* <td>
                        <a
                          href={`/inventoryManagement/chefRequestLog/getRequest/${val._id}`}
                          style={{ textDecoration: "none" }}
                        >
                          {val.kitIngID}
                        </a>
                      </td> */}
                      <td>{val.kitIngID}</td>
                      <td>{val.reqID}</td>
                      <td>{val.reqType}</td>
                      <td>{val.name}</td>
                      <td>{val.quantity}</td>
                      <td>{val.date}</td>
                      <td>{val.description}</td>
                      <td style={{ color: color }}>{val.status}</td>
                      <td>
                        <a
                          data-toggle="tooltip"
                          data-placement="top"
                          title="View"
                          className="btn btn-sm btn-primary"
                          href={`/Manager/inventoryManagement/chefRequestLog/getRequest/${val._id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <i className="fa-regular fa-eye"></i>
                        </a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {/* To show the approve button only if val.status==="Pending" or  val.status==="Rejected"*/}
                        {(val.status === "Pending" ||
                          val.status == "Rejected") && (
                          <a
                            style={{ color: "white" }}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Approve"
                            className="btn btn-sm btn-success"
                            onClick={(e) => {
                              approveRequest(val._id);
                              window.location.reload(false);
                            }}
                          >
                            <i className="fa-solid fa-check"></i>
                          </a>
                        )}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {/* To show the reject button only if val.status==="Pending" or  val.status==="Approved"*/}
                        {(val.status === "Pending" ||
                          val.status === "Approved") && (
                          <a
                            style={{ color: "white" }}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Reject"
                            className="btn btn-sm btn-danger"
                            onClick={(e) => {
                              rejectRequest(val._id);
                              window.location.reload(false);
                            }}
                          >
                            <i className="fa-solid fa-xmark"></i>
                          </a>
                        )}
                      </td>
                    </tr>
                  ))
              : final}
          </tbody>
        </table>
        <br></br>
      </div>
    </>
  );
}
