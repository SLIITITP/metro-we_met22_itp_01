import React, { useState } from "react";

export const Form = ({ onSubmit }) => {
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
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="type" className="form-label">
          Complaint Type
        </label>
        <select
          className="form-select"
          id="type"
          aria-label="Default select example"
          required
          onChange={(e) => setOptions(e.target.value)}
        >
          <option value="">Choose Complaint Type</option>
          <option value="RestaurantRelated">Restaurant Related</option>
          <option value="TransportRelated">Transport Related</option>
          <option value="GymRelated">Gym Related</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="for" className="form-label">
          Complaint for
        </label>
        <select
          className="form-select"
          id="for"
          aria-label="Default select example"
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

      <div className="form-group">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="description"
          name="description"
          rows="4"
          cols="50"
          placeholder="Let us know more so that we can help you"
          required
        />
      </div>

      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;
