import React, { useEffect, useState } from "react";
import axios from "axios";
import getFoodAndBeverage from "./getFoodAndBeverage";
import { Container } from "../js/Container";
import "../../../index.css";

export default function ShowFoodAndBeverage() {
  const fAndBList = getFoodAndBeverage();
  const [FoodAndBeverage, setFoodAndBeverage] = useState({
    reqId: "1",
    amount: 0,
    foodItemId: "01",
    requestForDate: "",
    requestForTime: "",
    notes: "",
    status: "Ongoing",
  });

  let i = 0;
  const OnSubmit = (event, id) => {
    for (i; i < fAndBList.length; i++) {
      if (fAndBList[i]._id == id) {
        break;
      }
    }

    FoodAndBeverage.notes = event.target.notes.value;
    FoodAndBeverage.requestForDate = event.target.date.value;
    FoodAndBeverage.requestForTime = event.target.time.value;

    axios
      .post(
        "http://localhost:8070/customerService/foodAndBeverageRequest/update/" +
          id,
        FoodAndBeverage
      )
      .then(() => {
        alert("Update Successful");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  function DeleteItem(id) {
    axios
      .delete(
        "http://localhost:8070/customerService/foodAndBeverageRequest/" + id
      )
      .then(() => {
        window.location.reload(false);
        alert("Record Deleted Successfully");
      });
  }

  return (
    <div
      className="container"
      style={{
        width: "40%",
        float: "right",
        marginTop: "-422px",
        marginRight: "20px",
        position: "sticky",
      }}
    >
      <table className="table" style={{ width: "100%" }}>
        <thead>
          <tr style={{ backgroundColor: "#0d6efd", color: "white" }}>
            <th scope="col">ItemID</th>
            <th scope="col">Amount</th>
            <th scope="col" style={{ width: "70%" }}>
              Date
            </th>
            <th scope="col">Time</th>
            <th scope="col" style={{ width: "100%" }}>
              Notes
            </th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {fAndBList.map((item, index) => (
            <tr key={index}>
              <td scope="row">{item.foodItemId}</td>
              <td>{item.amount}</td>
              <td>{item.requestForDate}</td>
              <td>{item.requestForTime}</td>
              <td>{item.notes}</td>

              <td>{item.status}</td>
              <td>
                <div
                  className="container"
                  style={{
                    width: "80px",
                  }}
                >
                  <Container
                    onSubmit={(e) => {
                      OnSubmit(e, item._id);
                    }}
                  />

                  <button
                    type="button"
                    style={{
                      border: "none",
                      backgroundColor: "white",
                    }}
                    onClick={() => {
                      DeleteItem(item._id);
                    }}
                  >
                    <i className="bi bi-trash-fill"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
