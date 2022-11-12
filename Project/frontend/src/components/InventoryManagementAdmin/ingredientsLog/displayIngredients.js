import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import GetIngredientDetails from "../../InventoryManagement/IngredientsLog/Content/getAllIngredients";
import {jsPDF} from "jspdf";
import { Button } from "react-bootstrap";
export default function DisplayIngredients() {
    const createPDF = async () => {
        const date = new Date().toISOString().split('T')[0];
        const pdf = new jsPDF("landscape", "px", "a1", false);
        const data = await document.querySelector("#ingredient");
        pdf.html(data).then(() => {
            pdf.save("Ingredeints Report" + date + ".pdf");
        });
    };




  
  
  
    var ingDetails = GetIngredientDetails();
 
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
<div id="ingredient">
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
              {/* <th scope="col">Action</th> */}
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
                       
                    
                      </td>
                    </tr>
                  ))
              : ingDetails}
          </tbody>
        </table>
        
        </div>
       
        <br></br>
        <Button  onClick = {createPDF}>
        EXPORT
        </Button>
      </div>
     
    </>
  );
}
