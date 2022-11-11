import React, { useEffect, useState } from "react";
import axios from "axios";
import GetSupplier from "./GetSupplier";
import "../../../../index.css";
import GetOneSupplier from "./GetOneSupplier";
import { Link } from "react-router-dom";

export default function ShowallSupplier() {
  var color = "white";
  // var backgroundColor = "red";
  //  const [supplierList, setSupplierList] = useState([]);
  const supplierList = GetSupplier();

  const [search, setSearch] = useState("");

  const [supplier, setSupplier] = useState({});
  let i = 0;

  const OnSubmit = (event, id) => {
    for (let i = 0; i < supplierList.length; i++) {
      if (supplierList[i]._id === id) {
        break;
      }
    }

    // var reqID = supplierList[i].reqId;

    setSupplier(supplierList[i]);

    supplier.name = event.target.name.value;
    supplier.type = event.target.type.value;
    supplier.availability = event.target.availability.value;
    supplier.email = event.target.email.value;
    supplier.address = event.target.address.value;
    supplier.contactNo = event.target.contactNo.value;

    axios
      .put("http://localhost:8070/supplier/update/" + id, supplier)

      .then(() => {
        alert("Update Successful");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  function DeleteSupplier(id) {
    axios.delete("http://localhost:8070/supplier/delete/" + id).then(() => {
      window.location.reload(false);
      alert("Supplier Record Deleted Successfully");
    });
  }

  const [changeAvailable, setChangeAvailable] = useState({});

  function UpdateAvailbility(id) {
    <GetOneSupplier id={id} />;
    setChangeAvailable(GetOneSupplier);

    changeAvailable.availability = "Available";

    setSupplier();

    axios
      .put("http://localhost:8070/supplier/update/" + id, changeAvailable)
      .then((info) => {
        console.log(info);
        alert("Availbility Changed");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function AvailtoUnavail(id) {
    <GetOneSupplier id={id} />;
    setChangeAvailable(GetOneSupplier);

    changeAvailable.availability = "Unavailable";

    axios
      .put("http://localhost:8070/supplier/update/" + id, changeAvailable)
      .then((info) => {
        console.log(info);
        alert("Availbility Changed");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function changeColor(data) {
    if (data === "Unavailable") color = "#ff726f";
    if (data === "Available") color = "white";
  }

  return (
    <div
      className="container"
      style={{
        width: "100%",
        float: "right",
        marginTop: "50px",
        marginLeft: "200px",
        position: "sticky",
      }}
    >
      <div>
        <Link
          to="/Manager/Supplier/addsupplier"
          data-toggle="tooltip"
          data-placement="top"
          title="Add New Supplier"
          class="float-left"
          style={{
            backgroundColor: "#90EE90",
            borderBlockColor: "black",
            textDecoration: "none",
            fontSize: "25px",
            borderStyle: "double",
            color: "black",
            border: "2px solid black",
            padding: "10px",
            borderRadius: "30px",
          }}
        >
          &nbsp; &nbsp; Add Supplier &nbsp;&nbsp;&nbsp;
        </Link>
      </div>
      <div
        className="container"
        style={{
          marginBottom: "12px",
          float: "Right",
          width: "40%",
          marginRight: "-250px",
          position: "sticky",
        }}
      >
        <form
          className="form-inline my-2 my-lg-0"
          onSubmit={(e) => {
            setSearch(e.target.search.value);
            e.preventDefault();
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
            <option value="">Choose Supplier Type</option>
            <option value="Dry Rations">Dry Rations</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Fruits">Fruits</option>
            <option value="Dairy Products">Dairy Products</option>
            <option value="Spices">Spices</option>
            <option value="Cereals & Pulses">Cereals & Pulses</option>
            <option value="Meat">Meat</option>
            <option value="seaFood">seaFood</option>
            <option value="Other ">Other</option>
          </select>

          <button
            className="btn btn-primary"
            type="submit"
            style={{
              borderColor: "#1F51FF",
            }}
          >
            <i className="bi bi-search"></i>
          </button>
        </form>
      </div>
      <br></br>
      <br></br>
      <br></br>

      <h1 className="display-6" style={{ marginBottom: "20px" }}>
        All Supplier Details
      </h1>
      <br></br>
      <table className="table" style={{ width: "100%" }}>
        <thead>
          <tr style={{ backgroundColor: "#0d6efd", color: "white" }}>
            <th scope="col">SupplierID</th>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">Availability</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">ContactNo</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {supplierList
            ? supplierList
                .filter((val) => {
                  if (search === "") return val;
                  else if (
                    val.type.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return val;
                  }
                })

                .map((val) => (
                  <tr key={val._id} onChange={changeColor(val.availability)}>
                    <td scope="row">{val.supplierID}</td>

                    <td>{val.name}</td>
                    <td>{val.type}</td>
                    <td style={{ backgroundColor: color }}>
                      {val.availability}
                    </td>
                    <td>{val.email}</td>
                    <td>{val.address}</td>
                    <td>{val.contactNo}</td>

                    <td>
                      <button
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Delete Supplier"
                        type="button"
                        style={{
                          border: "none",
                          backgroundColor: "white",
                        }}
                        onClick={() => {
                          DeleteSupplier(val._id);
                        }}
                      >
                        <i className="bi bi-trash-fill"></i>
                      </button>
                    </td>
                    <td>
                      <a
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Edit Supplier"
                        style={{
                          border: "none",
                          backgroundColor: "white",
                        }}
                        href={`/Manager/supplier/editSupplier/${val._id}`}
                      >
                        <i className="bi bi-pencil"></i>
                      </a>
                    </td>

                    <td>
                      <a
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Review Supplier"
                        style={{
                          border: "none",
                        }}
                        href={`/Manager/Supplier/Review/${val._id}`}
                      >
                        <i
                          className="bi bi-star-fill"
                          style={{
                            color: "#FFD700",
                          }}
                        ></i>
                      </a>
                    </td>

                    <td>
                      <a
                        data-toggle="tooltip"
                        data-placement="top"
                        title="View Supplier's Review"
                        style={{
                          border: "none",
                        }}
                        href={`/Manager/supplier/avgstar/${val._id}`}
                      >
                        <i
                          className="bi bi-eye-fill"
                          style={{
                            color: "#1569C7",
                          }}
                        ></i>
                      </a>
                    </td>

                    <td>
                      <div
                        className="container"
                        style={{
                          width: "100px",
                        }}
                      >
                        {val.availability === "Unavailable" && (
                          <button
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Changed to Available"
                            type="button"
                            style={{
                              border: "none",
                              backgroundColor: "#90EE90 ",
                            }}
                            onClick={(e) => {
                              UpdateAvailbility(val._id);
                              window.location.reload(false);
                            }}
                          >
                            <i class="bi bi-calendar-check-fill"></i>
                          </button>
                        )}

                        {val.availability === "Available" && (
                          <button
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Changed to Unavailable"
                            type="button"
                            style={{
                              border: "none",
                              backgroundColor: "white",
                            }}
                            onClick={(e) => {
                              AvailtoUnavail(val._id);
                              window.location.reload(false);
                            }}
                          >
                            <i class="bi bi-calendar-x"></i>
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
            : supplierList}
        </tbody>
      </table>
    </div>
  );
}
