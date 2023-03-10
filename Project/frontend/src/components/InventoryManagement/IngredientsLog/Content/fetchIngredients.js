import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import GetIngredientDetails from "./getAllIngredients";

export default function FetchIngredients() {
  var ingDetails = GetIngredientDetails();
  // const ingList = GetIngredientDetails();
  // let j = ingList.length;
  // let ID;
  // console.log(ingList);
  // j--;
  // if (j >= 0) {
  //   let ingID = parseInt(ingList[j].invenID);
  //   ingID++;
  //   ingID = ingID.toString();
  // } else {
  //   ID = "1";
  // }
  const [search, setSearch] = useState("");

  let i = 0;

  const OnSubmit = (event, id) => {
    for (i = 0; i < ingDetails.length; i++) {
      if (ingDetails[i]._id == id) {
        break;
      }
    }
  };
  function Delete(id) {
    axios
      .delete("http://localhost:8070/kitchenStock/delete/" + id)
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
            placeholder="Search Ingredients"
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
          All Ingredients
        </h1>
        <table className="table">
          <thead>
            <tr style={{ backgroundColor: "#0d6efd", color: "white" }}>
              <th scope="col">Inventory ID</th>
              <th scope="col">Category</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Purchase Date</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {ingDetails
              ? ingDetails
                  .filter((val) => {
                    if (search === "") return val;
                    else if (
                      val.name.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return val;
                    }
                  })

                  .map((val) => (
                    <tr key={val._id}>
                      <td>
                        <a
                          href={`/Manager/inventoryManagement/ingredientsLog/getIngredient/${val._id}`}
                          style={{ textDecoration: "none" }}
                        >
                          {val.invenID}
                        </a>
                      </td>

                      <td>{val.category}</td>
                      <td>{val.name}</td>
                      <td>{val.quantity}</td>
                      <td>{val.date}</td>
                      <td>{val.description}</td>
                      <td>
                        <a
                          className="btn btn-warning"
                          href={`/Manager/inventoryManagement/ingredientsLog/editIngredient/${val._id}`}
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
                          if (val.quantity <= 50 && val.category == "Fruits") {
                            return (
                              <a
                                className="btn btn-alert"
                                href={`/Manager/inventoryManagement/ingredientsLog/createRequest/${val._id}`}
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
                            val.category == "Vegetables"
                          ) {
                            return (
                              <a
                                className="btn btn-alert"
                                href={`/Manager/inventoryManagement/ingredientsLog/createRequest/${val._id}`}
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
                            val.quantity <= 30 &&
                            val.category == "Dry Rations"
                          ) {
                            return (
                              <a
                                className="btn btn-alert"
                                href={`/Manager/inventoryManagement/ingredientsLog/createRequest/${val._id}`}
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
                          if (val.quantity <= 20 && val.category == "Spices") {
                            return (
                              <a
                                className="btn btn-alert"
                                href={`/Manager/inventoryManagement/ingredientsLog/createRequest/${val._id}`}
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
                            val.quantity <= 10 &&
                            val.category == "Dairy Products"
                          ) {
                            return (
                              <a
                                className="btn btn-alert"
                                href={`/Manager/inventoryManagement/ingredientsLog/createRequest/${val._id}`}
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
                            val.quantity <= 40 &&
                            val.category == "Cereals & Pulses"
                          ) {
                            return (
                              <a
                                className="btn btn-alert"
                                href={`/Manager/inventoryManagement/ingredientsLog/createRequest/${val._id}`}
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
                          if (val.quantity <= 35 && val.category == "Meat") {
                            return (
                              <a
                                className="btn btn-alert"
                                href={`/Manager/inventoryManagement/ingredientsLog/createRequest/${val._id}`}
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
                          if (val.quantity <= 25 && val.category == "SeaFood") {
                            return (
                              <a
                                className="btn btn-alert"
                                href={`/Manager/inventoryManagement/ingredientsLog/createRequest/${val._id}`}
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
                                // href={`/inventoryManagement/ingredientsLog/createRequest/${val._id}`}
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
              : ingDetails}
          </tbody>
        </table>
        <br></br>
        <button className="btn btn-success">
          <a
            href="/Manager/inventoryManagement/ingredientsLog/createIngredient"
            style={{ textDecoration: "none", color: "white" }}
          >
            Add New Ingredient
          </a>
        </button>
      </div>
    </>
  );
}
