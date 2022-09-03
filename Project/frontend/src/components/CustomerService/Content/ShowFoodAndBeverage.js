import React, { useEffect, useState } from "react";
import axios from "axios";
import getFoodAndBeverage from "./getFoodAndBeverage";
//import { Link } from "react-router-dom"; //Install this

export default function ShowStudents() {
  const fAndBList = getFoodAndBeverage();

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
        marginTop: "-400px",
        marginRight: "20px",
        position: "sticky",
        // marginLeft: "1000px",
      }}
    >
      <table class="table">
        <thead>
          <tr style={{ "background-color": "#0d6efd", color: "white" }}>
            <th scope="col">ItemID</th>
            <th scope="col">Amount</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Notes</th>
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
                <button
                  type="button"
                  style={{ border: "none", "background-color": "white" }}
                  onClick={() => {
                    DeleteItem(item._id);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-trash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path
                      fill-rule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
