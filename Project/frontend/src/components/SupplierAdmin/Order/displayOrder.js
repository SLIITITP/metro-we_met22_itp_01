import React, { useEffect, useState } from "react";
import axios from "axios";
import { ButtonHTMLAttributes } from "react";
import { jsPDF } from "jspdf";
import GetOneOrder from "./GetOneOrder";
import { Button } from "react-bootstrap";

export default function DisplayOrder() {
  const createPDF = async () => {
    const date = new Date().toISOString().split("T")[0];
    const pdf = new jsPDF("landscape", "px", "a1", false);
    const data = await document.querySelector("#orderPDF");
    pdf.html(data).then(() => {
      pdf.save("Order" + date + ".pdf");
    });
  };

  var color = "black";
  const [orderList, setOrderList] = useState([]);

  const [search, setSearch] = useState("");

  const [order, setOrder] = useState({});
  let i = 0;
  let j = 0;
  var reqID;

  const OnSubmit = (event, id) => {
    for (i = 0; i < orderList.length; i++) {
      if (orderList[i]._id === id) {
        break;
      }
    }

    reqID = orderList[i].reqId;

    setOrder(orderList[i]);

    order.deliveryDate = event.target.deliveryDate.value;

    order.amount = event.target.amount.value;

    axios
      .put("http://localhost:8070/order/update/" + id, order)

      .then(() => {
        alert("Update Successful");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  function DeleteOrder(id) {
    axios.delete("http://localhost:8070/order/delete/" + id).then(() => {
      window.location.reload(false);
      alert("Order Record Deleted Successfully");
    });
  }

  const [changeStatus, setChangeStatus] = useState({});

  function changeColor(data) {
    if (data === "Received") color = "green";
    else if (data === "Cancelled") color = "red";
    else if (data === "Pending") color = "black";
  }

  return (
    <div id="orderPDF">
      <div
        className="container"
        style={{
          width: "100%",
          float: "right",
          marginTop: "50px",
          marginRight: "20px",
          position: "sticky",
        }}
      >
        <h1 className="display-6" style={{ marginBottom: "20px" }}>
          Order Details
        </h1>

        <table className="table" style={{ width: "100%" }}>
          <thead>
            <tr style={{ backgroundColor: "#0d6efd", color: "white" }}>
              <th scope="col">OrderID</th>
              <th scope="col">Request ID</th>
              <th scope="col">Supplier ID</th>
              <th scope="col">Delivery Date</th>
              <th scope="col">Amount</th>
              <th scope="col">Status</th>
              <th scope="col">Order Date</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {orderList
              ? orderList
                  .filter((val) => {
                    if (search === "") return val;
                    else if (
                      val.status.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return val;
                    }
                  })

                  .map((val) => (
                    <tr>
                      <td scope="row" onChange={changeColor(val.status)}>
                        {val.orderID}
                      </td>
                      <td>{val.reqID}</td>
                      <td>{val.supplierID}</td>
                      <td>{val.deliveryDate}</td>
                      <td>{val.amount}</td>
                      <td style={{ color: color }}> {val.status}</td>
                      <td>{val.orderDate}</td>
                    </tr>
                  ))
              : orderList}
          </tbody>
        </table>
      </div>
      <Button onclick={createPDF}>Export</Button>
    </div>
  );
}
