import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CreateFoodAndBeverageCustomer() {
  //For FoodAndBeverageRequest
  let rowNo = 1;
  const [FoodAndBeverage, setFoodAndBeverage] = useState({
    reqId: "1",
    amount: 0,
    foodItemId: "01",
    requestForDate: "",
    requestForTime: "",
    notes: "",
    status: "Ongoing",
  });
  //For Request
  // const [CustomerRequest, setCustomerRequest] = useState({
  //   reqId: "",
  //   custId: "",
  //   roomId: "",
  //   serviceType: "FoodAndBeverage",
  //   requestedtime: "",
  //   requestedOn: Date(),
  // });

  function create(e) {
    e.preventDefault();

    axios
      .post(
        "http://localhost:8070/customerService/foodAndBeverageRequest",
        FoodAndBeverage
      )
      .then(() => {
        alert("Request Added Successfully");
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err.message);
        console.log(err);
      }); //here we give to what link what data should be sent

    // axios
    //   .post("http://localhost:8070/customerService/", CustomerRequest)
    //   .then(() => {
    //     window.location.reload(false);
    //   })
    //   .catch((err) => {
    //     alert(err.message);
    //   });

    // To clear out the form fields
    document.getElementById("notes").value = "";
    document.getElementById("schedule").value = "";
    document.getElementById("time").value = "";
  }

  return (
    <div
      className="container"
      style={{
        width: "40%",

        "z-index": "10",
        position: "sticky",
      }}
    >
      {/*here we pass data like we usually pass data through useState"*/}
      <form
        style={{ marginTop: "100px", marginLeft: "-175px", width: "100%" }}
        onSubmit={create}
      >
        <h1 className="display-6" style={{ marginBottom: "20px" }}>
          Food & Beverage Request
        </h1>

        <div className="mb-3">
          <label htmlFor="notes" className="form-label">
            Notes
          </label>
          <textarea
            className="form-control"
            id="notes"
            name="notes"
            rows="4"
            cols="50"
            placeholder="Do you wish to make a note"
            onChange={(event) => {
              setFoodAndBeverage({
                ...FoodAndBeverage,
                notes: event.target.value,
              });
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="requestForDate" className="form-label">
            Scheduled For
          </label>
          <input
            type="date"
            id="schedule"
            name="schedule"
            className="form-control"
            required
            onChange={(event) => {
              setFoodAndBeverage({
                ...FoodAndBeverage,
                requestForDate: event.target.value,
              });
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="requestForTime" className="form-label">
            Pick a time to deliver
          </label>
          <input
            type="time"
            id="time"
            name="time"
            className="form-control"
            required
            onChange={(event) => {
              setFoodAndBeverage({
                ...FoodAndBeverage,
                requestForTime: event.target.value,
              });
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="serviceType" className="form-label">
            Service Type
          </label>
          <select
            className="form-select"
            id="serviceType"
            aria-label="Default select example"
            readOnly="readonly"
            required
          >
            <option value="FoodAndBeverage">Food And Beverage</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
