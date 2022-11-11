import React, { useEffect, useState } from "react";
import axios from "axios";
import GetOneOrder from "./GetOneOrder";
import "../../../../index.css";
import GetOrder from "./GetOrder";
import { Link } from "react-router-dom";
import { Container } from "../js/Container";

export default function ShowallOrder() {
  var color = "black";
  // const [orderList, setOrderList] = useState([]);
  const orderList = GetOrder();
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

  function PendingToReceived(id) {
    <GetOneOrder id={id} />;
    setChangeStatus(GetOneOrder);

    changeStatus.status = "Received";

    axios
      .put("http://localhost:8070/order/update/" + id, changeStatus)
      .then((info) => {
        console.log(info);
        alert("Status Changed");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function PendingToCancelled(id) {
    <GetOneOrder id={id} />;
    setChangeStatus(GetOneOrder);

    changeStatus.status = "Cancelled";

    axios
      .put("http://localhost:8070/order/update/" + id, changeStatus)
      .then((info) => {
        console.log(info);
        alert("Status Changed");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function changeColor(data) {
    if (data === "Received") color = "green";
    else if (data === "Cancelled") color = "red";
    else if (data === "Pending") color = "black";
  }

  return (
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
      <div
        className="container"
        style={{
          marginBottom: "12px",
          float: "Right",
          width: "40%",
          position: "sticky",
          marginRight: "-300px",
        }}
      >
        <form
          className="form-inline my-2 my-lg-0"
          onSubmit={(e) => {
            setSearch(e.target.search.value);
            e.preventDefault();
            // window.location.reload(false);
          }}
        >
          <select
            className="form-control mr-sm-2"
            id="search"
            aria-label="Default select example"
            style={{
              backgroundColor: "#ededed",
              color: "#595959",
              borderColor: "black",
            }}
          >
            <option value="">Select Status Type</option>
            <option value="Pending">Pending</option>
            <option value="Received">Received</option>
            <option value="Cancelled">Cancelled</option>
          </select>

          <button className="btn btn-primary my-2 my-sm-0" type="submit">
            <i className="bi bi-search"></i>
          </button>
        </form>
      </div>

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

                    <td>
                      <button
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Delete Order"
                        type="button"
                        style={{
                          border: "none",
                          backgroundColor: "white",
                        }}
                        onClick={() => {
                          DeleteOrder(val._id);
                        }}
                      >
                        <i className="bi bi-trash-fill"></i>
                      </button>
                    </td>

                    <td>
                      <a
                        data-toggle="tooltip"
                        data-placement="top"
                        title="View more details"
                        style={{
                          border: "none",
                          textDecoration: "none",
                        }}
                        href={`/Manager/order/requestDetails/${val._id}`}
                      >
                        <i
                          class="bi bi-info-circle-fill"
                          style={{
                            color: "#1569C7",
                          }}
                        ></i>
                      </a>
                    </td>
                    <td>
                      {val.status === "Pending" && (
                        <Container
                          onSubmit={(e) => {
                            OnSubmit(e, val._id);
                          }}
                        />
                      )}
                    </td>
                    <td>
                      <div
                        className="container"
                        style={{
                          width: "100px",
                        }}
                      >
                        {val.status === "Pending" && (
                          <button
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Order Cancelled"
                            type="button"
                            style={{
                              border: "none",
                              backgroundColor: "#ff726f ",
                            }}
                            onClick={(e) => {
                              PendingToCancelled(val._id);
                              window.location.reload(false);
                            }}
                          >
                            <i class="bi bi-x-square"></i>
                          </button>
                        )}

                        {val.status === "Pending" && (
                          <button
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Order Received"
                            type="button"
                            style={{
                              border: "none",
                              backgroundColor: "#90EE90 ",
                            }}
                            onClick={(e) => {
                              PendingToReceived(val._id);
                              window.location.reload(false);
                            }}
                          >
                            <i class="bi bi-check2-square"></i>
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
            : orderList}
        </tbody>
      </table>
    </div>
  );
}
