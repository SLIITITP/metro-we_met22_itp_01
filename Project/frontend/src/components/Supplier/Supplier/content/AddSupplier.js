import React, { useState } from "react";
import axios from "axios";
import GetSupplier from "./GetSupplier";

export default function AddSupplier() {
  const [supplier, setSupplier] = useState({
    supplierID: " ",
    type: " ",
    availability: " ",
    email: " ",
    address: " ",
    name: " ",
    contactNo: " ",
  });

  const [supplierID, setsupplierID] = useState("1");
  const [type, settype] = useState("");
  const [availability, setAvailability] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [contactNo, setContactNo] = useState("");

  const suppList = GetSupplier();
  let j = suppList.length;
  let reqIdString;
  //console.log(suppList);
  j--;

  if (j >= 0) {
    let reqId = parseInt(suppList[j].supplierID);
    reqId++;
    reqIdString = reqId.toString();
  } else {
    reqIdString = "1";
  }
  function sendData(e) {
    //alert("A new Supplier's details added to the system")
    e.preventDefault();
    var newSupplier = {
      supplierID,
      type,
      availability,
      email,
      address,
      name,
      contactNo,
    };

    newSupplier.supplierID = reqIdString;
    let port = window.location.port;

    axios
      .post("http://localhost:8070/supplier/add", newSupplier)
      .then(() => {
        window.location.replace(`http://localhost:${port}/Manager/Supplier`);
        alert("New Supplier Added Successfully");
        //window.location.reload(false);
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
                Supplier Profile
              </h1>
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </div>
              <div class="form-group">
                <label for="type ">Type</label>
                <select
                  className="form-select"
                  id="type"
                  aria-label="Default select example"
                  required
                  onChange={(event) => {
                    settype(event.target.value);
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
              </div>

              <div class="form-group">
                <label for="availability ">Availability</label>
                <select
                  className="form-select"
                  id="availability"
                  aria-label="Default select example"
                  required
                  onChange={(event) => {
                    setAvailability(event.target.value);
                  }}
                >
                  <option value="">Select Availability</option>
                  <option value="Available">Available</option>
                  <option value="Unavailable">Unavailable</option>
                </select>
              </div>

              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
              <div class="form-group">
                <label for="address">Address</label>
                <input
                  type="text"
                  class="form-control"
                  id="address"
                  onChange={(event) => {
                    setAddress(event.target.value);
                  }}
                />
              </div>
              <div class="form-group">
                <label for="contactNo">Contact No</label>
                <input
                  type="text"
                  class="form-control"
                  id="contactNo"
                  pattern="[0][7||1][0-9]{8}"
                  onChange={(event) => {
                    setContactNo(event.target.value);
                  }}
                />
              </div>

              <div class="container">
                <div class="row">
                  <div class="col text-center">
                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
