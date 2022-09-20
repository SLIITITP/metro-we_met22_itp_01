import React, { useState } from "react";

export const Form = ({ onSubmit }) => {
  const [AmenityRequest1, setAmenityRequest1] = useState({
    reqId: "1",
    status: "Ongoing",
    requestedItems: "",
  });

  var itemList1 = "";

  function EnterReq() {
    if (document.getElementById("item").value !== "") {
      if (itemList1 === "")
        itemList1 = document.getElementById("item1").value + ", \n";
      else itemList1 += document.getElementById("item1").value + ", \n";

      document.getElementById("requestedItem1").value = itemList1;

      var a = AmenityRequest1;
      a.requestedItems = itemList1;
      setAmenityRequest1(a);
    }
  }

  function ClearList() {
    document.getElementById("requestedItem1").value = "";
    itemList1 = "";
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="item1" className="form-label">
          Item
        </label>
        <select
          className="form-select"
          id="item1"
          aria-label="Default select example"
          required
        >
          <option value="">Select Item into List</option>
          <option
            value=""
            style={{ fontWeight: "bold", fontStyle: "italic" }}
            disabled
          >
            --- Furniture Items ---
          </option>
          <option value="Extra Desk">Extra Desk</option>
          <option value="Extra Bed">Extra Bed</option>
          <option value="Extra Table">Extra Table</option>
          <option value="Clothes Stand">Clothes Stand</option>
          <option
            value=""
            style={{ fontWeight: "bold", fontStyle: "italic" }}
            disabled
          >
            --- Personal Care ---
          </option>
          <option value="Combs">Combs</option>
          <option value="Shaving Cream">Shaving Cream</option>
          <option value="Razor">Razor</option>
          <option value="Hair Dryer">Hair Dryer</option>
          <option
            value=""
            style={{ fontWeight: "bold", fontStyle: "italic" }}
            disabled
          >
            --- Bath Needs ---
          </option>
          <option value="Bath Caps">Bath Caps</option>
          <option value="Towels">Towels</option>
          <option value="Bath Robe">Bath Robe</option>
          <option value="Slipper">Slipper</option>
        </select>
      </div>

      <div className="form-group">
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={EnterReq}
        >
          Add
          <i className="bi bi-plus-circle" style={{ marginLeft: "5px" }}></i>
        </button>
        &emsp;
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={ClearList}
        >
          Clear List
          <i className="bi bi-x-circle" style={{ marginLeft: "5px" }}></i>
        </button>
      </div>

      <div className="form-group">
        <label htmlFor="requestedItem" className="form-label">
          Requested Items
        </label>
        <textarea
          className="form-control"
          id="requestedItem1"
          name="requestedItem1"
          rows="3"
          cols="50"
          placeholder="No Items Selected"
          disabled
        />
      </div>

      <div className="form-group">
        <label htmlFor="note" className="form-label">
          Notes
        </label>
        <textarea
          className="form-control"
          id="note"
          name="note"
          rows="6"
          cols="50"
          placeholder="Let us know more so that we can help you"
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
