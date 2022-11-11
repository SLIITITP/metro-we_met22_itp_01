import React, { useState } from "react";
import axios from "axios";
import GetOrder from "./GetOrder";
import { useParams } from "react-router-dom";
import GetChefRequestDetails from "./getAllChefRequests";
import GetOneChefRequest from "./oneChefRequest";
import GetSupplier from "../../Supplier/content/GetSupplier";
import GetOneSupplier from "../../Supplier/content/GetOneSupplier";

export default function AddOrder() {
  const [search, setSearch] = useState("");
  const id = useParams();
  var z = id.id;
  var cRequest = GetChefRequestDetails();
  var allsupplier = GetSupplier();

  var i;
  var a;
  var details = {};
  var supdetails = {};

  for (i = 0; i < cRequest.length; i++) {
    if (cRequest[i]._id === z) {
      details = cRequest[i];
      break;
    }
  }

  let suppList = [];

  function display() {
    for (let k = 0; k < allsupplier.length; k++) {
      if (
        allsupplier[k].type === details.reqType &&
        allsupplier[k].availability === "Available"
      ) {
        suppList.push(allsupplier[k]);
      }
    }
  }
  display();
  var reqesType = details.reqType;

  const [order, setOrder] = useState({
    orderID: " ",
    reqID: " ",
    supplierID: " ",
    deliveryDate: " ",
    amount: "0",
    status: " ",
    orderDate: " ",
  });

  var cdate = new Date();
  var year = cdate.getFullYear();
  var month = cdate.getMonth() + 1;
  var dat = cdate.getDate();

  const tDate = year + "-" + month + "-" + dat;

  const [orderID, setOrderID] = useState("");
  const [reqID, setreqID] = useState("");
  const [supplierID, setsupplierID] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");
  const [orderDate, setOrderDate] = useState("");

  const orderList = GetOrder();
  let j = orderList.length;
  let OIDString;
  console.log(orderList);
  j--;

  if (j >= 0) {
    let OID = parseInt(orderList[j].orderID);
    OID++;
    OIDString = OID.toString();
  } else {
    OIDString = "1";
  }

  function sendData(e) {
    e.preventDefault();
    const newOrder = {
      orderID,
      reqID,
      supplierID,
      deliveryDate,
      amount,
      status,
      orderDate,
    };
    newOrder.orderID = OIDString;
    newOrder.status = "Pending";
    newOrder.orderDate = tDate;
    newOrder.reqID = details.reqID;
    let port = window.location.port;
    axios
      .post("http://localhost:8070/order/add", newOrder)
      .then(() => {
        // window.location.reload(false);
        window.location.replace(`http://localhost:${port}/Manager/Order`);

        alert("New Order details Added Successfully");
      })
      .catch((err) => {
        alert(err.message);
        console.log(err);
      });
  }

  return (
    <div
      className="container"
      style={{
        width: "50%",
        position: "sticky",
      }}
    >
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <div class="col-md-12"></div>
            <form
              role="form"
              style={{ marginTop: "100px", marginLeft: "80px", width: "100%" }}
              onSubmit={sendData}
            >
              <h1 className="display-6" style={{ marginBottom: "20px" }}>
                Add Order for {reqesType}
              </h1>

              <div class="form-group">
                <label for="supplierID">Supplier ID</label>
                <input
                  type="text"
                  class="form-control"
                  id="supplierID"
                  onChange={(event) => {
                    setsupplierID(event.target.value);
                  }}
                />
              </div>

              <div class="container">
                <div class="row">
                  <div class="col text-center">
                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>
                    <br></br>
                    <br></br>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <table className="table" style={{ width: "40%" }}>
        <thead>
          <tr style={{ backgroundColor: "#0d6efd", color: "white" }}>
            <th scope="col">supplier ID</th>

            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          {suppList
            ? suppList
                .filter((val) => {
                  if (search === "") return val;
                  else if (val.supplierID.includes(details.supplierID)) {
                    return val;
                  }
                })

                .map((val) => (
                  <tr>
                    <td>{val.supplierID}</td>
                    <td scope="row">{val.name}</td>
                  </tr>
                ))
            : suppList}
        </tbody>
      </table>
    </div>
  );
}
