import React, { useEffect, useState } from "react";
import axios from "axios";
import getFoodAndBeverage from "./getFoodAndBeverage";
import { Container } from "../js/Container";
import "../../../../index.css";
import GetOneReq from "./getOneRequest";
import PopOver from "../Component/popOver";
import getAllRequest from "./getRequest";

export default function ShowFoodAndBeverage() {
  var color = "black"; //for the status field in the table
  const fAndBList1 = getFoodAndBeverage();
  let fAndBList = [];
  const reqList = getAllRequest();

  let email = JSON.parse(window.localStorage.getItem("currentUserID"));
  console.log(email);

  for (let m = 0; m < fAndBList1.length; m++) {
    if (fAndBList1[m].custID == email) {
      fAndBList.push(fAndBList1[m]);
    }
  }

  //For the search button
  const [search, setSearch] = useState("");

  //To store all details in FoodAndBeverage and update and display data
  const [FoodAndBeverage, setFoodAndBeverage] = useState({});

  const [Request, setRequest] = useState({});
  let i = 0;
  let j = 0;
  var reqID;

  const OnSubmit = (event, id) => {
    for (i = 0; i < fAndBList.length; i++) {
      if (fAndBList[i]._id == id) {
        break;
      }
    }

    reqID = fAndBList[i].reqId;

    for (j = 0; j < reqList.length; j++) {
      if (reqList[j].reqId == reqID) {
        break;
      }
    }

    //Setting up FoodAndBeverage so that we can update it using the update Route
    setFoodAndBeverage(fAndBList[i]);
    FoodAndBeverage.notes = event.target.notes.value;
    FoodAndBeverage.requestForDate = event.target.date.value;
    FoodAndBeverage.requestForTime = event.target.time.value;

    Request.notes = event.target.notes.value;

    axios
      .post(
        "http://localhost:8070/customerService/foodAndBeverageRequest/update/" +
          id,
        FoodAndBeverage
      )
      .then(() => {
        alert("Request Updated");
      })
      .catch((err) => {
        console.log(err.message);
      });

    axios
      .post(
        "http://localhost:8070/customerService/update/" + reqList[j]._id,
        Request
      )
      .then(() => {
        console.log("Update Successful");
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

  const [fAndBCancel, setfAndBCancel] = useState({});

  //To cancel an ongoing request
  function CancelRequest(id) {
    for (i = 0; i < fAndBList.length; i++) {
      if (fAndBList[i]._id == id) {
        break;
      }
    }

    reqID = fAndBList[i].reqId;

    for (j = 0; j < reqList.length; j++) {
      if (reqList[j].reqId == reqID) {
        break;
      }
    }

    <GetOneReq id={id} />;
    setfAndBCancel(GetOneReq);

    fAndBCancel.status = "Cancelled";
    Request.status = "Cancelled";
    axios
      .post(
        "http://localhost:8070/customerService/foodAndBeverageRequest/update/" +
          id,
        fAndBCancel
      )
      .then((info) => {
        console.log(info);
        alert("Request Cancelled");
      })
      .catch((err) => {
        console.log(err.message);
      });

    axios
      .post(
        "http://localhost:8070/customerService/update/" + reqList[j]._id,
        Request
      )
      .then((info) => {
        console.log(info);
        console.log("Booking Cancelled");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  function changeColor(data) {
    if (data === "Cancelled") color = "red";
    else if (data === "Ongoing") color = "#0d6efd";
  }
  return (
    <div
      className="container"
      style={{
        width: "40%",
        float: "right",
        marginTop: "-422px",

        position: "sticky",
      }}
    >
      <div
        className="container"
        style={{ marginBottom: "12px", float: "left" }}
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
            placeholder="Search Notes"
            aria-label="Search"
          />

          <button class="btn btn-primary my-2 my-sm-0" type="submit">
            <i class="bi bi-search"></i>
          </button>
        </form>
      </div>

      <table className="table" style={{ width: "100%" }}>
        <thead>
          <tr style={{ backgroundColor: "#0d6efd", color: "white" }}>
            <th scope="col">ReqID</th>
            <th scope="col">Amount</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Notes</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {fAndBList
            ? fAndBList
                .filter((val) => {
                  if (search === "") return val;
                  else if (
                    val.notes.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((val) => (
                  <tr key={val._id} onChange={changeColor(val.status)}>
                    <td scope="row">{val.reqId}</td>
                    <td>{val.amount}</td>
                    <td>{val.requestForDate}</td>
                    <td>{val.requestForTime}</td>
                    <td>
                      <PopOver msg={val.notes} />
                    </td>

                    <td style={{ color: color }}>{val.status}</td>
                    <td>
                      <div
                        className="container"
                        style={{
                          width: "100px",
                        }}
                      >
                        {/* To show the edit button only if val.status==="Ongoing" */}
                        {val.status === "Ongoing" && (
                          <Container
                            onSubmit={(e) => {
                              OnSubmit(e, val._id);
                            }}
                          />
                        )}
                        <button
                          type="button"
                          style={{
                            border: "none",
                            backgroundColor: "white",
                          }}
                          onClick={() => {
                            DeleteItem(val._id);
                          }}
                        >
                          <i className="bi bi-trash-fill"></i>
                        </button>

                        {/* To show cancel Request button only when status is ongoing */}
                        {(val.status === "Ongoing" ||
                          val.status === "Completed") && (
                          <button
                            type="button"
                            className="close"
                            aria-label="Close"
                            onClick={(e) => {
                              CancelRequest(val._id);
                              window.location.reload(false);
                            }}
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
            : fAndBList}
        </tbody>
      </table>
    </div>
  );
}
