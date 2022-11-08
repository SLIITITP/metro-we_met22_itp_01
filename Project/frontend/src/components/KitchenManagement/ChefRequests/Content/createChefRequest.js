import React, { useState } from "react";
import axios from "axios";

export default function CreateRequest() {
  return (
    <div
      className="container"
      style={{
        width: "40%",
        position: "sticky",
      }}
    >
      <form
        style={{
          marginTop: "50px",
          marginLeft: "-50px",
          width: "100%",
        }}
      >
        <h1 className="display-6" style={{ marginBottom: "20px" }}>
          Request Ingredient
        </h1>
      </form>
    </div>
  );
}
