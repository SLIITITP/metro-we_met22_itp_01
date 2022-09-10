import React, { useState } from "react";
import axios from "axios";
import getRequest from "./getRequest";

export default function CreateComplaintCustomer() {
  //For ComplaintRequest

  let complaintId = "1";

  const reqList = getRequest();

  // complaintId: { type: String, required: true, unique: true },
  // custId: { type: String, required: true, unique: true },
  // description: { type: String, required: true },
  // type: { type: String, required: true }, //service related or restaurant related?
  // date: { type: Date, default: Date() },
  // time: { type: String, default: "00:00" },
  // status: { type: String, required: true },

  const [ComplaintRequest, setComplaintRequest] = useState({
    complaintId: "1",
    custId: "1",
    status: "Ongoing",
  });

  //Taking only the date from Date()
  var today = new Date();
  var year = today.getFullYear();
  var mes = today.getMonth() + 1;
  var dia = today.getDate();

  //Taking time without seconds
  var time = today
    .toLocaleTimeString("en-US", {
      hour12: false,
    })
    .replace(/(.*)\D\d+/, "$1");

  const fecha = year + "-" + mes + "-" + dia;

  //To update the request table when a complaint is created
  const [Request, setRequest] = useState({
    reqId: "1",
    custId: "1",
    serviceType: "ComplaintRequest",
    requestedOn: "",
    requestedtime: "",
    roomId: "1",
  });

  Request.requestedOn = fecha;
  Request.requestedtime = time;
  ComplaintRequest.date = fecha;
  ComplaintRequest.time = time;

  //To find the last id
  let j = reqList.length;
  j--;
  if (j >= 0) {
    let reqId = parseInt(reqList[j].reqId);
    reqId++;
    complaintId = reqId.toString();
    // console.log(complaintId);
    ComplaintRequest.complaintId = complaintId;
    Request.reqId = complaintId;
  }

  //To create a record in the table
  function Create(e) {
    e.preventDefault();

    axios
      .post("http://localhost:8070/customerService/complaint", ComplaintRequest)
      .then(() => {
        alert("Request Added Successfully");
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err.message);
        console.log(err);
      });

    //To enter info into Customer Request Table
    axios
      .post("http://localhost:8070/customerService", Request)
      .then(() => {
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err.message);
        console.log(err);
      });
  }

  //To set the options based on service type

  const [opt1, setopt1] = useState();
  const [opt2, setopt2] = useState();
  const [opt3, setopt3] = useState();
  const [opt4, setopt4] = useState();
  const [other, setOther] = useState();

  function setOptions(serviceType) {
    if (serviceType === "RestaurantRelated") {
      document.getElementById("opt1").value = "Order Mixup";
      document.getElementById("opt2").value = "Incorrect Temperature";
      document.getElementById("opt3").value = "Rude Servers";
      document.getElementById("opt4").value = "Poor Hygiene";
      document.getElementById("other").value = "Other";
      setopt1("Order Mixup");
      setopt2("Incorrect Temperature");
      setopt3("Rude Servers");
      setopt4("Poor Hygiene");
      setOther("Other");
    } else if (serviceType === "TransportRelated") {
      document.getElementById("opt1").value = "Unrealiable Service"; // as in dangerous driving
      document.getElementById("opt2").value = "Overcrowded";
      document.getElementById("opt3").value = "Rude Transport Staffs";
      document.getElementById("opt4").value = "Poor Vehicle Maintenance";
      document.getElementById("other").value = "Other";
      setopt1("Unreliable Service"); // as in dangerous driving
      setopt2("Overcrowded");
      setopt3("Rude Transport Staffs");
      setopt4("Poor Vehicle Maintenance");
      setOther("Other");
    } else if (serviceType === "GymRelated") {
      document.getElementById("opt1").value =
        "Lack Of Professionalism (Trainer)"; // as in inapporopraite conduct
      document.getElementById("opt2").value = "Broken/Faulty Equipments";
      document.getElementById("opt3").value = "Overcrowded";
      document.getElementById("opt4").value =
        "Poor Maintenance/Unclean Environment";
      document.getElementById("other").value = "Other";

      setopt1("Lack Of Professionalism (Trainer)"); // as in inapporopraite conduct
      setopt2("Broken/Faulty Equipments");
      setopt3("Overcrowded");
      setopt4("Poor Maintenance/Unclean Environment");
      setOther("Other");
    } else if (serviceType === "Other") {
      document.getElementById("opt1").value = "Unprofessional Staff";
      document.getElementById("opt2").value = "Poor Service";
      document.getElementById("opt3").value = "Lack of Room Amenities";
      document.getElementById("opt4").value = "Damaged Items";
      setopt1("Unprofessional Staff"); // as in dangerous driving
      setopt2("Poor Service");
      setopt3("Lack of Room Amenities");
      setopt4("Damaged Items");
      setOther("Other");
    } else if (serviceType === "") {
      //For others
      setopt1("");
      setopt2("");
      setopt3("");
      setopt4("");
      setOther("");
    }
  }

  return (
    <div
      className="container"
      style={{
        width: "40%",
        position: "sticky",
      }}
    >
      <form
        style={{ marginTop: "100px", marginLeft: "-175px", width: "100%" }}
        onSubmit={Create}
      >
        <h1 className="display-6" style={{ marginBottom: "20px" }}>
          Complaints
        </h1>

        <div className="mb-3">
          <label htmlFor="type" className="form-label">
            Complaint Type
          </label>
          <select
            className="form-select"
            id="type"
            aria-label="Default select example"
            required
            onChange={(event) => {
              setComplaintRequest({
                ...ComplaintRequest,
                type: event.target.value,
              });
              setOptions(event.target.value);
            }}
          >
            <option value="">Choose Complaint Type</option>
            <option value="RestaurantRelated">Restaurant Related</option>
            <option value="TransportRelated">Transport Related</option>
            <option value="GymRelated">Gym Related</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="type" className="form-label">
            Complaint for
          </label>
          <select
            className="form-select"
            id="type"
            aria-label="Default select example"
            onChange={(event) => {
              setComplaintRequest({
                ...ComplaintRequest,
                for: event.target.value,
              });
            }}
            required
          >
            <option value="" selected>
              Complaint For
            </option>
            <option id="opt1">{opt1}</option>
            <option id="opt2">{opt2}</option>
            <option id="opt3">{opt3}</option>
            <option id="opt4">{opt4}</option>
            <option id="other">{other}</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="serviceType" className="form-label">
            Service Type
          </label>
          <select className="form-select" id="serviceType" required>
            <option value="ComplaintRequest">Complaint</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Complaint Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="6"
            cols="50"
            placeholder="Let us know more so that we can help you"
            onChange={(event) => {
              setComplaintRequest({
                ...ComplaintRequest,
                description: event.target.value,
              });
            }}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
