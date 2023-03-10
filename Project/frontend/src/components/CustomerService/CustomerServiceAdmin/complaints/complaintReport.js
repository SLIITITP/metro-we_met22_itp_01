import React, { useState } from "react";
import axios from "axios";
import { useRef } from "react";
import "@progress/kendo-theme-default/dist/all.css";
import { Button } from "@progress/kendo-react-buttons";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import GetAllComplaint from "../../ComplaintStaff/Content/getAllComplaint";
import DisplayComplaintRequestForRep from "./DisplayAllComplaintForRep";

export default function ComplaintReport() {
  const pdfExportComponent = useRef(null);

  function handleExportWithComponent(e) {
    pdfExportComponent.current.save();
  }

  const [search, setSearch] = useState("");

  var rest;
  var tran;
  var gym;
  var other;

  let array = [];

  var data = GetAllComplaint();

  function getData(value) {
    rest = 0;
    tran = 0;
    gym = 0;
    other = 0;

    for (var i = 0; i < data.length; i++) {
      if (value === data[i].date) {
        if (data[i].type === "GymRelated") gym += 1;
        else if (data[i].type === "TransportRelated") tran += 1;
        else if (data[i].type === "RestaurantRelated") rest += 1;
        else if (data[i].type === "Other") other += 1;
      }
    }
    console.log(tran);
    array.push({ Type: "Gym", ComplaintCount: gym });
    array.push({ Type: "Transport", ComplaintCount: tran });
    array.push({ Type: "Restaurant", ComplaintCount: rest });
    array.push({ Type: "Other", ComplaintCount: other });
  }

  return (
    <div>
      <div
        className="container"
        style={{
          marginTop: "180px",
          marginBottom: "20px",
          marginLeft: "220px",
        }}
      >
        <form className="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="text"
            id="search"
            placeholder="Search On Date"
            aria-label="Search"
            onChange={(e) => {
              setSearch(e.target.value);
              getData(e.target.value);
              e.preventDefault();
            }}
          />
        </form>
      </div>
      <PDFExport ref={pdfExportComponent} paperSize="A4" scale={0.5}>
        <div className="container">
          <h4 class="mb-3">All Complaints</h4>
          <DisplayComplaintRequestForRep search={search} />
        </div>
      </PDFExport>
      <div>
        <button
          type="button"
          class="btn btn-primary btn-sm"
          onClick={handleExportWithComponent}
          style={{ width: "90px" }}
        >
          Export
        </button>
      </div>
    </div>
  );
}
