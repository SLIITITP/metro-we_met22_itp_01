import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function TrainerCustomer() {
  return (
    <div
      className="container"
      style={{
        width: "40%",
        marginTop: "100px",
      }}
    >
      {/*here we pass data like we usually pass data through useState"*/}
      <form style={{ marginTop: "100px" }}>
        <h1 className="display-6" style={{ marginBottom: "20px" }}>
          Trainer Request
        </h1>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Customer ID
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Customer ID"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            RoomID
          </label>
          <input
            type="text"
            className="form-control"
            id="age"
            placeholder="Enter Room ID"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="serviceType" className="form-label">
            Service Type
          </label>
          <select
            className="form-select"
            id="serviceType"
            aria-label="Default select example"
            required
          >
            <option value="">Choose Service</option>
            <option value="Swimming">Swimming</option>
            <option value="Gym">Gym</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="notes" className="form-label">
            Session On
          </label>
          <input
            type="date"
            id="schedule"
            name="schedule"
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="notes" className="form-label">
            Available Time
          </label>
          <input
            type="time"
            id="time"
            name="time"
            className="form-control"
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          // style={{ marginRight: "30px" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
