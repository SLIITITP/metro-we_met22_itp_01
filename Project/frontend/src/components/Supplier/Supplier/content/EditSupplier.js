import React, { useState } from "react";
import axios from "axios";
import GetSupplier from "./GetSupplier";
import { useParams } from "react-router-dom";

export default function EditSupplier() {
  const id = useParams();
  var z = id.id;
  var supplier = GetSupplier();
  var i;
  var details = {};

  for (i = 0; i < supplier.length; i++) {
    if (supplier[i]._id === z) {
      details = supplier[i];
      break;
    }
  }

  const [type, settype] = useState("");

  const [availability, setAvailability] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  // const [name, setName] = useState("");
  const [contactNo, setContactNo] = useState("");

  let editSupplier = details;

  console.log(editSupplier);
  // let editSupplier = {
  //   supplierID: supplier[i].supplierID,
  //   name: supplier[i].name,
  //   type,
  //   availability,
  //   address,
  //   email,
  //   contactNo,
  // };

  function updateData(e) {
    // e.preventDefault();

    editSupplier.address = address;
    editSupplier.email = email;
    editSupplier.contactNo = contactNo;

    let port = window.location.port;

    axios
      .put("http://localhost:8070/supplier/update/" + z, editSupplier)
      .then(() => {
        alert("Updated Successfully!");
        window.location.replace(`http://localhost:${port}/Manager/supplier`);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <div
      className="container"
      style={{
        width: "40%",
        position: "sticky",
        marginLeft: "600px",
      }}
    >
      <form
        onSubmit={updateData}
        style={{ marginTop: "100px", marginLeft: "-125px", width: "100%" }}
      >
        <h1
          className="display-6"
          style={{ marginBottom: "40px", zIndex: "200" }}
        >
          Update Supplier
        </h1>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Supplier Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={details.name}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="type" className="form-label">
            Type
          </label>
          <input
            type="text"
            id="type"
            name="type"
            className="form-control"
            value={details.type}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="availability" className="form-label">
            Availability
          </label>
          <input
            className="form-control"
            id="availability"
            aria-label="Default select example"
            required
            value={details.availability}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            placeholder={details.email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className="form-control"
            placeholder={details.address}
            onChange={(event) => {
              setAddress(event.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="contactNo" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            id="contactNo"
            name="contactNo"
            pattern="[0][7||1][0-9]{8}"
            className="form-control"
            placeholder={details.contactNo}
            onChange={(event) => {
              setContactNo(event.target.value);
            }}
          />
        </div>
        <br></br>
        <div className="container">
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
