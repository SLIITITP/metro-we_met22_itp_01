import React, { useState } from "react";
import axios from "axios";
import { useRef } from "react";
import "@progress/kendo-theme-default/dist/all.css";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import GetAllTransports from "../../Transport/Content/getTransportRequest";

import DisplayAllTransportForRep from "./DisplayAllTransportForRep";

export default function TransportReport() {
  const pdfExportComponent = useRef(null);

  function handleExportWithComponent(e) {
    pdfExportComponent.current.save();
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
      ></div>
      <PDFExport ref={pdfExportComponent} paperSize="A4" scale={0.5}>
        <div className="container">
          <h4 class="mb-3">All Transport Requests</h4>
          <DisplayAllTransportForRep />
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
